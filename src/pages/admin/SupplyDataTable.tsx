/* eslint-disable @typescript-eslint/no-unused-vars */
import { TSuppliesData } from "@/components/home/Supplies";
import UpdateSupplyModal from "@/components/modal/UpdateSupplyModal";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type TSupplyDataTableProps = {
  supplies: TSuppliesData;
  handleDelete: (id: string) => void;
};

const SupplyDataTable = ({ supplies, handleDelete }: TSupplyDataTableProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <TableRow key={supplies._id}>
      <TableCell className="font-medium">{supplies.title}</TableCell>
      <TableCell>{supplies.category}</TableCell>
      <TableCell>
        <p>${supplies.amount}</p>
      </TableCell>
      <TableCell className="text-right">
        <UpdateSupplyModal
          supplies={supplies}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      </TableCell>
      <TableCell className="text-right">
        <Link to="/dashboard/create-supply">
          <Button
            variant="secondary"
            className="hover:bg-gray-400 hover:text-white hover:font-bold"
          >
            <Plus />
          </Button>
        </Link>
      </TableCell>
      <TableCell className="text-right">
        <Button
          onClick={() => handleDelete(supplies._id as string)}
          variant="secondary"
          className=" hover:text-white hover:font-bold hover:bg-red-500"
        >
          <Trash />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SupplyDataTable;
