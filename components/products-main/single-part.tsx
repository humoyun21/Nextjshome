import { Carousel } from "antd";
import Image from "next/image";
import img from "../../assets/images/pngegg (34) 9.png";

export default function SinglePart() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "400px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div className="flex justify-between">
      <div className="max-w-[800px] h-[500px]">
        <Carousel arrows infinite={true} autoplay>
          {arr.map((e) => (
            <div key={e}>
              <div
                style={contentStyle}
                className="relative flex justify-between items-center px-2 text-[#1F1D14] "
              >
                <div className="grid justify-center items-center pl-[170px]">
                  <Image
                    src={img}
                    width={350}
                    height={350}
                    className="bg-contain z-[999]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-[400px] h-[400px] gap-5 bg-white p-5">
        <h1 className="text-[32px] font-medium w-[310px]">
          Гантель виниловая, 2 х 3 кг
        </h1>
        <p className="text-[14px] mt-2 mb-2 font-normal">
          В составе томатов в большом количестве содержатся сахара, клетчатка,
          пектины, бета-каротин, витамины.
        </p>
        <p>
          В комлекте:
          <span className="font-semibold ml-3">2 шт.</span>
        </p>

        <p>
          Страна производства:
          <span className="font-semibold ml-3">Китай</span>
        </p>
        <span className="mt-7 mb-5 text-[24px]">220 000 uzs | 1 шт.</span>
        <div className="mt-5 mb-5 flex gap-3">
          <button className="w-[120px] h-[40px] bg-[#FBD029]">Корзина</button>
          <button className="w-[120px] h-[40px] border-[#FBD029] border-2">
            Сравнить
          </button>
        </div>
      </div>
    </div>
  );
}
