import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllCrafts = () => {
    const [items, setItems] = useState([]);
    const {loading} = useContext(AuthContext)
    useEffect(()=>{
        fetch('https://glassy-fold-server.vercel.app/items')
        .then(res=> res.json())
        .then(data => setItems(data))
    },[])
    if(loading){
        return <div className='w-full mt-10 flex justify-center '>
            <span className="loading loading-spinner loading-lg "></span>
        </div>
        
    }
    if(items){
    return (
        <div className="mt-5">
            <h3 className="text-4xl font-pop font-semibold text-center text-[#2b2d42]">All Items</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            items.map(data=><tr key={data._id}>
                                <th>{data.item}</th>
                                <td>{data.sub}</td>
                                <td>{data.price}</td>
                                <td> <Link to={`/items/${data._id}`}><button className='btn font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>View Details</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default AllCrafts;