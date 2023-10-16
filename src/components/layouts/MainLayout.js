import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children, placeholder }) => {
  return (
    <>
      <Header placeholder={placeholder} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;