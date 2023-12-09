import { useLoaderData, useParams } from "react-router-dom";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import BrandCardShow from "../../Components/BrandCardShow/BrandCardShow";
import Slider from "../../Components/Slider/Slider";


const BrandDara = () => {
    const cardDatas = useLoaderData()
    const Brand_Name = useParams()
    const filter = cardDatas.filter(cardData =>cardData.Brand_Name == Brand_Name.name )
    console.log(filter)
    return (
        <div className="space-y-20">
           <Slider></Slider>
          <div>
            <h3 className="text-3xl font-bold text-center mb-14">Choos your like phone</h3>
          <div className="grid  md:grid-cols-3 p-3 lg:grid-cols-4 gap-4">
                {
                    filter.map(filterItms => <BrandCardShow
                    key={filterItms._id}
                    filterItms={filterItms}
                    ></BrandCardShow>)
                }
            </div>
          </div>
        </div>
    );
};

export default BrandDara;