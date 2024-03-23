import Container from "../container/Container";
import aboutImage from "@/assets/images/b.jpeg";

const Summery = () => {
  return (
    <Container className="py-4 mt-24 bg-violet-500">
      <h1 className="mb-24 text-4xl font-bold text-center">Who we are?</h1>
      <div className="grid gap-5 text-white lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img src={aboutImage} alt="" className="w-full" />
        </div>
        <div className="text-justify lg:col-span-7">
          <h4 className="mt-3 mb-3 text-xl font-medium">About</h4>
          <p>
            Empowering Recovery Chain stands as a vital hub for coordinating and
            managing health and medical supplies in the aftermath of disasters.
            Recognizing the critical need for efficient and accessible resources
            during these challenging times, our platform leverages technology to
            empower communities and enhance recovery efforts.
          </p>
          <h4 className="mt-3 mb-3 text-xl font-medium">Our Mission</h4>
          <ul className="space-y-3">
            <li>
              1. Streamline the flow of critical resources: We aim to bridge the
              gap between those in need and the available supplies, ensuring
              communities have unimpeded access to essential medical assistance.
            </li>
            <li>
              2. Promote collaboration and transparency: We foster a platform
              where organizations and individuals can connect, share
              information, and coordinate efforts seamlessly.
            </li>
            <li>
              3. Facilitate faster response and recovery: By optimizing supply
              chains and logistics, we strive to deliver life-saving resources
              swiftly and effectively, paving the way for quicker and more
              impactful recovery.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Summery;
