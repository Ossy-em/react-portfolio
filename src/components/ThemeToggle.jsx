import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 
                 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                 transition-all duration-300"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-gray-700" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
