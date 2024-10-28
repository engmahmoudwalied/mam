"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const DropDown = ({ label, options, selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    const arrowDownIcon = (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );

    const arrowUpIcon = (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14L12 10L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );

    return (
        <div className="relative mb-6">
            <label className="block text-sm  text-[#BDBFC7]">{label}</label>
            <div
                className="mt-1  w-1/4 rounded-md bg-[#292a30] text-white cursor-pointer p-2 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption}</span>
                {isOpen ? arrowUpIcon : arrowDownIcon}
            </div>
            {isOpen && (
                <motion.div
                    className="absolute z-10 w-1/4 mt-1 bg-[#292a30] rounded-md shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {options.map((option) => (
                        <motion.div
                            key={option}
                            className={`cursor-pointer text-white p-1 m-2 hover:bg-[#4a4b54] rounded-md focus:bg-[#4a4b54] ${selectedOption === option ? 'bg-[#4a4b54]' : ''}`}
                            onClick={() => handleOptionClick(option)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {option}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default DropDown;
