import { Select } from "antd";
import Aside from "../../components/products-main/aside";
import Card from "@/components/ui/card";

export default function page() {
  const arr = [];
  for (let i = 0; i < 16; i++) {
    arr.push(i);
  }

  return (
    <main className="container mx-auto flex mt-[70px] mb-[70px]">
      <Aside />
      <section className="w-full">
        <div className="flex mb-2 justify-between mx-auto xl:w-[1050px] sm:w-[auto] ml-2 flex-wrap ">
          <div className="flex gap-2">
            <Select className="w-[150px]" defaultValue="Сортировать">
              <option value="">test-1</option>
            </Select>
            <Select className="w-[150px]" defaultValue="Все продукты">
              <option value="">test-1</option>
            </Select>
          </div>
          <div className="flex gap-2">
            {" "}
            <Select className="w-[150px]" defaultValue="Кард">
              <option value="">test-1</option>
            </Select>
            <Select className="w-[150px]" defaultValue="Лист  ">
              <option value="">test-1</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap justify-between ml-2 gap-2">
          {arr.map((e) => (
            <div key={e} className="relative">
              <Card />
            </div>
          ))}
        </div>
        <div className="w-full">
          <button className="bg-white px-4 py-2 rounded-md xl:w-[1050px] sm:w-auto mt-2 ml-2">
            Load more
          </button>
        </div>
      </section>
    </main>
  );
}
