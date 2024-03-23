import { TableCell, TableRow } from "@/components/ui/table";
// type TDonor = {
//   image: string;
//   userName: string;
//   email: string;
//   totalAmount: number;
// };
// type TDonorProps = {
//   donor: TDonor;
// };

type TDonorProps = {
  _id?: string;
  userName?: string;
  email?: string;
  totalAmount?: number | undefined;
  amount?: number;
  image?: string;
  description?: string;
};

const LeaderboardTable = ({ donor }: { donor: TDonorProps }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <img src={donor?.image} alt="" className="w-12 h-12 rounded-full" />
      </TableCell>
      <TableCell className="font-medium">
        <p>{donor?.userName}</p>
      </TableCell>
      <TableCell>
        <p>{donor?.email}</p>
      </TableCell>
      <TableCell>
        <p>${donor?.totalAmount}</p>
      </TableCell>
    </TableRow>
  );
};

export default LeaderboardTable;
