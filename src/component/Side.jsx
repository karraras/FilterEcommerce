import { useState } from "react";
import { UseGlobalContext } from "../context/Context";

import { Cate, Price, Colors } from "../context/Content";
function Side() {
  const { setBrand } = UseGlobalContext();

  const [cate, SetCate] = useState(0);
  const [price, SetPrice] = useState(0);
  const [color, SetColor] = useState(0);

  return (
    <div className=" w-[200px] flex  items-center  flex-col">
      <div>
        <p className="font-semibold my-2 text-base cursor-default ">Category</p>
        {Cate?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                SetCate(index);
                setBrand(item.name);
              }}
              className={`  text-[12px] w-[150px] flex gap-2 items-center cursor-pointer`}
            >
              {item?.icon === "" && (
                <p
                  className={` ${
                    cate === index &&
                    " !bg-white border-[5px] border-solid border-blue-900"
                  } w-4 h-4 rounded-full  bg-[#80808030]`}
                >
                  {item?.icon}
                </p>
              )}
              {item?.name && <p>{item?.name}</p>}
            </div>
          );
        })}
      </div>
      <div>
        <p className="font-semibold my-2 text-base cursor-default">Price</p>
        {Price?.map((item, index) => {
          return (
            <div
              onClick={() => {
                SetPrice(index);
                setBrand(item.name);
              }}
              key={index}
              className={` text-[12px] w-[150px] flex gap-2 items-center cursor-pointer`}
            >
              {item?.icon === "" && (
                <p
                  className={` ${
                    price === index &&
                    "!bg-white border-blue-900 border-solid border-[5px]"
                  } w-4 h-4 rounded-full  bg-[#80808030]`}
                >
                  {item?.icon}
                </p>
              )}
              {item?.name && <p>{item?.name}</p>}
            </div>
          );
        })}
      </div>
      <div>
        <p className="font-semibold my-2 text-base cursor-default">Colors</p>
        {Colors?.map((item, index) => {
          return (
            <div
              onClick={() => {
                SetColor(index);
                setBrand(item.name);
              }}
              key={index}
              className={`  text-[12px] w-[150px] flex gap-2 items-center cursor-pointer`}
            >
              {item?.icon === "" && item?.name !== "All" && (
                <p
                  style={{
                    backgroundColor: `${item?.name}`,
                  }}
                  className={`w-4 h-4 rounded-full  ${
                    color === index &&
                    "border-blue-900 border-[5px] border-solid !bg-white"
                  }  ${
                    item?.name === "White" &&
                    "border-2 border-solid border-black"
                  }`}
                >
                  {item?.icon}
                </p>
              )}
              {item?.icon === "" && item?.name === "All" && (
                <p
                  style={{
                    background: "linear-gradient(to bottom,purple,red)",
                  }}
                  className={`
                  
                  ${
                    color === index &&
                    "border-blue-900 border-[5px] border-solid !bg-white"
                  }
                  w-4 h-4 rounded-full  ${
                    item?.name === "White" &&
                    "border-2 border-solid border-black"
                  }`}
                >
                  {item?.icon}
                </p>
              )}
              {item?.name && <p>{item?.name}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Side;
