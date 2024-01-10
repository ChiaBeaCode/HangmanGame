import { BsChatHeart } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="footer relative bottom-0 flex flex-col justify-center text-lg text-center py-2 m-auto w-full bg-white bg-gradient-to-b from-[#1fad55]">
      <p className="flex flex-row justify-center">
        {" "}
        Made by Ashley 2024{" "}
        <BsChatHeart className=" ml-1 text-xl text-rose-500" />{" "}
      </p>
      <p>All Rights Reserved </p>
    </footer>
  );
}
