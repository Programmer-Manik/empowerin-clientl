import {
  useDeleteSupplyMutation,
  useGetSuppliesQuery,
} from "@/redux/features/supplies/suppliesApi";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Swal from "sweetalert2";

import SupplyDataTable from "./SupplyDataTable";
import { TSuppliesData } from "@/components/home/Supplies";
const AllSupplies = () => {
  const { data } = useGetSuppliesQuery("");

  const [deleteSupply] = useDeleteSupplyMutation();

  // if (data?.data?.length <= 0) {
  //   return <p>Supplies data not found</p>;
  // }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSupply(id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: `Your requested supply ${id} has been deleted.`,
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-medium text-xl">Title</TableHead>
          <TableHead className="text-xl font-medium">Category</TableHead>
          <TableHead className="text-xl font-medium">Amount</TableHead>
          <TableHead className="text-xl font-medium text-right">
            Edit-Supply
          </TableHead>
          <TableHead className="text-xl font-medium text-right">
            Add-Supply
          </TableHead>
          <TableHead className="text-xl font-medium text-right">
            Delete
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.map((supplies: TSuppliesData) => (
          <SupplyDataTable
            supplies={supplies}
            key={supplies._id}
            handleDelete={handleDelete}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default AllSupplies;
