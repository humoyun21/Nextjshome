import Image from "next/image";
import logo from "../assets/images/logo.svg";

export default function footer() {
  return (
    <footer className="w-full h-[50px]">
      <div className="bg-[#FBD029] w-full h-[20px]"></div>
      <div className="bg-[#1F1D14] w-full h-[350px]">
        {/* <div className="flex max-w-[70px] text-[20px] font-semibold gap-[11px] text-white">
          <Image src={logo} alt="" width={50} height={50} />
          <h1>Sport Product</h1>
        </div>
        <ul>
          <li>Контакты</li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
    </footer>
  );
}
