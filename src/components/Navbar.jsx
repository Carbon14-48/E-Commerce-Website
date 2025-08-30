import { useTheme } from "../customHooks/useTheme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <nav className="bg-slate-300 dark:bg-black text-black dark:text-white flex justify-between items-center px-6 py-3 shadow-md">
      <img src={logo} alt="Logo" className="w-32 cursor-pointer" />

      <ul className="flex gap-6 items-center">
        <li>
          <button
            onClick={toggleTheme}
            className="hover:bg-blue-500 dark:hover:bg-blue-500 rounded-full p-2 transition pb-3.5"
          >
            {theme === "light" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </button>
        </li>

        <li className="cursor-pointer border-b-2 border-transparent  hover:border-blue-500 transition">
          Home
        </li>
        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition">
          Products
        </li>
        <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
          <ShoppingCartCheckoutOutlinedIcon className="text-blue-500" />
          Checkout
        </li>
        <li className="cursor-pointer flex gap-2 border-b-2 border-transparent p-1 hover:border-blue-500 transition">
          <AccountCircleOutlinedIcon className="text-blue-500" />
          Profile
        </li>
      </ul>
    </nav>
  );
}
