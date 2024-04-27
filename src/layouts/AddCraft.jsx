import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddCraft = () => {
    const { user } = useContext(AuthContext)



    //  User Email
    // k.User Name

    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <h2 className="text-4xl text-center font-pop font-semibold pb-5">Add Craft Item</h2>


                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Item Name</label>
                                <input name="item" type="text" placeholder="Item Name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Sub-Category Name</label>
                                <input name="sub" type="text" placeholder="Sub-Category Name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full flex flex-col gap-1 sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Short Description</label>
                                <textarea name='description' placeholder="Write here" className="textarea textarea-bordered textarea-xs w-full " ></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Price</label>
                                <input name="price" type="text" placeholder="Price" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Rating</label>
                                <input name="rating" type="text" placeholder="Rating" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Customization</label>
                                <input name="Customization" type="text" placeholder="Customization" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Processing Time</label>
                                <input name="time" type="text" placeholder="Processing Time" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Stock Status</label>
                                <input name="status" type="text" placeholder="Stock Status" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Email</label>
                                <input name="email" type="text" defaultValue={user?.email}  className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900  border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Name</label>
                                <input name="name" type="text" defaultValue={user?.displayName}  className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="city" className="text-sm">Photo</label>
                                <input name="photo" type="text" placeholder="Enter photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <input className="w-full p-3 text-center bg-[#2b2d42]" type="submit" value="Add Item" />
                            </div>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddCraft;