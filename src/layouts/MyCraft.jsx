import { useContext } from "react";
import PropTypes from 'prop-types';
import { GoStarFill } from "react-icons/go";
import Swal from "sweetalert2";
import { HandleContext } from "./MyCrafts";
import { Link } from "react-router-dom";
const MyCraft = ({i}) => {
    const {_id, item, price, rating, stock, photo, customization} = i;

        const {items,setItems} = useContext(HandleContext)

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://glassy-fold-server.vercel.app/items/${_id}`, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount> 0){
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
                const remainingItems = items.filter(item => item._id !== _id);
                setItems(remainingItems)
            })



              
            }
          });
    }
    return (
        <div className=" rounded-lg shadow-lg border flex flex-col justify-between border-[#2b2d42] dark:bg-gray-50 text-black">
            <div>
            <img src={photo} alt="" className="w-full object-contain rounded-lg h-72 p-5" />
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h3 className="underline font-bold">Status: {stock}</h3>
                    <h2 className="text-3xl font-semibold tracking-wide">{item}</h2>
                    <p className="text-black font-semibold text-lg">Price :{price}</p>
                    <p className="font-semibold text-lg">Customization : {customization}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-map text-lg font-medium flex items-center gap-1"><GoStarFill/>{rating}</h3>
                <div className="flex flex-col gap-3">
                <Link to={`/update/${_id}`}><button className='btn font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Update</button></Link>
                <button onClick={()=>handleDelete(_id)} className='btn font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
};

MyCraft.propTypes = {
    i: PropTypes.object.isRequired
}

export default MyCraft;