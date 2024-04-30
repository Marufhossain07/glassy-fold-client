import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://glassy-fold-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center space-y-3">
                <h3 className="text-4xl font-pop font-semibold text-[#2b2d42]">Art &Craft Categories</h3>
                <p className="font-man">Discover a world of creativity with our Art & Craft Categories. From intricate paper crafts to vibrant glass <br /> art, explore diverse subcategories to inspire your next masterpiece.</p>
                <div className="grid md:grid-cols-2 pt-8 lg:grid-cols-2 gap-5">
                {
                    categories.map(category=> <Category key={category._id} category={category}></Category>)
                }
                </div>
            </div>
        </div>
    );
};

export default Categories;