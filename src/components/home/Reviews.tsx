import { useGetReviewsQuery } from "@/redux/features/reviews/reviewsApi";
import { Loader } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../container/Container";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface IReview {
  _id: string;
  name: string;
  rating: number;
  review: string;
  image: string;
}

const Reviews = () => {
  const { data, isLoading } = useGetReviewsQuery("");

  if (isLoading) {
    return <Loader className="w-20 h-auto mx-auto" />;
  }

  const reviews = data?.data?.slice(0, 6);

  return (
    <Container className="p-3 mt-24 text-black rounded-sm bg-violet-100">
      <h1 className="mb-16 text-4xl font-bold text-center">
        Whats our client say's
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review:IReview) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-center justify-center gap-5 mb-12">
              <div className="mt-2">
                <img
                  src={review?.image}
                  alt=""
                  className="w-24 h-24 rounded-full "
                />
              </div>
              <div className="w-full lg:max-w-[800px]">
                <h3 className="mb-3 text-xl font-medium">{review?.name}</h3>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={review.rating}
                  readOnly
                />

                <p className="pt-3">{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Reviews;
