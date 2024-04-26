

const Home = () => {
    return (
        <div>
            <div className="carousel rounded-lg w-full mt-10">
                <div id="slide1" className="carousel-item banner1 relative w-full">
                    <div className="space-y-5 pl-24 py-24 dark:text-black">
                        <h3 className="font-man text-xl pb-5 font-bold ">Top Quality Products</h3>
                        <h3 className=" text-4xl md:text-6xl lg:text-6xl font-semibold font-pop pb-5">Top Quality Art <br /> Collection</h3>
                        <button className='btn text-lg font-man py-2 px-8 bg-[#2b2d42] border-none text-white'>Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
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
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;