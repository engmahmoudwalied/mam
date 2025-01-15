const Input = ({label,...props}) => {
    return (
        <div className="mb-4">
            <label className="block text-[#BDBFC7] text-sm mb-1">{label}</label>
            <input
                {...props}
                className="w-1/4 px-4 py-2 bg-[#292a30] text-white rounded-md focus:outline-none placeholder-[#BDBFC7]"
            />
        </div>
    );
};
  
  export default Input
  