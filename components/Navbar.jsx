import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
// import { Cart } from "./";
// import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  // const { showCart, setShowCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">MY E-SHOP</Link>
      </p>

      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>

      {/* {<Cart />} */}
    </div>
  );
};

export default Navbar;
