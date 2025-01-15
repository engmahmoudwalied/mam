// app/custom-components/contact/page.js

import UploadButton from "./CustomButton";

const Contact = () => {
  return (
    <main className=" z-[999999] ml-[200px] h-full   rounded-2xl bg-[#131417]  p-4  xl:ml-[230px] xl:h-full">
      <header className="flex items-center justify-between p-4 text-[#BDBFC7] shadow-md  ">
        {/* Projects Icon and Title */}
        <div className="flex items-center space-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="#BDBFC7"
          >
            <path
              d="M21.5 9.5V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H9.5"
              stroke="#BDBFC7"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <rect
              x="2.5"
              y="2.5"
              width="15"
              height="15"
              rx="3"
              stroke="white"
              strokeWidth="1.5"
            ></rect>
            <path
              d="M6.5 2.5V17.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M13.5 2.5V17.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M2.5 7.5H5.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M14.5 7.5H17.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M2.5 12.5H5.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M14.5 12.5H17.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
          <span className="text-lg font-semibold">Projects</span>
        </div>

        {/* Upload Button */}
        <button className="flex items-center space-x-2 rounded-lg bg-gradient-to-br from-[#8C36FD] to-[#6758FF] px-4 py-2 text-white transition">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 9.75V9C21 7.34315 19.6569 6 18 6H11.4142C11.149 6 10.8946 5.89464 10.7071 5.70711L9.58579 4.58579C9.21071 4.21071 8.70201 4 8.17157 4H6C4.34315 4 3 5.34315 3 7V16.5C3 18.1569 4.34315 19.5 6 19.5H13"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M16.75 17H22.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M19.75 20L19.75 14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
          <span>Upload a Video</span>
        </button>
      </header>

      <div className="mx-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="justify-left flex items-center rounded-lg bg-[#1C1D21] p-6 shadow-md   transition-colors duration-300 hover:bg-[#292a30]">
          {/* Container for SVG with specific dimensions */}
          <div className="mr-3 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8758FF] to-[#6C36FD]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="matrix(-1 0 0 1 4.5 10.55)"
                stroke="white"
                strokeWidth="1.5"
              ></circle>
              <circle
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="matrix(-1 0 0 1 22.5 10.5)"
                stroke="white"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M19.2822 6.59912C17.6225 4.41362 14.9805 3 12.0047 3C7.59517 3 3.91839 6.10406 3.08496 10.2241M4.72737 17.401C5.23312 18.067 5.8301 18.6613 6.49994 19.1657C6.54191 19.1973 6.58417 19.2286 6.62671 19.2595C8.13313 20.3537 9.99265 21 12.0047 21C16.4173 21 20.096 17.8918 20.9262 13.7677"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M6.64648 19.2351L5.91643 19.0633C5.84781 19.3549 5.95925 19.6593 6.19988 19.8377L6.64648 19.2351ZM17.3542 19.2351L17.8008 19.8376C18.0414 19.6592 18.1528 19.3548 18.0842 19.0633L17.3542 19.2351ZM7.37654 19.4069C7.87001 17.3102 9.75389 15.75 12.0003 15.75V14.25C9.04223 14.25 6.56577 16.3043 5.91643 19.0633L7.37654 19.4069ZM12.0003 15.75C14.2468 15.75 16.1306 17.3102 16.6241 19.4069L18.0842 19.0633C17.4349 16.3043 14.9584 14.25 12.0003 14.25V15.75ZM16.9076 18.6325C15.5362 19.6491 13.8395 20.25 12.0003 20.25V21.75C14.172 21.75 16.1798 21.0391 17.8008 19.8376L16.9076 18.6325ZM12.0003 20.25C10.1611 20.25 8.46448 19.6491 7.09308 18.6326L6.19988 19.8377C7.82088 21.0391 9.82867 21.75 12.0003 21.75V20.25Z"
                fill="white"
              ></path>
              <circle
                cx="12"
                cy="9.5"
                r="2.5"
                stroke="white"
                strokeWidth="1.5"
              ></circle>
            </svg>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-bold">Card 1</h3>
            <p>Content for card 1.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="justify-left flex items-center rounded-lg bg-[#1C1D21] p-6 shadow-md   transition-colors duration-300 hover:bg-[#292a30]">
          {/* Container for SVG with specific dimensions */}
          <div className="mr-3 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8758FF] to-[#6C36FD]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 22V2L21.5 12L5 22Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.5 7.5L5 12L13.5 16.5V7.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-bold">Card 1</h3>
            <p>Content for card 1.</p>
          </div>
        </div>

        <div className="justify-left flex items-center rounded-lg bg-[#1C1D21] p-6 shadow-md   transition-colors duration-300 hover:bg-[#292a30]">
          {/* Container for SVG with specific dimensions */}
          <div className="mr-3 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8758FF] to-[#6C36FD]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="PJLV"
            >
              <path
                d="M9.54691 6.97082C9.72647 6.5861 10.2735 6.5861 10.4531 6.97082L12.4687 11.2897C12.5184 11.3961 12.6039 11.4816 12.7103 11.5313L17.0292 13.5469C17.4139 13.7265 17.4139 14.2735 17.0292 14.4531L12.7103 16.4687C12.6039 16.5184 12.5184 16.6039 12.4687 16.7103L10.4531 21.0292C10.2735 21.4139 9.72647 21.4139 9.54691 21.0292L7.5313 16.7103C7.48163 16.6039 7.39609 16.5184 7.28967 16.4687L2.97082 14.4531C2.5861 14.2735 2.5861 13.7265 2.97082 13.5469L7.28967 11.5313C7.39609 11.4816 7.48163 11.3961 7.5313 11.2897L9.54691 6.97082Z"
                stroke="white"
                strokeWidth="1.5"
              ></path>
              <path
                d="M17.5469 2.47082C17.7265 2.0861 18.2735 2.0861 18.4531 2.47082L19.1959 4.06246C19.2456 4.16888 19.3311 4.25443 19.4375 4.30409L21.0292 5.04691C21.4139 5.22647 21.4139 5.77353 21.0292 5.95309L19.4375 6.69591C19.3311 6.74557 19.2456 6.83112 19.1959 6.93754L18.4531 8.52918C18.2735 8.9139 17.7265 8.9139 17.5469 8.52918L16.8041 6.93754C16.7544 6.83112 16.6689 6.74557 16.5625 6.69591L14.9708 5.95308C14.5861 5.77353 14.5861 5.22647 14.9708 5.04691L16.5625 4.30409C16.6689 4.25443 16.7544 4.16888 16.8041 4.06246L17.5469 2.47082Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-bold">Card 1</h3>
            <p>Content for card 1.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex  w-full flex-col items-center justify-center rounded-md bg-[#292a30] p-6 xl:mt-6 xl:h-[58vh] xl:p-10  ">
        <svg
          width="170"
          height="129"
          viewBox="0 0 170 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6 "
        >
          <path
            d="M159.031 84.3371L162.656 84.3371"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M160.844 82.5L160.844 86.1735"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M141.359 124.745L141.359 127.5"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M142.719 126.122L140 126.122"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M169 115.561L165.565 114.162C164.878 113.882 164.334 113.331 164.057 112.635L162.666 109.133L161.275 112.635C160.999 113.331 160.454 113.883 159.767 114.162L156.332 115.561L156.313 115.561L159.747 116.961C160.434 117.241 160.979 117.792 161.255 118.488L162.646 121.99L164.037 118.488C164.314 117.792 164.858 117.24 165.545 116.961L168.98 115.561"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1 3.29961H4.74194"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2.8706 1.5V5.1"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.6931 43.7998V46.4998"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.0965 45.1502H11.29"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30.0001 17.7004L26.4546 16.3288C25.7455 16.0543 25.1833 15.5143 24.898 14.8321L23.462 11.4004L22.026 14.8321C21.7407 15.5143 21.1785 16.0552 20.4694 16.3288L16.9239 17.7004H16.9033L20.4488 19.072C21.1579 19.3465 21.7201 19.8865 22.0054 20.5687L23.4414 24.0004L24.8774 20.5687C25.1627 19.8865 25.7249 19.3456 26.434 19.072L29.9795 17.7004"
            stroke="#7e12ff"
            strokeWidth="1.39001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <rect
            x="50"
            y="29.5"
            width="70"
            height="70"
            rx="8"
            fill="#7e12ff"
            fillOpacity="0.09"
          ></rect>
          <path
            d="M79 59.5H78C76.3431 59.5 75 60.8431 75 62.5V66V69.5C75 71.1569 76.3431 72.5 78 72.5H92C93.6569 72.5 95 71.1569 95 69.5V62.5C95 60.8431 93.6569 59.5 92 59.5H91"
            stroke="#7e12ff"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M85 56V67.5"
            stroke="#7e12ff"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M81.5 64.5L85 68"
            stroke="#7e12ff"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M88.5 64.5L85 68"
            stroke="#7e12ff"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="text-center">
          <span className="block text-lg font-semibold text-gray-100">
            Create your first project
          </span>
          <span className="mt-2 block text-sm text-gray-400">
            Drop in your files or use the upload <br /> button to get started.
          </span>
        </div>
        {/* <button className="w-1/5 px-3 py-2 mt-6 text-white transition-colors duration-300 bg-purple-600 rounded-md hover:bg-purple-700">
          Upload a video
        </button> */}
        <UploadButton />
      </div>
    </main>
  );
};

export default Contact;
