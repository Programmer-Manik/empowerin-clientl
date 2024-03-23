import { Link, useLocation } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DonateModal from "../modal/DonateModal";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
const CardDetails = () => {
  const { user } = useAppSelector((state) => state.auth);

  const location = useLocation();
  const { title, image, category, amount, description } = location.state;
  return (
    <Card className="mx-auto max-w-[1000px] mt-24 bg-purple-100">
      <img src={image} alt="" className="w-full p-3 mx-auto rounded-lg" />
      <CardHeader>
        <CardTitle>
          <h2>Title: {title} </h2>
        </CardTitle>
        <CardDescription>
          <p className="mt-4 text-black">Category: {category}</p>
          <p className="mt-4 text-black">Description: {description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Amount: ${amount} </p>
      </CardContent>
      <CardFooter className="flex end-0">
        {user && user ? (
          <DonateModal />
        ) : (
          <Link to="/login">
            <Button
              className="w-full text-lg font-medium text-white bg-purple-600  max-w-96 hover:bg-purple-700"
              variant="secondary"
            >
              Donate Now
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardDetails;
