import { TableCell, TableRow } from "@/components/ui/table";

type TVolunteer = {
  _id?: string;
  image?: string;
  name?: string;
  email?: string;
  contactNo?: string;
  address?: string;
  time?: string;
};

type TVolunteerTableProps = {
  volunteer: TVolunteer;
};

const VolunteerTable = ({ volunteer }: TVolunteerTableProps) => {
  return (
    <TableRow key={volunteer._id}>
      <TableCell className="font-medium">
        <img src={volunteer?.image} className="w-24 h-24 rounded-md" alt="" />
      </TableCell>
      <TableCell>{volunteer?.name}</TableCell>
      <TableCell>{volunteer?.email}</TableCell>
      <TableCell>{volunteer?.contactNo}</TableCell>
      <TableCell>{volunteer?.address}</TableCell>
      <TableCell>{volunteer?.time}</TableCell>
    </TableRow>
  );
};

export default VolunteerTable;
