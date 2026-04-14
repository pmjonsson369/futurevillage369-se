import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main className="pt-16">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
