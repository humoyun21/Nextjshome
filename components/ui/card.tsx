import React from "react";
import img7 from "../../assets/images/pngegg (34) 10.png";
import Image from "next/image";
import { HeartOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Card() {
  return (
    <div>
      {" "}
      <div className="flex justify-around relative flex-wrap">
        <div className="relative">
          <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative">
            <div className="absolute right-[20px] top-[20px] cursor-pointer">
              <HeartOutlined />
            </div>
            <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
              <Image src={img7} alt="" />
            </div>
            <div className="px-3">
              <h1>Бутса Nike Mercurial Superfly 8 FG</h1>
              <p className="text-[#1F1D14] font-bold">500 000 uzs</p>
            </div>
            <Link href={"/products/single"} className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center">
                Корзина
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
