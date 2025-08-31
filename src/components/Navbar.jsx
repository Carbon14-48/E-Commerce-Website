import { useTheme } from "../customHooks/useTheme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log(theme);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white flex flex-wrap justify-between items-center px-6 py-3 shadow-md">
      <img src={logo} alt="Logo" className="w-32 cursor-pointer" />

      <ul className="flex gap-6 items-center">
        <li>
          <button
            onClick={toggleTheme}
            className="hover:bg-blue-500/20 dark:hover:bg-blue-500/20 rounded-full p-2 transition pb-3.5"
          >
            {theme === "light" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="cursor-pointer hover:bg-blue-500/20 dark:hover:bg-blue-500/20 rounded-full transition pb-2"
          >
            <MenuOutlinedIcon className="sm:sr-only" />
          </button>
        </li>
        <div
          className={`
  flex gap-6 items-center transition-all duration-300
  max-sm:absolute max-sm:top-full max-sm:left-0 max-sm:w-full 
  max-sm:bg-white/90 max-sm:dark:bg-black/90 max-sm:backdrop-blur-md
  max-sm:flex-col max-sm:py-4
  ${isCollapsed ? "max-sm:hidden" : "max-sm:flex"}
`}
        >
          <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
            <Link to="/products">Products</Link>
          </li>
          <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
            <ShoppingCartCheckoutOutlinedIcon className="text-blue-500" />
            <Link to="/checkout">Checkout</Link>
          </li>
          <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
            <AccountCircleOutlinedIcon className="text-blue-500" />
            <Link to="/user">Profile</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
