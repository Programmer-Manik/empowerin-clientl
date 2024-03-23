import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import {
  VolunteerValidationSchema,
  volunteerValidationSchema,
} from "@/components/validation/volunteerValidation";
import { useCreateVolunteerMutation } from "@/redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const Volunteer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerValidationSchema>({
    resolver: zodResolver(volunteerValidationSchema),
  });

  const navigate = useNavigate();
  const [addVolunteer] = useCreateVolunteerMutation();

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

      const volunteerData = {
        ...data,
        image: imageUrl,
      };

      const res = await addVolunteer(volunteerData);
      reset();
      if ("data" in res && res?.data?.success) {
        toast("Volunteer registration successful", { duration: 2000 });
        navigate("/about-us");
      } else {
        toast("Volunteer registration failed");
      }
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
      <InputField
        type="text"
        register={register("name")}
        name="name"
        label="Name"
      />
      {errors.name && (
        <span className="text-red-400">{errors?.name?.message}</span>
      )}
      <InputField
        type="email"
        register={register("email")}
        name="email"
        label="Email"
      />
      {errors.email && (
        <span className="text-red-400">{errors?.email?.message}</span>
      )}
      <InputField
        type="text"
        register={register("contactNo")}
        name="contactNo"
        label="Phone Number"
      />
      {errors.contactNo && (
        <span className="text-red-400">{errors?.contactNo?.message}</span>
      )}
      <InputField
        type="text"
        register={register("address")}
        name="address"
        label="Address"
      />
      {errors.address && (
        <span className="text-red-400">{errors?.address?.message}</span>
      )}
      <InputField
        type="file"
        register={register("image")}
        name="image"
        label="Image"
      />
      {errors?.image && <span className="text-red-400">Image is required</span>}
      <InputField
        type="text"
        register={register("time")}
        name="time"
        label="Working Hour"
        placeholder="give your working time maximum 8 hours"
      />
      {errors.time && (
        <span className="text-red-400">{errors?.time?.message}</span>
      )}
      <Button
        type="submit"
        className="text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700"
      >
        Submit
      </Button>
    </form>
  );
};

export default Volunteer;
