import Image from "next/image";
import img from "../../assets/images/star.svg";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-around">
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Описание</h1>
        <div className="bg-white w-full lg:w-[500px] h-auto lg:h-[500px] py-8 px-8 lg:py-70px lg:px-70px">
          <h1 className="text-xl lg:text-2xl font-semibold mb-4">
            Гантель виниловая, 2 х 3 кг
          </h1>
          <p className="text-base lg:text-lg mt-4 mb-8">
            В составе томатов в большом количестве содержатся сахара, клетчатка,
            пектины, бета-каротин, витамины.
          </p>

          <ul className="flex flex-wrap gap-4">
            <li className="w-full lg:w-[150px]">
              <h3>Вес гантела:</h3>
              <p>5 кг</p>
            </li>
            <li className="w-full lg:w-[150px]">
              <h3>Цвета:</h3>
              <p>Синий, Красный</p>
            </li>
            <li className="w-full lg:w-[150px]">
              <h3>Вес гантела:</h3>
              <p>5 кг</p>
            </li>
            <li className="w-full lg:w-[150px]">
              <h3>Цвета:</h3>
              <p>Синий, Красный</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:w-[500px]">
        <div className="bg-white py-6 px-8 lg:py-40px lg:px-70px">
          <h1 className="text-xl lg:text-2xl font-semibold mb-4">
            Гантель виниловая, 2 х 3 кг
          </h1>
          <div className="w-full">
            <p className="text-base lg:text-lg mb-4">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <Image src={img} alt="" className="mt-4" />
          </div>
        </div>

        <div className="bg-white py-6 px-8 lg:py-40px lg:px-70px">
          <h1 className="text-xl lg:text-2xl font-semibold mb-4">
            Гантель виниловая, 2 х 3 кг
          </h1>
          <div className="w-full">
            <p className="text-base lg:text-lg mb-4">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <Image src={img} alt="" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
