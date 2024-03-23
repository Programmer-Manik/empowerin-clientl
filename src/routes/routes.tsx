import App from "@/App";
import CardDetails from "@/components/home/CardDetails";
import Supplies from "@/components/home/Supplies";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Errors from "@/components/layouts/Errors";
import ProtectedPage from "@/components/layouts/ProtectedPage";
import GratitudeWall from "@/pages/GratitudeWall";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AddSupply from "@/pages/admin/AddSupply";
import AllSupplies from "@/pages/admin/AllSupplies";
import Dashboard from "@/pages/admin/Dashboard";
import DonorLeaderboard from "@/pages/DonorLeaderboard";
import { createBrowserRouter } from "react-router-dom";
import CreateTestimonial from "@/pages/admin/CreateTestimonial";
import Volunteer from "@/pages/Volunteer";
import AboutUs from "@/pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-supplies",
        element: <Supplies />,
      },
      {
        path: "/:id",
        element: <CardDetails />,
      },
      {
        path: "/community",
        element: <GratitudeWall />,
      },
      {
        path: "/leaderboard",
        element: <DonorLeaderboard />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedPage>
            <Dashboard />
          </ProtectedPage>
        ),
      },
      {
        path: "/dashboard/supplies",
        element: (
          <ProtectedPage>
            <AllSupplies />
          </ProtectedPage>
        ),
      },
      {
        path: "/dashboard/create-supply",
        element: (
          <ProtectedPage>
            <AddSupply />
          </ProtectedPage>
        ),
      },
      {
        path: "/dashboard/create-testimonial",
        element: (
          <ProtectedPage>
            <CreateTestimonial />
          </ProtectedPage>
        ),
      },
    ],
  },
]);
export default router;
