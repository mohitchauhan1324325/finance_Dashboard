import RoleSwitcher from "../role/RoleSwitcher.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6 space-y-6">
        <RoleSwitcher />
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;