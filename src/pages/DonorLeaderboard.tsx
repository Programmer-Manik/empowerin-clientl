// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import LeaderboardTable from "../components/home/LeaderboardTable";
// import { useGetAllDonationQuery } from "@/redux/features/donation/donation.api";

// type TDonor = {
//   _id?: string;
//   userName?: string;
//   category?: string;
//   email?: string;
//   totalAmount?: number;
//   amount?: number;
//   image?: string;
//   description?: string;
// };

// const DonorLeaderboard = () => {
//   const { data: allDonors } = useGetAllDonationQuery("");

//   const donorInfo: Record<string, TDonor> = {};

//   allDonors?.data?.forEach((donor: TDonor) => {
//     const { email, amount, _id, userName, category, image } = donor;

//     if (email) {
//       if (!donorInfo[email]) {
//         donorInfo[email] = {
//           _id,
//           userName,
//           email,
//           image,
//           category,
//           totalAmount: 0,
//         };
//       }
//    }
//     donorInfo[email].totalAmount! += Number(amount);
//   });

//   const donors = Object.values(donorInfo);

//   return (
//     <Table className="mb-4">
//       <TableHeader>
//         <TableRow>
//           <TableHead className="text-xl font-medium ">Avatar</TableHead>
//           <TableHead className="text-xl font-medium ">Name</TableHead>
//           <TableHead className="text-xl font-medium">Email</TableHead>
//           <TableHead className="text-xl font-medium">Amount</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {donors?.map((donor:TDonor) => (
//           <LeaderboardTable donor={donor} key={donor._id} />
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default DonorLeaderboard;

//.........................
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LeaderboardTable from "../components/home/LeaderboardTable";
import { useGetAllDonationQuery } from "@/redux/features/donation/donation.api";

type TDonor = {
  _id?: string;
  userName?: string;
  category?: string;
  email?: string;
  totalAmount?: number | undefined;
  amount?: number;
  image?: string;
  description?: string;
};

const DonorLeaderboard = () => {
  const { data: allDonors } = useGetAllDonationQuery("");

  const donorInfo: Record<string, TDonor> = {};
  allDonors?.data?.forEach((donor: TDonor) => {
    const { email, amount, _id, userName, category, image } = donor;
    if (email) {
      // Type guard to ensure email is defined
      if (!donorInfo[email]) {
        donorInfo[email] = {
          _id,
          userName,
          email,
          image,
          category,
          totalAmount: 0,
        };
      }
      donorInfo[email].totalAmount! += Number(amount);
    }
  });

  const donors = Object.values(donorInfo);

  return (
    <Table className="mb-4">
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl font-medium ">Avatar</TableHead>
          <TableHead className="text-xl font-medium ">Name</TableHead>
          <TableHead className="text-xl font-medium">Email</TableHead>
          <TableHead className="text-xl font-medium">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donors?.map((donor: TDonor) => (
          <LeaderboardTable donor={donor} key={donor._id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default DonorLeaderboard;
