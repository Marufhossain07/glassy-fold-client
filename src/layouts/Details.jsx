import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();
    const { item, sub, description, price, rating, customization, time, stock, photo } = data;
    return (
        <div className="mt-5">
            <h3 className="text-4xl font-pop text-center 
            font-semibold text-[#2b2d42]">Item Details</h3>
            <div className="text-[#2b2d42] flex flex-col md:flex-row lg:flex-row gap-5 mt-10 border-2 border-[#2b2d42] rounded-lg">
                <div>
                    <img className="rounded-lg h-96" src={photo} alt="" />
                </div>
                <div>
                    <h3 className="text-2xl font-pop font-semibold py-3">Name: {item}</h3>
                    <p className="text-lg font-medium pb-10">Description: {description}</p>
                    <div className="flex gap-10">
                        <h3 className="text-lg font-medium">Price : {price}</h3>
                        <h3 className="text-lg font-medium">Rating : {rating}</h3>
                    </div>

                    <p className="text-base font-medium pt-3">Sub-Category : {sub}</p>
                    <p className="text-base font-medium pt-3">Customization : {customization}</p>

                    <div>
                        <p className="text-base font-medium pt-3">Processing Time : {time}</p>
                        <p className="text-base font-medium pt-3">Stock : {stock}</p>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;