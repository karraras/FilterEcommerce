import { BiSolidLockAlt } from "react-icons/bi";
function CardItem(prop) {
  const { data } = prop;
  return (
    <div className="border-solid border-gray-500 border rounded h-[250px] p-2">
      <div className="h-[150px] flex items-center justify-center ">
        <img src={data?.img} alt="..." className="h-full w-full" />
      </div>
      <p className="text-[12px] font-semibold">{data?.title}</p>
      <div className="flex items-center text-[12px] gap-1 my-1">
        <div className="flex">
          <p className="text-orange-400 ">{data?.star}</p>
          <p className="text-orange-400 ">{data?.star}</p>
          <p className="text-orange-400 ">{data?.star}</p>
          <p className="text-orange-400 ">{data?.star}</p>
        </div>
        <p>{data?.reviews}</p>
      </div>
      <div className="flex items-center justify-between text-[12px]">
        <div className="flex gap-1">
          <p className="line-through">{`${data?.prevPrice}`}</p>
          <p>{`${data?.newPrice}`}</p>
        </div>
        <BiSolidLockAlt />
      </div>
    </div>
  );
}

export default CardItem;
