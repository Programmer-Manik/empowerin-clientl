import banner from "@/assets/images/images.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";

//use for gradient animation when image load
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="mt-24 shadow-sm">
      <motion.div
        className="w-full lg:max-w-[1000px] mx-auto mb-4 md:max-w-[700px]"
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img
          src={banner}
          alt=""
          onLoad={() => setIsLoaded(true)}
          className="w-full lg:max-w-[1000px] mx-auto mb-4 md:max-w-[700px]"
        />
      </motion.div>
      <div className="pt-2 w-full  lg:max-w-[1000px] mx-auto text-justify md:max-w-[760px]">
        <p className="mb-8 font-medium">
          Welcome to our 'Empowering Recovery Chain' Platform! Our mission is to
          ensure effective and efficient health and medical supply chain
          management in post-disaster scenarios. We strive to provide timely
          access to essential healthcare resources, including medicines, medical
          equipment, and personnel, to communities affected by disasters.
        </p>
        <p className="mb-4 font-medium">
          With a focus on resilience and sustainability, our platform aims to:
        </p>
        <ul className="space-y-3">
          <li>
            1. Facilitate rapid response: We aim to streamline the distribution
            of medical supplies and resources to affected communities, ensuring
            timely assistance during critical post-disaster periods.
          </li>
          <li>
            2. Enhance coordination: We foster collaboration among stakeholders,
            including government agencies, NGOs, healthcare providers, and
            volunteers, to optimize resource allocation and response efforts.
          </li>
          <li>
            3. Promote community resilience: By strengthening local healthcare
            systems and empowering communities to actively participate in
            disaster preparedness and response, we aim to build resilience
            against future crises.
          </li>
          <li>
            4. Ensure equity and accessibility: We are committed to ensuring
            that vulnerable populations, including those in remote or
            underserved areas, have equitable access to essential healthcare
            services and resources.
          </li>
          <li>
            5. Foster innovation: We continuously seek innovative solutions to
            enhance the efficiency, effectiveness, and sustainability of
            post-disaster healthcare supply chains, leveraging technology and
            data-driven insights.
          </li>
        </ul>
        <p className="pt-4 font-medium">
          Join us in our mission to safeguard community health and well-being in
          the face of adversity. Together, we can build resilient communities
          and mitigate the impact of disasters on public health
        </p>
      </div>
    </div>
  );
};

export default Banner;
