import { useTheme } from "../customHooks/useTheme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import whiteLogo from "../assets/whiteLogo.svg";
import blackLogo from "../assets/blackLogo.svg";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log(theme);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white flex flex-wrap justify-between items-center px-6 py-3 shadow-md">
        <img
          src={theme === "light" ? blackLogo : whiteLogo}
          alt="Logo"
          className="w-35 cursor-pointer"
        />

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
              className="cursor-pointer hover:bg-blue-500/20 dark:hover:bg-blue-500/20 rounded-full transition pb-2 sm:hidden"
            >
              <MenuOutlinedIcon />
            </button>
          </li>
          <div className="hidden sm:flex gap-6 items-center">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
              <Link to="/products">Products</Link>
            </li>
            <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
              <ShoppingCartCheckoutOutlinedIcon className="text-blue-500 animate-bounce" />
              <Link to="/checkout">Checkout</Link>
            </li>
            <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
              <AccountCircleOutlinedIcon className="text-blue-500" />
              <Link to="/user">Profile</Link>
            </li>
          </div>
        </ul>
      </nav>
      <div
        className={`
          fixed inset-0 z-40 sm:hidden
          bg-black/50 backdrop-blur-sm
          flex items-center justify-center
          transition-all duration-300
          ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
        onClick={() => setIsCollapsed(true)}
      >
        <div
          className={`
            bg-white dark:bg-gray-900 
            rounded-lg shadow-xl
            p-8 m-4
            w-full max-w-sm
            transform transition-all duration-300
            ${isCollapsed ? "scale-95 opacity-0" : "scale-100 opacity-100"}
          `}
        >
          <ul className="flex flex-col gap-6 items-center text-black dark:text-white">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
              <Link to="/" onClick={() => setIsCollapsed(true)}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
              <Link to="/products" onClick={() => setIsCollapsed(true)}>
                Products
              </Link>
            </li>
            <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
              <ShoppingCartCheckoutOutlinedIcon className="text-blue-500 animate-bounce" />
              <Link to="/checkout" onClick={() => setIsCollapsed(true)}>
                Checkout
              </Link>
            </li>
            <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
              <AccountCircleOutlinedIcon className="text-blue-500" />
              <Link to="/user" onClick={() => setIsCollapsed(true)}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
