import Categories from "../Categories";
import CraftItems from "../CraftItems";
import Newsletter from "../Newsletter";
import Stats from "../Stats";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

    return (
        <div>
            <div className="carousel rounded-lg w-full mt-10">
                <div id="slide1" className="carousel-item banner1 relative w-full">
                    <div className="space-y-5 pl-24 py-24 dark:text-black">
                        <h3 className="font-man text-xl pb-5 font-bold ">Top Quality Products</h3>
                        <h3 className=" text-4xl md:text-6xl lg:text-6xl font-semibold font-pop pb-5">Top Quality Art <br /> <Typewriter
                            words={['Collection', 'Creation', 'Design', 'Exhibition!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h3>
                        <button className='btn text-lg font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full banner2 md:h-[470px] lg:h-[470px]">
                    <div className="space-y-5 pl-24 pt-24 dark:text-white">
                        <h3 className="font-man text-xl pb-5 font-bold ">Best Art Products</h3>
                        <h3 className="text-4xl md:text-6xl lg:text-6xl  font-semibold font-pop pb-5">Newly Handmade <br /> Collection</h3>
                        <button className='btn text-lg font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full banner3 md:h-[470px] lg:h-[470px]">
                    <div className="space-y-5 pl-24 pt-24 text-[#2b2d42]">
                        <h3 className="font-man text-xl pb-5 font-bold ">You Can Trust Us</h3>
                        <h3 className="text-4xl md:text-6xl lg:text-6xl  font-semibold font-pop pb-5">Check Our <br /> WonderLand</h3>
                        <button className='btn text-lg font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <CraftItems></CraftItems>
            </div>
            <div>
                <Categories></Categories>
            </div>
            <div>
                <Stats></Stats>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;