
import { useLoaderData } from "react-router-dom";
import SubData from "./SubData";
import { useEffect, useState } from "react";

const Sub = () => {
    const [items, setItems]= useState([])
    const data = useLoaderData()
    console.log(items)
    useEffect(()=>{
        
    setItems(data)
    },[])
    return (
        <div>
            <h3 className="text-4xl font-pop tec font-semibold text-[#2b2d42]">Sub-Category Items</h3>
            <div className="grid md:grid-cols-2 pt-8 lg:grid-cols-2 gap-5">
                {
                    items?.map(i=> <SubData key={i._id} i={i}></SubData>)
                }
            </div>
        </div>
    );
};

export default Sub;