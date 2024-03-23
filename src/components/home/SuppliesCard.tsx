import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";

const SuppliesCard = ({ ...supplies }) => {
  return (
    <motion.div
      className="mt-10 "
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <Card className="relative h-full mx-auto bg-purple-100 shadow-lg max-w-96">
        <img
          src={supplies.image}
          alt=""
          className="w-full mx-auto max-w-[340px] rounded-md"
        />
        <CardHeader>
          <CardTitle>
            <h2>Title: {supplies.title}</h2>
          </CardTitle>
          <CardDescription>
            <p className="mt-4 text-black">Category: {supplies.category}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-8">
          <p>Amount: ${supplies.amount}</p>
        </CardContent>
        <Link to={`/${supplies._id}`} state={supplies}>
          <Button
            className="absolute bottom-0 w-full text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700"
            variant="secondary"
          >
            View Details
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
};

export default SuppliesCard;
