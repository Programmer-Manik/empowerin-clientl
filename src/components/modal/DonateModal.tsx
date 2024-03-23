/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputField from "../form/InputField";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Textarea } from "../ui/textarea";
import { donation } from "@/redux/features/supplies/suppliesSlice";
import { Label } from "../ui/label";
import { useAddDonationMutation } from "@/redux/features/donation/donation.api";
import { useGetAllUsersQuery } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const DonateModal = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAppSelector((state) => state.auth);

  const { data: allUsers } = useGetAllUsersQuery("");

  const currentUserInfo = allUsers?.data?.find(
    (auth: any) => auth.email === user?.email
  );

  const [addDonation] = useAddDonationMutation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const donateData = {
      userName: currentUserInfo?.name,
      email: user?.email,
      title: data.title,
      category: data.category,
      amount: Number(data.amount),
      image: currentUserInfo?.image,
      description: data.description,
    };

    const res = await addDonation(donateData);
    reset();

    if ("data" in res && res?.data?.success) {
      toast("You have successfully donated");
      dispatch(donation(donateData));
      navigate("/dashboard");
    } else {
      toast("Donated failed. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700"
          variant="secondary"
        >
          Donate now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            label="Title"
            name="title"
            register={register("title")}
            placeholder="write a title"
          />
          <InputField
            type="text"
            label="Category"
            name="category"
            register={register("category")}
            placeholder="write a category"
          />

          <InputField
            type="number"
            label="Amount"
            name="amount"
            register={register("amount")}
            placeholder="give an amount"
          />

          <Label>Description</Label>
          <Textarea {...register("description")} />

          <DialogClose>
            <Button
              type="submit"
              className="w-full mt-4 text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700"
              variant="secondary"
            >
              Donate
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;
