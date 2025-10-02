import { Sun, Moon } from 'lucide-react';

export default function DarkMode({ onDark, darkMode}){

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
}
    return(
        <button onClick={() => {
            toggleDarkMode();
            onDark();
        }}  className=" flex items-center justify-center cursor-pointer p-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full">
        <Sun
            size={20}
            className={`absolute transition-transform duration-200 ${
            darkMode ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
        />
        <Moon
            size={20}
            className={`absolute transition-transform duration-200 ${
            darkMode ? "translate-y-02 opacity-100" : "translate-y-full opacity-0"
            }`}
        />
        </button>
    );
}