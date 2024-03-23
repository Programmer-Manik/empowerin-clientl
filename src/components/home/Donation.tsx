import { Globe, User, Users2 } from "lucide-react";
import Container from "../container/Container";

const Donation = () => {
  return (
    <Container className="px-2 py-8 mt-24 bg-purple-600">
      <h1 className="mb-24 text-4xl font-bold text-center">
        Innovative Investments with Real-World Impact
      </h1>
      <div className="gap-5 text-white md:flex">
        <div className="flex flex-col flex-wrap items-center justify-center space-y-4">
          <Users2 className="w-24 h-24" />
          <p className="text-6xl font-extrabold text-center">1 Million</p>
          <p>People supported to become more resilient</p>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center space-y-4">
          <Globe className="w-24 h-24" />
          <p className="text-6xl font-extrabold">1000</p>
          <p>
            Organization supported through capacity and partnership building
            activities
          </p>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center space-y-4">
          <User className="w-24 h-24" />
          <p className="text-6xl font-extrabold">800K</p>
          <p>Users of early warning system or climate information</p>
        </div>
      </div>
    </Container>
  );
};

export default Donation;
