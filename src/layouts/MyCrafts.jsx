import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCraft from "./MyCraft";

const MyCrafts = () => {
    const [items, setItems] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/items/${user?.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user?.email])

    const handleSort = e =>{
        const sort = e.target.value;
        fetch(`http://localhost:5000/items/${user?.email}/${sort}`)
        .then(res=> res.json())
        .then(data => setItems(data))
    }

    return (
        <div className="mt-5">
            <div className="text-center">
                <h3 className="text-4xl mb-5 font-pop font-semibold text-[#2b2d42]">My Items</h3>
                <select onChange={handleSort} className="select select-info w-full border-[#2b2d42] max-w-xs">
                    <option disabled selected>Filter By Customization</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
                {
                    items.map(i => {
                        return <MyCraft key={i._id} i={i}></MyCraft>
                    })
                }
            </div>
        </div>
    );
};

export default MyCrafts;