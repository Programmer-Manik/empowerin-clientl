import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "@/redux/features/auth/authSlice";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { darkMode } from "@/redux/features/theme/themeSlice";
import { Moon, Sun, Menu } from "lucide-react";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { themeMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChangeTheme = () => {
    dispatch(darkMode());
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navMenu = (
    <>
      {user && user ? (
        <>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/all-supplies"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Supplies
            </NavLink>
          </motion.li>

          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/volunteer"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Volunteer
            </NavLink>
          </motion.li>

          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/leaderboard"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Leaderboard
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/community"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Community
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/dashboard"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Dashboard
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/about-us"
              className="px-1 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              About-Us
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => {
                dispatch(logoutUser());
                handleLinkClick();
              }}
              className="px-1 py-1 rounded-md"
            >
              Logout
            </button>
          </motion.li>
        </>
      ) : (
        <>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/"
              className="px-2 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/all-supplies"
              className="px-2 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Supplies
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/login"
              className="px-2 py-1 rounded-md"
              onClick={handleLinkClick}
            >
              Login
            </NavLink>
          </motion.li>
        </>
      )}
    </>
  );

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 ${
        isMenuOpen ? "mb-60" : "mb-4"
      }`}
    >
      <div>
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
            <img src={logo} alt="" className="w-12 h-12" />E
            <span className="text-orange-400">R</span> C
          </Link>
        </div>
        <h2 className="font-medium text-md">
          Empowering <span className="text-orange-400">Recovery</span> Chain
        </h2>
      </div>
      <nav className="flex items-center space-x-1 text-xl font-medium">
        <ul className="flex-wrap items-center hidden space-x-1 md:flex">
          {navMenu}
        </ul>
        <div className="md:hidden">
          <button
            onClick={handleMenuClick}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              onClick={handleMenuClick}
              className="fixed inset-0 opacity-50"
            ></div>
            <ul className="absolute top-0 right-0 p-6 mt-16 rounded-md shadow-lg w-36">
              {navMenu}
            </ul>
          </div>
        )}
        <button
          onClick={handleChangeTheme}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {themeMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
