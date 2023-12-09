

const Slider = () => {
    return (
        <div className="carousel w-full h-[85vh]">

      <div style={{ backgroundImage: "url(https://i.ibb.co/RPjD06g/Iphone-15-Pro-Max-Web-Slider-2722.webp)", backgroundPosition: "center", backgroundSize: "cover" }} id="slide1" className="carousel-item relative  w-full">

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div style={{ backgroundImage: "url(https://i.ibb.co/Mg0YvPb/1d28a1126973499-6138818676947.png)", backgroundPosition: "center", backgroundSize: "cover" }} id="slide2" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div style={{ backgroundImage: "url(https://i.ibb.co/XFtQ1NB/vivo-y12-A-Malaysia-price-1.jpg)" , backgroundPosition: "center", backgroundSize: "cover"  }} id="slide3" className="carousel-item relative w-full">
        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div style={{ backgroundImage: "url(https://i.ibb.co/b5nSmMM/Ugreen-Banner-Design-Gadstyle.webp)" ,backgroundPosition: "center", backgroundSize: "cover"}} id="slide4" className="carousel-item relative w-full">
        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
   
    </div>
    );
};

export default Slider;