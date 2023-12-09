import { Link } from "react-router-dom";


const BrandCardShow = ({filterItms}) => {
    const {_id,Name,Brand_Name,Short_Dec,Type,Price,Rating,Image} = filterItms
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-40" src={Image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{Name}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">Brand: {Brand_Name}</p>
                    <div className="rating flex gap-3 items-center">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <p className="text-xl font-semibold">{Rating}</p>
                    </div>
                </div>
                <hr />
                <h3 className="text-2xl font-semibold text-amber-500">Price: ${Price}</h3>
                <p>{Short_Dec}</p>
                <div className="card-actions justify-around mt-5">
               <Link to={`/detlis/${_id}`}>
               <button className="btn bg-amber-500 text-white ">More Detalis</button>
               </Link>
               <Link to={`/update/${_id}`}>
               <button className="btn bg-green-500 text-white">update Now</button>
               </Link>
                </div>
            </div>
            </div>
    );
};

export default BrandCardShow;