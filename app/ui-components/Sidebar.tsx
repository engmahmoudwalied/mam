"use client"; // Mark this component as a Client Component
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  useEffect(() => {
    if (pathname !== activeLink) {
      setActiveLink(pathname);
      localStorage.setItem("activeLink", pathname);
    }
  }, [pathname, activeLink]);

  const handleLinkClick = useCallback((link) => {
    if (link !== activeLink) {
      setActiveLink(link);
      localStorage.setItem("activeLink", link);
    }
  }, [activeLink]);

  return (
    <div className="fixed flex w-[16%] bg-[#1C1D21]">
      {/* Sidebar */}
      <aside className="flex flex-col justify-between w-full h-screen p-4 rounded-lg shadow-sm">
        <Link href="#">
          <svg
            width="146"
            height="32"
            viewBox="0 0 146 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M84.0442 0H80.2323V3.80803H84.0442V0ZM84.0442 6.47506H80.2323V25.5248H84.0442V6.47506ZM48.5274 8.53344V6.47494L44.711 6.49286V31.9998H48.5274V23.4662C49.3243 24.2666 50.2765 24.8958 51.3257 25.3152C52.3748 25.7346 53.4987 25.9352 54.6283 25.9049C60.4245 25.9049 64.5409 21.8328 64.5409 16.002C64.5409 10.1712 60.4245 6.09453 54.6283 6.09453C53.4987 6.06426 52.3748 6.26509 51.3257 6.68448C50.2765 7.10387 49.3243 7.73305 48.5274 8.53344ZM54.6283 22.4013C51.0045 22.4013 48.5274 19.846 48.5274 16.002C48.5274 12.1536 50.9687 9.56258 54.6283 9.56258C58.2879 9.56258 60.729 12.1581 60.729 16.002C60.729 19.846 58.252 22.4013 54.6283 22.4013ZM87.117 16.0022C87.117 10.2117 91.238 6.09473 97.0343 6.09473C102.83 6.09473 106.947 10.2117 106.947 16.0022C106.947 21.7927 102.83 25.9051 97.0343 25.9051C91.238 25.9051 87.117 21.8285 87.117 16.0022ZM103.135 16.0022C103.135 12.1538 100.694 9.56277 97.0343 9.56277C93.3747 9.56277 90.9289 12.1538 90.9289 16.0022C90.9289 19.8506 93.4105 22.4014 97.0343 22.4014C100.658 22.4014 103.135 19.8506 103.135 16.0022ZM113.791 6.47527H109.979L109.966 25.5251H113.778V14.0961C113.778 11.4291 115.457 9.56291 118.203 9.56291C120.833 9.56291 122.548 11.4112 122.548 14.0961V25.5251H126.364V14.0961C126.364 9.41092 123.287 6.09486 118.75 6.09486C117.822 6.0744 116.9 6.25065 116.046 6.61161C115.191 6.97258 114.423 7.51015 113.791 8.18919V6.47527ZM41.6832 25.9098H31.7661C29.8034 25.9106 27.8844 25.3299 26.2521 24.2411C24.6198 23.1523 23.3474 21.6044 22.5959 19.793C21.8444 17.9817 21.6477 15.9884 22.0303 14.0653C22.413 12.1421 23.358 10.3755 24.7458 8.98905C26.1337 7.60257 27.902 6.65845 29.827 6.27614C31.7521 5.89383 33.7473 6.09064 35.5605 6.8414C37.3736 7.59217 38.9231 8.86317 40.013 10.4939C41.1028 12.1246 41.6841 14.0415 41.6832 16.0023V25.9098ZM31.7661 10.1178C30.9792 10.0961 30.1959 10.2323 29.4625 10.5181C28.7292 10.804 28.0606 11.2338 27.4964 11.7821C26.9321 12.3305 26.4836 12.9864 26.1773 13.7109C25.8711 14.4353 25.7133 15.2137 25.7133 16.0001C25.7133 16.7865 25.8711 17.5649 26.1773 18.2893C26.4836 19.0138 26.9321 19.6697 27.4964 20.218C28.0606 20.7664 28.7292 21.1962 29.4625 21.4821C30.1959 21.7679 30.9792 21.904 31.7661 21.8823H37.6518V16.0023C37.6506 14.4427 37.0303 12.9474 35.9269 11.8442C34.8235 10.741 33.3271 10.1202 31.7661 10.1178ZM10.2565 22.4014C12.5992 22.4014 14.4446 21.3542 15.4659 19.5642H19.5823C18.2744 23.435 14.7985 25.9051 10.2565 25.9051C4.46026 25.9051 0.339233 21.7927 0.339233 16.0022C0.339233 10.2117 4.46026 6.09473 10.2565 6.09473C14.7627 6.09473 18.2565 8.58743 19.5735 12.4358H15.4703C14.4491 10.6325 12.5992 9.56277 10.2565 9.56277C6.63272 9.56277 4.15561 12.1583 4.15561 16.0022C4.15561 19.8461 6.63272 22.4014 10.2565 22.4014ZM76.8685 9.9431V6.47506H70.9244V0H67.1081V19.1256C67.1081 23.3544 69.2448 25.5248 73.5539 25.5248H76.873V22.021H73.8225C71.8785 22.021 70.9244 21.0677 70.9244 19.1256V9.9431H76.8685ZM132.631 20.1236L129.626 21.7837C131.126 24.6656 133.894 26.0843 137.487 26.0843C141.599 26.0843 145.151 23.7573 145.151 20.0834C145.151 15.8776 141.465 15.0523 138.341 14.3529C136.044 13.8386 134.051 13.3923 134.051 11.7198C134.051 10.1804 135.668 9.23174 137.446 9.23174C139.225 9.23174 140.806 9.82248 141.635 11.5229L144.64 9.82235C143.413 7.57595 140.954 5.91577 137.37 5.91577C133.142 5.91577 130.141 8.40388 130.141 11.7958C130.141 16.0348 133.799 16.8255 136.915 17.4989C139.227 17.9984 141.24 18.4335 141.24 20.164C141.24 21.8734 139.543 22.7683 137.33 22.7683C135.198 22.7683 133.617 22.0612 132.631 20.1236Z"
              fill="white"
            ></path>
          </svg>
        </Link>
        <Link
          className={`my-5 flex w-14 items-start rounded p-3 transition-colors duration-300 lg:w-full ${
            activeLink === "/custom-components/projects"
              ? "rounded-xl bg-[#292A30]"
              : "rounded-xl hover:bg-[#292A30] "
          }`}
          href="/custom-components/projects"
          onClick={() => handleLinkClick("/custom-components/projects")}
        >
          <div className="flex gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                stroke="#BDBFC7"
                strokeWidth="1.5"
              ></rect>
              <path
                d="M6.5 2.5V17.5"
                stroke="#BDBFC7"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M13.5 2.5V17.5"
                stroke="#BDBFC7"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M2.5 7.5H5.5"
                stroke="#BDBFC7"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M14.5 7.5H17.5"
                stroke="#BDBFC7"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M2.5 12.5H5.5"
                stroke="#BDBFC7"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M14.5 12.5H17.5"
                stroke="#BDBFC7"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
            <span className="hidden text-[#BDBFC7] lg:inline">Projects</span>
          </div>
        </Link>

        <div className="workflow">
          <h3 className="text-sm text-[#7C7F87]">Workflows</h3>
        </div>
        <Link
          className={`flex items-start gap-3 rounded p-3 transition-colors duration-300 ${
            activeLink === "/custom-components/Social"
              ? "rounded-xl bg-[#292A30]"
              : "rounded-xl hover:bg-[#292A30]"
          }`}
          href="/custom-components/Social"
          onClick={() => handleLinkClick("/custom-components/anotherLink")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 17.1772C1 19.2835 2.10236 20.376 4.22835 20.376H11.4135C11.1941 19.7676 11.0564 19.1202 11.014 18.4468H4.19882C3.38189 18.4468 2.92913 18.0138 2.92913 17.1575V8.06299C2.92913 7.19685 3.38189 6.77362 4.19882 6.77362H17.7815C18.6083 6.77362 19.0709 7.19685 19.0709 8.06299V11.0814C19.7511 11.1858 20.3991 11.3882 21 11.6736V5.19882C21 3.09252 19.8976 2 17.7717 2H4.22835C2.10236 2 1 3.09252 1 5.19882V17.1772ZM13.372 12.748V12.3248C13.372 11.9705 13.2539 11.8622 12.8996 11.8622H12.3287C11.9744 11.8622 11.8563 11.9705 11.8563 12.3248V12.8957C11.8563 13.25 11.9744 13.3583 12.3287 13.3583H12.7602C12.9515 13.1425 13.1558 12.9387 13.372 12.748ZM8.6378 9.72638C8.6378 10.0807 8.75591 10.189 9.10039 10.189H9.6811C10.0354 10.189 10.1535 10.0807 10.1535 9.72638V9.15551C10.1535 8.80118 10.0354 8.69291 9.6811 8.69291H9.10039C8.75591 8.69291 8.6378 8.80118 8.6378 9.15551V9.72638ZM11.8563 9.72638C11.8563 10.0807 11.9744 10.189 12.3287 10.189H12.8996C13.2539 10.189 13.372 10.0807 13.372 9.72638V9.15551C13.372 8.80118 13.2539 8.69291 12.8996 8.69291H12.3287C11.9744 8.69291 11.8563 8.80118 11.8563 9.15551V9.72638ZM15.0748 9.72638C15.0748 10.0807 15.1929 10.189 15.5472 10.189H16.1181C16.4724 10.189 16.5906 10.0807 16.5906 9.72638V9.15551C16.5906 8.80118 16.4724 8.69291 16.1181 8.69291H15.5472C15.1929 8.69291 15.0748 8.80118 15.0748 9.15551V9.72638ZM5.41929 12.8957C5.41929 13.25 5.5374 13.3583 5.88189 13.3583H6.4626C6.81693 13.3583 6.93504 13.25 6.93504 12.8957V12.3248C6.93504 11.9705 6.81693 11.8622 6.4626 11.8622H5.88189C5.5374 11.8622 5.41929 11.9705 5.41929 12.3248V12.8957ZM8.6378 12.8957C8.6378 13.25 8.75591 13.3583 9.10039 13.3583H9.6811C10.0354 13.3583 10.1535 13.25 10.1535 12.8957V12.3248C10.1535 11.9705 10.0354 11.8622 9.6811 11.8622H9.10039C8.75591 11.8622 8.6378 11.9705 8.6378 12.3248V12.8957ZM5.41929 16.065C5.41929 16.4193 5.5374 16.5276 5.88189 16.5276H6.4626C6.81693 16.5276 6.93504 16.4193 6.93504 16.065V15.4941C6.93504 15.1398 6.81693 15.0315 6.4626 15.0315H5.88189C5.5374 15.0315 5.41929 15.1398 5.41929 15.4941V16.065ZM8.6378 16.065C8.6378 16.4193 8.75591 16.5276 9.10039 16.5276H9.6811C10.0354 16.5276 10.1535 16.4193 10.1535 16.065V15.4941C10.1535 15.1398 10.0354 15.0315 9.6811 15.0315H9.10039C8.75591 15.0315 8.6378 15.1398 8.6378 15.4941V16.065Z"
              fill="#BDBFC7"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23ZM20.8969 17.1141C21.1343 16.8767 21.1344 16.4918 20.897 16.2544C20.6596 16.017 20.2747 16.017 20.0373 16.2544L17.2434 19.0481L16.0614 17.8662C15.824 17.6288 15.4391 17.6288 15.2017 17.8662C14.9643 18.1036 14.9643 18.4885 15.2018 18.7259L16.8136 20.3376C17.051 20.575 17.4359 20.575 17.6733 20.3376L20.8969 17.1141Z"
              fill="#BDBFC7"
            ></path>
          </svg>
          <span className="text-[#BDBFC7]">Social Studio</span>
        </Link>

        <footer className="pt-4 mt-auto text-gray-200 ">
          <section className="max-w-full mx-auto">
            <h3 className="mb-4  text-sm uppercase text-[#7C7F87]">Account</h3>
            <Link
              className={`flex items-start gap-3 rounded p-3 transition-colors duration-300 ${
                activeLink === "/custom-components/settings"
                  ? "rounded-xl bg-[#292A30]"
                  : "rounded-xl hover:bg-[#292A30]"
              }`}
              href="/custom-components/settings"
              onClick={() => handleLinkClick("/custom-components/settings")}
            >
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5764 18.8558L19.0956 19.397C19.3917 19.1128 19.4045 18.6435 19.1243 18.3436L18.5764 18.8558ZM5.42358 18.8557L4.87566 18.3436C4.59543 18.6434 4.6082 19.1128 4.90432 19.3969L5.42358 18.8557ZM18.0571 18.3146C16.4843 19.8237 14.3511 20.75 12 20.75V22.25C14.7535 22.25 17.2547 21.1633 19.0956 19.397L18.0571 18.3146ZM12 20.75C9.64887 20.75 7.51567 19.8237 5.94284 18.3146L4.90432 19.3969C6.74524 21.1633 9.2465 22.25 12 22.25V20.75ZM5.9715 19.3679C7.47814 17.756 9.62099 16.75 11.9999 16.75V15.25C9.18853 15.25 6.65409 16.4409 4.87566 18.3436L5.9715 19.3679ZM11.9999 16.75C14.3789 16.75 16.5218 17.756 18.0284 19.3679L19.1243 18.3436C17.3459 16.4409 14.8114 15.25 11.9999 15.25V16.75Z"
                    fill="#BDBFC7"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    stroke="#BDBFC7"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#BDBFC7"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="text-[#BDBFC7]">Profile</span>
            </Link>

            <Link
              className={`mt-2 flex items-start gap-3    rounded p-3 transition-colors duration-300 ${
                activeLink === "/custom-components/profile"
                  ? "rounded-xl bg-[#292A30]"
                  : "rounded-xl hover:bg-[#292A30]"
              }`}
              href="/custom-components/profile"
              onClick={() => handleLinkClick("/custom-components/profile")}
            >
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0915 18.9612C18.0454 19.0015 17.9988 19.0415 17.9517 19.0811L17.9415 19.0898C16.5137 20.2876 14.7188 21.062 12.75 21.22L12.75 17.7428C14.9808 17.6133 16.75 15.7633 16.75 13.5V11.5C16.75 10.8096 16.1904 10.25 15.5 10.25H14.5L14.5 7.49998C14.5 7.08577 14.1642 6.74998 13.75 6.74998C13.3358 6.74998 13 7.08577 13 7.49998L13 10.25H11L11 7.49998C11 7.08577 10.6642 6.74998 10.25 6.74998C9.83579 6.74998 9.5 7.08577 9.5 7.49998L9.5 10.25H8.5C7.80965 10.25 7.25 10.8096 7.25 11.5V13.5C7.25 15.7633 9.01916 17.6133 11.25 17.7428L11.25 21.9988L11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C14.7167 22.75 17.198 21.7423 19.0905 20.0802C20.2711 19.0451 21.1718 17.8057 21.7843 16.4594C22.3441 15.2332 22.6801 13.8834 22.7402 12.4623C22.832 10.3439 22.301 8.19355 21.1214 6.30847C20.8088 5.80847 20.4562 5.33602 20.068 4.8956C19.0499 3.7384 17.8351 2.8511 16.516 2.24169C14.5715 1.34346 12.4004 1.04899 10.2983 1.38391C9.08642 1.57665 7.942 1.97192 6.90086 2.53394C6.12329 2.95369 5.40332 3.46644 4.75585 4.0573C3.69694 5.02174 2.87313 6.15407 2.29094 7.37932C1.64947 8.7248 1.27944 10.2246 1.25169 11.8078C1.20584 14.314 2.03136 16.8471 3.77076 18.9167C4.03727 19.2337 4.51037 19.2747 4.82746 19.0082C5.14455 18.7417 5.18555 18.2686 4.91904 17.9515C3.46328 16.2195 2.75146 14.11 2.74991 12.0116L2.75 12C2.75 11.9524 2.75036 11.9048 2.75108 11.8573C2.79018 9.39125 3.80986 6.95365 5.75541 5.17587C5.8509 5.0886 5.94863 5.00293 6.04858 4.91892C6.56025 4.48887 7.10486 4.12374 7.67239 3.82267C7.92274 3.6899 8.17992 3.5683 8.44326 3.45851C9.12666 3.1737 9.83517 2.9755 10.5529 2.86252C11.0244 2.78844 11.5077 2.74998 12 2.74998C12.0918 2.74998 12.1832 2.75132 12.2744 2.75398C14.7549 2.82841 17.1951 3.89491 18.9518 5.89772C18.9953 5.94739 19.0385 5.99764 19.0812 6.04846C19.3463 6.36382 19.5866 6.69168 19.8026 7.02971C19.8168 7.05193 19.8309 7.07419 19.8448 7.0965C20.7353 8.51804 21.25 10.2591 21.25 12C21.25 12.1564 21.2498 12.3125 21.2489 12.469C21.2318 12.8033 21.1282 13.1289 20.9567 13.4326C20.9246 13.4951 20.8909 13.5582 20.8553 13.6215C20.8335 13.6572 20.8117 13.6936 20.7902 13.7305C20.4211 14.6288 19.7473 15.4238 18.8017 16.0086C18.6072 16.1308 18.3684 16.2499 18.0915 16.3704V18.9612Z"
                    fill="#BDBFC7"
                  ></path>
                </svg>
              </div>
              <span className="text-[#BDBFC7]">API</span>
            </Link>
          </section>
          <a
            href="#"
            className="group relative mt-6 inline-flex items-center justify-center rounded-lg border border-gray-700  p-1 hover:bg-[#292A30]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9996 12.7114L13.3272 11.9738C13.9897 11.6058 14.4006 10.9075 14.4006 10.1496C14.3222 8.88929 13.2413 7.92852 11.9805 7.99833C10.8539 7.95156 9.85348 8.71311 9.59863 9.81149"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle
                cx="11.9998"
                cy="12"
                r="9.00375"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <path
                d="M12.1002 15.9017C12.1002 15.9569 12.0554 16.0016 12.0002 16.0016C11.9449 16.0016 11.9002 15.9568 11.9002 15.9016C11.9001 15.8464 11.9449 15.8016 12.0001 15.8015C12.0267 15.8015 12.0522 15.812 12.0709 15.8308C12.0897 15.8496 12.1003 15.8751 12.1002 15.9017"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            {/* Tooltip */}
            <span className="absolute hidden px-1 py-1 mb-2 text-xs font-medium text-white bg-black rounded-md bottom-full group-hover:flex">
              Help
            </span>
          </a>
        </footer>
      </aside>
    </div>
  );
};
export default Sidebar;
