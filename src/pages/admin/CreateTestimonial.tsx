import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useGetAllUsersQuery } from "@/redux/features/auth/authApi";
import { useCreateReviewsMutation } from "@/redux/features/reviews/reviewsApi";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
export type TAllUser = {
  _id: string;
  email: string;
  image: string;
};

const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAppSelector((state) => state.auth);

  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined);

  const [createReviews] = useCreateReviewsMutation();

  if (isLoading) {
    return <p className="w-24 mx-auto">Loading...</p>;
  }

  const currentUser = allUsers?.data?.find(
    (singleUser: TAllUser) => singleUser.email === user?.email
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const testimonialData = {
      review: data?.review,
      name: user?.userName,
      email: user?.email,
      image: currentUser?.image,
      // rating: data.rating,
      rating: Number(data?.rating),
      createdAt: new Date().toLocaleDateString(),
      createTime: new Date().toLocaleTimeString(),
      isDeleted: false,
    };

    const res = await createReviews(testimonialData);
    reset();

    if ("data" in res && res.data.success) {
      toast("Your review success");
    } else {
      toast("Review failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-9/12 mx-auto mt-24 space-y-3"
    >
      <p className="mb-6 text-3xl">Write Your Review</p>
      <Label>Review</Label>
      <Textarea
        {...register("review")}
        placeholder="write your review....."
        className="mt-1"
      />

      <InputField
        type="number"
        name="rating"
        register={register("rating")}
        label="Rating"
        placeholder="give a rating maximum 5"
      />

      <Button
        type="submit"
        variant={"ghost"}
        className="mt-2 text-lg font-medium text-white bg-purple-600 max-w-96 hover:text-white hover:bg-purple-700"
      >
        Post Review
      </Button>
    </form>
  );
};

export default CreateTestimonial;
