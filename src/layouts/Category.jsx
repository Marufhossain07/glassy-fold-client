import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {sub,photo,description,range,_id} = category
    return (
        <div  id="hoverCard">
            <Link to={`/subCategory/${sub}`}>
            <div className="card card-side border-2 border-[#2b2d42] shadow-2xl">
                <figure><img className="h-72 mx-auto w-72 object-cover" src={photo} alt="Movie" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-2xl font-pop font-semibold">{sub}</h2>
                    <p className="font-man font-medium">{description}</p>
                    <p className="font-man font-bold text-base">Price Range : {range}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Category;