import Container from "../container/Container";
import donar1 from "@/assets/images/c1.png";
import donar2 from "@/assets/images/c2.png";
import donar3 from "@/assets/images/c3.png";
import donar4 from "@/assets/images/c4.png";
import donar5 from "@/assets/images/c5.png";
import donar6 from "@/assets/images/c6.png";
import donar7 from "@/assets/images/c7.png";
import donar8 from "@/assets/images/c8.jpg";
import donar9 from "@/assets/images/c9.png";
import donar10 from "@/assets/images/c10.png";
import donar11 from "@/assets/images/c11.jpg";
import donar12 from "@/assets/images/c12.png";
import donar13 from "@/assets/images/c13.png";
import donar14 from "@/assets/images/c14.png";
import donar15 from "@/assets/images/c15.png";

const Partnership = () => {
  return (
    <Container className="px-2 py-8 mt-24 bg-purple-600">
      <h1 className="mb-20 text-4xl font-bold text-center">
        We are the Global Resilience Partnership
      </h1>
      <p className="max-w-[1000px] mx-auto text-justify text-white">
        GRP is made up of organisations joining forces to work together towards
        a world where people and places persist, adapt and transform in the face
        of shocks, uncertainty and change. GRP believes that resilience
        underpins sustainable development in an increasingly unpredictable
        world.
      </p>
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        <img
          src={donar1}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar2}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar3}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar4}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar5}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar6}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar7}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar8}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar9}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar10}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar11}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar12}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar13}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar14}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
        <img
          src={donar15}
          alt=""
          className="w-40 h-40 p-5 bg-white rounded-sm"
        />
      </div>
    </Container>
  );
};

export default Partnership;
