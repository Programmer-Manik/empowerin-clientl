import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { Button } from "../ui/button";
import SuppliesCard from "./SuppliesCard";
import { Loader } from "lucide-react";
import { useState } from "react";

export type TSuppliesData = {
  _id?: string;
  title: string;
  category: string;
  amount: number;
  image?: string;
  description?: string;
};

const Supplies = () => {
  const [showAll, setShowAll] = useState(false);

  const { data: supplies, isLoading } = useGetSuppliesQuery("");

  if (isLoading) {
    return <Loader className="w-20 h-auto mx-auto" />;
  }

  const initialData = showAll ? supplies?.data : supplies?.data?.slice(0, 6);

  const handleMoreData = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 gap-8 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {initialData?.map((data: TSuppliesData) => (
          <SuppliesCard key={data?._id} {...data} />
        ))}
      </div>

      <div className="flex items-center justify-center w-48 mx-auto mt-12">
        {!showAll && (
          <Button
            onClick={handleMoreData}
            variant="secondary"
            className="w-48 text-lg font-medium text-white bg-purple-600 hover:text-white max-w-96 hover:bg-purple-700"
          >
            View More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Supplies;
