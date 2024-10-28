import Image from "next/image";
import gedo from "../../../public/images/Ai/gedo.png";
import mezo from "../../../public/images/Ai/mezo.png";
import moza from "../../../public/images/Ai/moza.png";

const Social = () => {
  return (
    <main className=" z-[999999] ml-[200px] h-full   rounded-2xl bg-[#131417]  p-4  xl:ml-[240px] xl:h-full">
      <header className="flex items-center justify-between     text-[#BDBFC7]   ">
        <div className="flex items-center space-x-2">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="10.5" r="1" fill="currentColor"></circle><circle cx="15" cy="10.5" r="1" fill="currentColor"></circle><path d="M12.0002 16C11.1042 16 10.2999 15.6072 9.75019 14.9844C9.49854 14.6992 9.30023 14.3659 9.1709 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M9.1709 14C9.30023 14.3659 9.49854 14.6992 9.75019 14.9844C10.2999 15.6072 11.1042 16 12.0002 16C12.8962 16 13.7005 15.6072 14.2502 14.9844C14.5019 14.6992 14.7002 14.3659 14.8295 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5" stroke="currentColor" stroke-width="1.5"></path><circle cx="9.5" cy="9.5" r="9.5" transform="matrix(-1 0 0 1 21.5 2.5)" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"></circle></svg>
          <span className="text-md">AI Twins</span>
        </div>
      </header>

      {/* Character Cards */}
      <div className="flex items-center justify-center gap-3 mx-2 mt-6">
        <div className="relative rounded-lg shadow-lg">
          <Image
            width={195}
            height={210}
            src={gedo}
            alt="Gedo"
            className="mx-auto rounded-2xl border-[7px] border-[#1C1D21] p-0.5"
          />
          {/* تأثير التدرج الملون في الجزء السفلي من الصورة فقط */}
          <div className="absolute bottom-2 left-2 right-2 h-3/4 rounded-b-lg bg-gradient-to-t from-[#000] to-transparent"></div>
         <span
  className="absolute pb-4 pl-6 text-3xl font-semibold transform bottom-4"
  style={{
    color: "#caffff",
    textShadow: "0px 0px 10px #caffff, 0px 0px 20px rgba(202, 255, 255, 0.7)", // استخدام اللون نفسه وظل مع تدرج لوني
  }}
>
  Ron
</span>

        </div>

        <div className="relative bg-gray-900 rounded-lg shadow-lg">
          <Image
            width={235}
            height={200}
            src={mezo}
            alt="Mezo"
            className="mx-auto rounded-2xl border-[7px] border-[#eda6ff] p-0.5"
          />
          <div className="absolute bottom-2 left-2 right-2 h-3/4 rounded-b-lg bg-gradient-to-t from-[#000] to-transparent"></div>
          <span
            className="absolute pb-4 pl-6 text-3xl font-bold text-left text-purple-300 transform shadow-lg bottom-4"
            style={{
              textShadow:
                "0px 0px 10px rgba(192, 132, 252, 0.9), 0px 0px 20px rgba(192, 132, 252, 0.7)",
            }}
          >
            Daniel
          </span>
        </div>

        <div className="relative bg-gray-900 rounded-lg shadow-xl">
          <Image
            width={195}
            height={210}
            src={moza}
            alt="Moza"
            className="mx-auto rounded-2xl border-[7px] border-[#1C1D21] p-0.5"
          />
          <div className="absolute bottom-2 left-2 right-2 h-3/4 rounded-b-lg bg-gradient-to-t from-[#000] to-transparent"></div>
          <span
            className="absolute pb-4 pl-6 text-3xl font-semibold transform bottom-4 "
            style={{
              color: "#8c20f8",
              textShadow: "0px 0px 10px #8c20f8, 0px 0px 20px #8c20f8",
            }}
          >
            Elianna
          </span>
        </div>
      </div>

      {/* Description and Button */}
      <div className="mt-10 mb-5 text-center">
        <h2 className="text-2xl font-bold text-gray-100">AI Twins</h2>
        <p className="mt-2 text-gray-400">
          Clone yourself to create your own custom AI Creator.
        </p>
        <button className="mt-6 rounded-md  bg-gradient-to-br from-[#8C36FD] to-[#6758FF] px-10 py-2.5 text-white ">
          Get started
        </button>
      </div>
    </main>
  );
};

export default Social;
