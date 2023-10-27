import { useState } from "react";
function Category(prop) {
  const [click, setClick] = useState(0);
  const { data, title } = prop;

  return (
    <>
      <p className="font-semibold my-2 text-base cursor-default">{title}</p>
      {data?.map((item, index) => {
        return (
          <div
            onClick={() => setClick(index)}
            key={index}
            className={`${
              click === index && "border-[5px] border-blue-800 border-solid"
            } text-[12px] w-[150px] flex gap-2 items-center cursor-pointer`}
          >
            {item?.icon === "" && (
              <p className="w-4 h-4 rounded-full bg-[#80808030]">
                {item?.icon}
              </p>
            )}
            {item?.name && <p>{item?.name}</p>}
          </div>
        );
      })}
    </>
  );
}

export default Category;
