import Navlinks from "./Navlinks";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Flex } from "antd";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const numItemInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-base-200 mb-20">
      <div className="navbar align-element">
        <div className="hidden lg:block lg:navbar-start">
          <Button className="!bg-blue-950 !border-0 !text-white !text-xl w-12 rounded-xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-300">
            <Link to={"/"}>C</Link>
          </Button>
        </div>
        <div className="navbar-start lg:hidden">
          <details className="dropdown">
            <summary className="btn m-1">
              <RxHamburgerMenu className="w-5 h-5" />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <Navlinks />
            </ul>
          </details>
        </div>
        <div className="hidden lg:navbar-center lg:block">
          <Flex className="list-none lg:gap-8 md:gap-3">
            <Navlinks />
          </Flex>
        </div>
        <div className="navbar-end flex items-center">
          <div>
            <ThemeController lightIcon={<IoMoonOutline />} darkIcon={<IoSunnyOutline />} />
          </div>
          <Link className="btn btn-ghost btn-circle btn-md ml-4" to={"/cart"}>
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
