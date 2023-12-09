const HomeSlider = () => {
  return (
    <div className="carousel w-full h-[85vh]">

      <div style={{ backgroundImage: "url(https://i.ibb.co/QCZwZP7/123292dd-8c99-4c9f-859f-35b0305842f5-CR0-0-4043-2501-PT0-SX970-V1.jpg)", backgroundPosition: "center", backgroundSize: "cover" }} id="slide1" className="carousel-item relative  w-full">

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div style={{ backgroundImage: "url(https://i.ibb.co/z86H94t/Web-Banner-copy.webp)", backgroundPosition: "center", backgroundSize: "cover" }} id="slide2" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div style={{ backgroundImage: "url(https://i.ibb.co/C5CTtyV/Display-Project-Elias-KV.webp)" }} id="slide3" className="carousel-item relative w-full">
        <div className=" mt-40 ml-20 w-1/2 space-y-4 ">
          <h3 className="font-bold">Limited Quantity</h3>
          <h1 className="text-5xl font-bold">The Wonder Of Disney on the fraem Tv  </h1>
          <p className="text-lg ">Now back after popular demand. enjoy 100 Disney work of art only one the Disney 100 Edition  </p>
          <button className="btn bg-green-700 hover:bg-green-500 text-white ">Buy Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div style={{ backgroundImage: "url(https://i.ibb.co/YBGFYGv/Homepage-KV-DT.webp)" }} id="slide4" className="carousel-item relative w-full">
        <div className=" mt-40 ml-20 w-96 space-y-4 text-white">
          <h3 className="font-bold">offer ends jan 2024</h3>
          <h1 className="text-5xl font-bold">Save up to $1,700on select appliances</h1>
          <p className="text-lg ">Up to $1,200 off + $500 by bundling a Bespoke Fridgeand 3 or more products.¢</p>
          <button className="btn bg-green-700 hover:bg-green-500 text-white ">Shop Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div style={{ backgroundImage: "url(https://i.ibb.co/93CF94c/Display-S90-C-Homepage-KV.webp)" }} id="slide5" className="carousel-item relative w-full">
        <div className=" mt-40 ml-20 w-1/2 space-y-4 text-white">
          <h1 className="text-5xl font-bold">Game day just got brighter</h1>
          <p className="text-lg ">Save $1,400 and steal the show with the bold contrast on the 83" OLED S90C.</p>
          <button className="btn bg-green-700 hover:bg-green-500 text-white ">Buy Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div style={{ backgroundImage: "url(https://i.ibb.co/ThvKgWp/HP-FT03-KV-Tab-S9-FE-Buds-FE-1440x640-v1-D.jpg)" }} id="slide6" className="carousel-item relative w-full">
        <div className=" mt-40 ml-20 w-96 space-y-4">
          <h1 className="text-5xl font-bold">The New Gelaxy Tab S 9 FE Series</h1>
          <p className="text-lg ">Unfold an immersive entertainment experience with a massive 7.6" screen.</p>
          <div className="flex gap-7 items-center">
            <h3 className=" text-xl font-bold border-b-2 border-black"> Learn More</h3>
            <button className="btn bg-green-700 hover:bg-green-500 text-white ">Buy Now</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;