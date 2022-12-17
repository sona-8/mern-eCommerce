// Components
import NavBar from "../Components/Header/";
import Footer from "../Components/Footer/";
import Headercategories from "../Components/Header/Category";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  console.log("Layout is randaring");
  return (
    <Box sx={{ position: "relative" }}>
      <NavBar />
      <Headercategories />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
