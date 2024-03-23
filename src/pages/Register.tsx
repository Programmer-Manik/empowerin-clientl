import InputField from "@/components/form/InputField";
import {
  UserValidationSchema,
  userRegistrationSchema,
} from "@/components/validation/RegisterFormValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useCreateUserMutation } from "@/redux/features/auth/authApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserValidationSchema>({
    resolver: zodResolver(userRegistrationSchema),
  });

  const navigate = useNavigate();

  const [createUser] = useCreateUserMutation();

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

      const createUserInfo = {
        name: data.userName,
        email: data.email,
        password: data.password,
        image: imageUrl,
      };

      const res = await createUser(createUserInfo);

      reset();
      if ("data" in res && res?.data?.success) {
        toast("USer registration successful");
        navigate("/login");
      } else {
        toast("User registration failed");
      }
    } catch (error) {
      //
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-24 mx-auto max-w-96">
      <InputField
        type="text"
        label="User Name"
        name="userName"
        register={register("userName")}
        placeholder="type your name"
      />
      {errors.userName && (
        <span className="mb-3 text-lg text-red-500">
          {errors.userName.message}
        </span>
      )}
      <InputField
        type="email"
        label="Email"
        name="email"
        register={register("email")}
        placeholder="type your email"
      />
      {errors.email && (
        <span className="mb-3 text-lg text-red-500">
          {errors.email.message}
        </span>
      )}

      <InputField
        type="file"
        label="Image"
        name="image"
        register={register("image")}
      />

      <InputField
        type="password"
        label="Password"
        name="password"
        register={register("password")}
        placeholder="type your password"
      />
      {errors.password && (
        <span className="mb-3 text-lg text-red-500">
          {errors.password.message}
        </span>
      )}

      <p>
        Already have an account? please
        <Link to="/login" className="ml-2 text-red-500 underline">
          login
        </Link>
      </p>
      <Button
        type="submit"
        variant="secondary"
        className="mt-4 text-lg font-medium text-white bg-purple-600 w-28 max-w-96 hover:bg-purple-700"
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
