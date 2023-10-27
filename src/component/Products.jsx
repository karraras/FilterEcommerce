import { Prod } from "../context/Content";
import CardItem from "./CardItem";
import { useState } from "react";

import { UseGlobalContext } from "../context/Context";
function Products() {
  const { setBrand, data, Brand } = UseGlobalContext();
  const [mark, setMark] = useState(0);

  // Brand === "$0 - $50"
  // ? item.newPrice <= 50
  // : Brand === "$50 - $100"
  // ? item.newPrice <= 100
  // : Brand === "$100 - $150"
  // ? item.newPrice <= 150
  // : Brand === "Over - $150"
  // ? item.newPrice > 150
  // :

  // item.color === Brand.toLowerCase()
  //     ? item
  //     : item.company === Brand
  //     ? item
  //     : item.category === Brand.toLowerCase()
  //     ? item
  //     : item;

  let newCart = data?.filter((item) => {
    return item.color === Brand.toLowerCase()
      ? item
      : item.company === Brand
      ? item
      : item.category === Brand.toLowerCase()
      ? item
      : Brand === "$0 - $50"
      ? item.newPrice <= 50
      : Brand === "$50 - $100"
      ? item.newPrice <= 100
      : Brand === "$100 - $150"
      ? item.newPrice <= 150
      : Brand === "Over $150"
      ? item.newPrice >= 150
      : Brand === "All" || Brand === "All Products" || Brand === ""
      ? item
      : "";
  });

  return (
    <div className="w-[calc(100%-200px)]  border-l-2 border-l-[#80808030] border-l-solid p-[20px]">
      <div>
        <p className="font-bold mb-[10px]">Recommmended</p>
        <div className="flex gap-2 ">
          {Prod?.map((item, index) => {
            return (
              <p
                onClick={() => {
                  setMark(index);
                  setBrand(item.name);
                }}
                className={` ${
                  mark === index && "bg-gray-500 text-white"
                } border cursor-pointer text-sm shadow-lg shadow-cyan-500/50 border-solid border-gray-400 py-1 rounded px-2`}
                key={index}
              >
                {item?.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-3 ">
        {newCart?.map((item, index) => {
          return (
            <div key={index}>
              <CardItem data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
