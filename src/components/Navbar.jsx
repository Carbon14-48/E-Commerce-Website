import { useTheme } from "../customHooks/useTheme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white  flex justify-between">
      <p>Logo</p>
      <ul className="flex gap-4">
        <li>
          <button onClick={toggleTheme} className="">
            {theme === "light" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon className="w-4 h-4" />
            )}
          </button>
        </li>
        <li>Home</li>
        <li>Products</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}
