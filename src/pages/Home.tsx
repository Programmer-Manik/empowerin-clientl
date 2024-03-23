import Container from "@/components/container/Container";
import Banner from "@/components/home/Banner";
import Donation from "@/components/home/Donation";
import GallerySection from "@/components/home/GallerySection";
import Partnership from "@/components/home/Partnership";
import Reviews from "@/components/home/Reviews";
import Summery from "@/components/home/Summery";
import Supplies from "@/components/home/Supplies";

const Home = () => {
  return (
    <Container className="mt-24">
      <Banner />
      <Supplies />
      <Reviews />
      <GallerySection />
      <Summery />
      <Donation />
      <Partnership />
    </Container>
  );
};

export default Home;
