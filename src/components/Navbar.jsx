import Navlinks from "./Navlinks";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Dropdown, Flex } from "antd";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const numItemInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-base-200 mb-20 py-1">
      <div className="flex justify-between items-center align-element">
        <div className="hidden lg:block">
          <Link to={"/"}>
            <Button className="!bg-blue-950 !border-0 !text-white !text-xl w-12 rounded-xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-300">C</Button>
          </Link>
        </div>
        <div className=" lg:hidden">
          <Dropdown menu={Navlinks} placement="bottom">
            <Button>bottom</Button>
          </Dropdown>
        </div>
        <div className="hidden lg:navbar-center lg:block">
          <Flex className="list-none lg:gap-8 md:gap-3">
            <Navlinks />
          </Flex>
        </div>
        <div className=" flex items-center">
          <div>
            <ThemeController
              lightIcon={<IoMoonOutline />}
              darkIcon={<IoSunnyOutline />}
            />
          </div>
          <Link className="custom-btn !bg-transparent mt-2 ml-4" to={"/cart"}>
            <div className="indicator">
              <RiShoppingCartLine className="w-5 h-5" />
              <span className="badge badge-xs badge-primary indicator-item">
                {numItemInCart}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
