import { useContext  } from "react";
import { useLoaderData, useNavigate  } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Update = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData();
    const {_id} = data;
    const navigate = useNavigate();
    console.log(data.item)
    const handleUpdateItems = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const item = form.item.value
        const sub = form.sub.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const updatedItem = { item, sub, description, price, rating, customization, time, stock, email, name, photo };
        fetch(`https://glassy-fold-server.vercel.app/items/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Item has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setTimeout(()=>{
                    navigate('/')
                }, 1500)

            }
        })
    }
    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleUpdateItems} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <h2 className="text-4xl text-center font-pop font-semibold pb-5">Update Craft Item</h2>


                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Item Name</label>
                                <input name="item" type="text" placeholder="Item Name" defaultValue={data.item} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Sub-Category Name</label>
                                <input name="sub" type="text" placeholder="Sub-Category Name" defaultValue={data.sub} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full flex flex-col text-black gap-1 sm:col-span-3">
                                <label htmlFor="email" className="text-sm text-black">Short Description</label>
                                <textarea name='description' placeholder="Write here" defaultValue={data.description} className="textarea text-red textarea-bordered textarea-xs w-full " ></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Price</label>
                                <input name="price" type="text" placeholder="Price" defaultValue={data.price} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Rating</label>
                                <input name="rating" type="text" placeholder="Rating" defaultValue={data.rating} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Customization</label>
                                <input name="customization" type="text" placeholder="Customization" defaultValue={data.customization} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Processing Time</label>
                                <input name="time" type="text" placeholder="Processing Time" defaultValue={data.time} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Stock Status</label>
                                <input name="stock" type="text" placeholder="Stock Status" defaultValue={data.stock} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Email</label>
                                <input name="email" type="text" defaultValue={user?.email} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900  border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Name</label>
                                <input name="name" type="text" defaultValue={user?.displayName} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="city" className="text-sm">Photo</label>
                                <input name="photo" type="text" placeholder="Enter photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <input className="btn text-white w-full p-3 text-center bg-[#2b2d42]" type="submit" value="Update Item" />
                            </div>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default Update;