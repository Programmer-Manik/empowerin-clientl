import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddSupplyMutation } from "@/redux/features/supplies/suppliesApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  SuppliesValidationSchema,
  suppliesValidationSchema,
} from "@/components/validation/suppliesValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const AddSupply = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SuppliesValidationSchema>({
    resolver: zodResolver(suppliesValidationSchema),
  });

  const navigate = useNavigate();

  const [createSupply] = useAddSupplyMutation();

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

      const suppliesData = {
        title: data.title,
        category: data.category,
        amount: Number(data.amount),
        image: imageUrl,
        description: data.description,
      };

      const res = await createSupply(suppliesData);

      reset();

      if ("data" in res && res.data?.success) {
        toast("supply created successful");
        navigate("/dashboard/supplies");
      }
    } catch (error) {
      // console.log("error", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-6 mx-auto mt-24 max-w-96"
    >
      <InputField
        type="text"
        label="Title"
        name="title"
        register={register("title")}
        placeholder="write a title"
      />
      {errors.title && (
        <span className="text-red-400">This field is required</span>
      )}

      <InputField
        type="text"
        label="Category"
        name="category"
        register={register("category")}
        placeholder="write a category"
      />
      {errors.category && (
        <span className="text-red-400">This field is required</span>
      )}
      <InputField
        type="number"
        label="Amount"
        name="amount"
        register={register("amount")}
        placeholder="give an amount"
      />
      {errors.amount && (
        <span className="text-red-400">this is required field</span>
      )}
      <InputField
        type="file"
        label="Image"
        name="image"
        register={register("image")}
        placeholder="upload a image"
      />
      {errors.image && (
        <span className="text-red-400">Select a image file max 10 mb</span>
      )}
      <Label className="mb-2">Description</Label>
      <Textarea
        {...register("description")}
        placeholder="write a description"
      />
      {errors.description && (
        <span className="text-red-400">This field is required</span>
      )}
      <Button
        type="submit"
        variant={"secondary"}
        className="mt-4 text-lg font-medium text-white bg-purple-600 end max-w-96 hover:text-white hover:bg-purple-700"
      >
        Add Supply
      </Button>
    </form>
  );
};

export default AddSupply;
