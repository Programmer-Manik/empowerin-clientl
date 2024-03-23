import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllVolunteersQuery } from "@/redux/features/auth/authApi";
import { Loader } from "lucide-react";
import VolunteerTable from "./VolunteerTable";

type TVolunteer ={
  _id?: string;
  image?: string;
  name?: string;
  email?: string;
  phoneNo?: string;
  address?: string;
  workTime?: string;
}

const AboutUs = () => {
  const { data: volunteers, isLoading } = useGetAllVolunteersQuery(undefined);
  if (isLoading) {
    return <Loader className="w-24 mx-auto" />;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl font-medium ">Image</TableHead>
          <TableHead className="text-xl font-medium">Name</TableHead>
          <TableHead className="text-xl font-medium">Email</TableHead>
          <TableHead className="text-xl font-medium">Phone No</TableHead>
          <TableHead className="text-xl font-medium">Address</TableHead>
          <TableHead className="text-xl font-medium">Work time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {volunteers?.data?.map((volunteer: TVolunteer) => (
          <VolunteerTable volunteer={volunteer} key={volunteer._id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default AboutUs;
