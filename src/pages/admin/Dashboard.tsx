import { Chart } from "react-google-charts";

const Dashboard = () => {
  const data = [
    ["Donation Type", "Amount"],
    ["Medicine Donation", 600000],
    ["Blood Donation", 150000],
    ["Organ Donation", 65000],
    ["Equipment Donation", 25000],
    ["Volunteer Hours", 60500],
  ];

  const options = {
    title: "Donation Statistics",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
};

export default Dashboard;
