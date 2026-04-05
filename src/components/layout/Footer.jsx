import img from "../../assets/financeApp.jpg"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <img
            src={img}
            className="h-6 dark: bg-white"
            alt="logo"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Finance Dashboard
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Finance Dashboard
        </p>

      </div>

    </footer>
  );
};

export default Footer;