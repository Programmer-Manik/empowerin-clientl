import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import InputField from "../form/InputField";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUpdateSupplyMutation } from "@/redux/features/supplies/suppliesApi";
import { TSuppliesData } from "../home/Supplies";
import axios from "axios";
import {
  SuppliesValidationSchema,
  suppliesValidationSchema,
} from "../validation/suppliesValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type TUpdateModalProps = {
  setIsOpenModal: (isOpen: boolean) => void;
  isOpenModal: boolean;
  supplies: TSuppliesData;
};

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const UpdateSupplyModal = ({
  isOpenModal,
  setIsOpenModal,
  supplies,
}: TUpdateModalProps) => {
  const { register, handleSubmit, reset } = useForm<SuppliesValidationSchema>({
    resolver: zodResolver(suppliesValidationSchema),
  });
  const navigate = useNavigate();

  const [updateSupply] = useUpdateSupplyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      //image hosting
      const formData = new FormData();
      formData.append("image", data.image[0]);

      // image hosting and get url
      const response = await axios.post(api_url, formData, {
        params: { key: image_hosting_api },
      });

      // extract image url from response
      const imageUrl = response.data?.data?.display_url;

      const updateDoc = {
        title: data.title,
        category: data.category,
        amount: data.amount,
        image: imageUrl,
        description: data.description,
      };

      const res = await updateSupply({ id: supplies._id, updateDoc });

      reset();

      if ("data" in res && res?.data?.success) {
        toast("Supply data updated successful ");
        navigate("/dashboard/supplies");
      } else {
        toast("Supply data updated failed ");
      }
    } catch (error) {
      toast("something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpenModal(!isOpenModal)}
          variant="secondary"
          className="hover:bg-gray-400 hover:text-white hover:font-bold"
        >
          <Edit />
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
            defaultValues={supplies.title}
          />
          <InputField
            type="text"
            label="Category"
            name="category"
            register={register("category")}
            placeholder="write a category"
            defaultValues={supplies.category}
          />

          <InputField
            type="number"
            label="Amount"
            name="amount"
            register={register("amount")}
            placeholder="give an amount"
            defaultValues={supplies.amount}
          />

          <InputField
            type="file"
            label="Image"
            name="image"
            register={register("image")}
            placeholder="upload a image"
          />
          <Label>Description</Label>
          <Textarea
            {...register("description")}
            placeholder="write a description"
            defaultValue={supplies.description}
            className="mt-2"
          />
          <DialogClose>
            <Button
              type="submit"
              className="mt-4 text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700"
              variant="secondary"
            >
              Update Supply
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateSupplyModal;
