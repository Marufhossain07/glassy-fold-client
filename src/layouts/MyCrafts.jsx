import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCraft from "./MyCraft";

export const HandleContext = createContext();
const MyCrafts = () => {
    const [items, setItems] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://glassy-fold-server.vercel.app/items-from-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user?.email])

    const handleSort = e => {
        const sort = e.target.value;
        fetch(`https://glassy-fold-server.vercel.app/items/${user?.email}/${sort}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }

    const states = {
        items,
        setItems
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
                        return <HandleContext.Provider key={i._id} value={states}>
                        <MyCraft key={i._id} i={i} items={items} setItems={setItems}></MyCraft>
                        </HandleContext.Provider>
                    })
                }
                
            </div>
        </div>
    );
};

export default MyCrafts;