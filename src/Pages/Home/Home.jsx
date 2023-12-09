import { useEffect, useState } from "react";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import { Link } from "react-router-dom";



const Home = () => {
    const [brandData, setBrandData] =useState([])
    const [Trending,setTrending] = useState([])
    const [Popular,setPopular] = useState([])

    useEffect(()=>{
        fetch("brand-data.json")
        .then(res => res.json())
        .then(data=> setBrandData(data))
    },[])

    useEffect(()=>{
        fetch("Trending.json")
        .then(res => res.json())
        .then(data=> setTrending(data))
    },[])
    useEffect(()=>{
        fetch("Popular.json")
        .then(res => res.json())
        .then(data=> setPopular(data))
    },[])
    console.log(brandData)
    return (
        <div className="space-y-10 p-4" >
         <HomeSlider></HomeSlider>
         <h1 className="text-4xl text-center  font-bold">Choos Your brand</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
               
                {
                    brandData.map(singelBrand => <div
                    key={singelBrand.id}>
                     <Link to={`/brand/${singelBrand.Brand_name}`}>
                     <div style={{backgroundImage:`url(${singelBrand.Brand_img})`, backgroundPosition:"center", backgroundSize:"cover"}} className=" h-48 rounded-lg shadow-lg">
                        <div style={{backgroundColor:"rgba(11, 11, 11, 0.30)"}} className="w-full h-full hover:">

                        </div>

                      </div>
                     </Link>
                    </div>)
                }
            </div>

            <div>
                <h2 className="text-3xl font-bold ">Trending Categories</h2>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 p-3 mt-10 ">

                {
                    Trending.map(singelTrending => <div
                    key={singelTrending.id} className="shadow-lg  text-center p-4 rounded-lg">
                     
                        <img className="w-44 h-40 mx-auto" src={singelTrending.image} alt="" />
                        <p className="text-xl font-semibold">{singelTrending.name}</p>
                  
                    </div>)
                }

                </div>
            </div>

            <div>
            <h2 className="text-3xl font-bold ">Popular Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-3 mt-10 ">
            {
                    Popular.map(singelPopular => <div
                    key={singelPopular.id} className="shadow-lg  text-center p-4 rounded-lg space-y-3">
                     
                        
                        <img className="w-44 h-40 mx-auto mb-3" src={singelPopular.Brand_img} alt="" />
                        <div className="rating  ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        <p className="text-xl font-semibold">{singelPopular.name}</p>
                        <p className="text-xl text-red-500 font-semibold">${singelPopular.prices}</p>
                  
                    </div>)
                }                
            </div>
            </div>
        </div>
    );
};

export default Home;