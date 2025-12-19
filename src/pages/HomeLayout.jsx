import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components/index";
import { Spin } from "antd";

const HomeLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="align-element">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default HomeLayout;
