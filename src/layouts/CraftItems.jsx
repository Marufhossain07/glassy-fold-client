import { useEffect, useState } from "react";
import CraftItem from "./CraftItem";

const CraftItems = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=> res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className="mt-10">
            <div className="text-center space-y-3">
                <h3 className="text-4xl font-pop font-semibold text-[#2b2d42]">Craft Items</h3>
                <p className="font-man">Dive into a world of handmade wonders with our craft items section, featuring a diverse range of creations from <br /> talented artisans. From paper crafts to glass art, find the perfect piece to elevate your crafting journey.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    items.map(i=>{
                       return <CraftItem key={i._id} i={i}></CraftItem>
                    } )
                }
            </div>
        </div>
    );
};

export default CraftItems;