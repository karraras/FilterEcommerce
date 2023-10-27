import { BsCartFill, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

function NavBar() {
  return (
    <div className="flex h-14 border-b-2 border-b-[#80808030] border-b-solid">
      <p className="w-[200px] flex items-center justify-center ">
        <BsCartFill />
      </p>
      <div className="w-[calc(100%-200px)] justify-around flex items-center border-l-[#80808030] border-l-solid border-l-2 h-full">
        <input
          type="text"
          className="bg-[#80808030] rounded px-2 outline-none "
          placeholder="Enter your search"
        />
        <div className="flex gap-5 items-center">
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
          <BsPerson />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
