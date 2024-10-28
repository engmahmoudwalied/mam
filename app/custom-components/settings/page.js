"use client";

import { useState } from "react";
import Input from '../../../components/Input';
import DropDown from '../../../components/DropDown';
const Settings = () => {
    const [email, setEmail] = useState("momo7shap5113@gmail.com");
    const [language, setLanguage] = useState("English");

    const languageOptions = ["Arabic", "English"];
    return (
        <div className="text-white p-6 z-[999999] ml-[200px] h-screen rounded-2xl bg-[#131417] xl:ml-[240px] xl:h-full flex flex-col flex-start ">
            <header className='flex justify-between mb-4'>
                <div className='flex items-center gap-2 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5764 18.8558L19.0956 19.397C19.3917 19.1128 19.4045 18.6435 19.1243 18.3436L18.5764 18.8558ZM5.42358 18.8557L4.87566 18.3436C4.59543 18.6434 4.6082 19.1128 4.90432 19.3969L5.42358 18.8557ZM18.0571 18.3146C16.4843 19.8237 14.3511 20.75 12 20.75V22.25C14.7535 22.25 17.2547 21.1633 19.0956 19.397L18.0571 18.3146ZM12 20.75C9.64887 20.75 7.51567 19.8237 5.94284 18.3146L4.90432 19.3969C6.74524 21.1633 9.2465 22.25 12 22.25V20.75ZM5.9715 19.3679C7.47814 17.756 9.62099 16.75 11.9999 16.75V15.25C9.18853 15.25 6.65409 16.4409 4.87566 18.3436L5.9715 19.3679ZM11.9999 16.75C14.3789 16.75 16.5218 17.756 18.0284 19.3679L19.1243 18.3436C17.3459 16.4409 14.8114 15.25 11.9999 15.25V16.75Z" fill="currentColor"></path><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.5"></circle><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"></circle></svg>
                    <span className='text-gray-300 tracking-wide text-sm font-medium leading-6'>Profile</span>
                </div>
            </header>

            <div className="flex  mb-6 "> 
    <div className="flex flex-col items-center">
        <div className="h-auto w-auto border-[#7e12ff] rounded-lg   border-[4.5px] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M18.5764 18.8558L19.0956 19.397C19.3917 19.1128 19.4045 18.6435 19.1243 18.3436L18.5764 18.8558ZM5.42358 18.8557L4.87566 18.3436C4.59543 18.6434 4.6082 19.1128 4.90432 19.3969L5.42358 18.8557ZM18.0571 18.3146C16.4843 19.8237 14.3511 20.75 12 20.75V22.25C14.7535 22.25 17.2547 21.1633 19.0956 19.397L18.0571 18.3146ZM12 20.75C9.64887 20.75 7.51567 19.8237 5.94284 18.3146L4.90432 19.3969C6.74524 21.1633 9.2465 22.25 12 22.25V20.75ZM5.9715 19.3679C7.47814 17.756 9.62099 16.75 11.9999 16.75V15.25C9.18853 15.25 6.65409 16.4409 4.87566 18.3436L5.9715 19.3679ZM11.9999 16.75C14.3789 16.75 16.5218 17.756 18.0284 19.3679L19.1243 18.3436C17.3459 16.4409 14.8114 15.25 11.9999 15.25V16.75Z" fill="currentColor"></path>
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5"></circle>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
            </svg>
        </div>
        <h2 className="text-sm font-semibold">محمد شعبان</h2>
    </div>
</div>


            <Input
                label="Sign in Method"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                disabled

            />
            <DropDown
                label="Language"
                options={languageOptions}
                selectedOption={language}
                setSelectedOption={setLanguage}

            />
            <div className="mt-6">
                <label className="block text-[#BDBFC7] text-sm mb-1 ">Subscription</label>
                <Input
                    placeholder="inactive subscription"
                    disabled
                 

                />
                <button className="w-1/4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mt-2">
                    Subscribe
                </button>
            </div>


            <div className="mt-8 space-y-4 flex flex-col">
                <label className="block text-[#BDBFC7] text-sm mb-1">Account Actions</label>

                <button className="w-1/4 py-2 text-white bg-transparent border border-[#292a30] rounded-md hover:bg-[#292a30] ease-in-out duration-300">
                    Log out
                </button>

                <button className="w-1/4 py-2 text-red-500 border rounded-md border-[#292a30] hover:bg-[#292a30] ease-in-out duration-300">
                    Delete Account
                </button>
            </div>

        </div>
    );
};

export default Settings; 
