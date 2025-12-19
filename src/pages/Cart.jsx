import { useSelector } from "react-redux";
import { CartItemList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router";
import { Button } from "antd";
const Cart = () => {
  //temp
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text={"Your cart is enmpty"} />;
  }
  return (
    <>
      <SectionTitle text={"Shopping cart"} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to={"/checkout"} className="mt-8">
              <Button className="custom-btn mt-5 w-full">procced to checkout</Button>
            </Link>
          ) : (
            <Link to={"/login"} className="mt-8">
              <Button className="custom-btn mt-5 w-full">Please login</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
