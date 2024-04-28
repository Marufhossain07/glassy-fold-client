import { GoStarFill } from "react-icons/go";
const MyCraft = ({i}) => {
    const { item, price, rating, stock, photo, customization } = i;
    return (
        <div className=" rounded-lg shadow-lg border flex flex-col justify-between border-[#2b2d42] dark:bg-gray-50 dark:text-gray-800">
            <div>
            <img src={photo} alt="" className="w-full object-contain rounded-lg h-72 p-5" />
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h3 className="underline font-bold">Status: {stock}</h3>
                    <h2 className="text-3xl font-semibold tracking-wide">{item}</h2>
                    <p className="dark:text-gray-800 font-semibold text-lg">Price :{price}</p>
                    <p className="font-semibold text-lg">Customization : {customization}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-map text-lg font-medium flex items-center gap-1"><GoStarFill/>{rating}</h3>
                <div className="flex flex-col gap-3">
                <button className='btn font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Update</button>
                <button className='btn font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraft;