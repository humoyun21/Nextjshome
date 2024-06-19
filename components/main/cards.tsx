import Image from "next/image";
import img5 from "../../assets/images/pngegg (34) 3.png";
import img6 from "../../assets/images/pngegg (34) 9.png";
import img7 from "../../assets/images/pngegg (34) 10.png";
import { HeartOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Cards() {
  const arr2 = [];
  for (let i = 0; i < 4; i++) {
    arr2.push(i);
  }

  return (
    <div>
      <div className="container mx-auto">
        <Section title="Акция" images={img5} arr={arr2} />
      </div>
      <div className="container mx-auto mt-[70px]">
        <Section title="Новинки" images={img6} arr={arr2} />
      </div>
      <div className="container mx-auto mt-[70px]">
        <Section title="Продукты" images={img7} arr={arr2} />
      </div>
    </div>
  );
}

function Section({ title, images, arr }:any) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h1 className="text-[24px]">{title}</h1>
        <div className="flex gap-3">
          <button className="bg-white w-[40px] h-[40px] rounded-full">
            {"<"}
          </button>
          <button className="bg-white w-[40px] h-[40px] rounded-full">
            {">"}
          </button>
        </div>
      </div>
      <div className="flex justify-around relative flex-wrap gap-4 md:gap-8">
        {arr.map((e:any) => (
          <div key={e} className="relative">
            <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
              <div className="absolute right-[20px] top-[20px] cursor-pointer">
                <HeartOutlined />
              </div>
              <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                <Image src={images} alt="" />
              </div>
              <div className="px-3 text-center">
                <h1 className="text-[14px] sm:text-[16px] md:text-[18px]">
                  Бутса Nike Mercurial Superfly 8 FG
                </h1>
                <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
                  500 000 uzs
                </p>
                {title === "Акция" && (
                  <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                    750 000
                  </span>
                )}
              </div>
              <Link
                href={"/products/single"}
                className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
              >
                Корзина
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
