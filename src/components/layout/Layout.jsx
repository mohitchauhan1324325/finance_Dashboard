import RoleSwitcher from "../role/RoleSwitcher.jsx"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />

            <main>
                <RoleSwitcher />
                {children}
            </main>
        
            <Footer />
        </div>
    );
};

export default Layout;
