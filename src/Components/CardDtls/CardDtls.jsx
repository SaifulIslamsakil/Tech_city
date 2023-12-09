import { useLoaderData, useParams } from "react-router-dom";
import HomeSlider from "../HomeSlider/HomeSlider";
import Swal from "sweetalert2";



const CardDtls = () => {
    const datas = useLoaderData()
    console.log(datas )
    const cardid = useParams()
    const find = datas.find(data => data._id == cardid.id)
    const { Name, Brand_Name, Price, Image } = find

    const hadelAddtoProduct =find=>{
        fetch("https://tech-city-server-eight.vercel.app/SaveData",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(find)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    'You product  Successfully added !',
                    'success')
            }
        })

    }



    return (
        <div className="space-y-10">
            <HomeSlider></HomeSlider>

            <div className="grid lg:grid-cols-4 bg-white p-4 ">
                <div className="md:flex justify-between gap-5 col-span-3 px-5">
                    <img className="w-72" src={Image} alt="" />
                    <div className="space-y-3 ">
                        <h1 className="text-2xl font-bold">{Name} iOS 16 6.7 inches Super Retina XDR OLED Apple A16 Bionic, 128GB</h1>
                        <div className="flex justify-between  ">
                            <div className="space-y-3">
                                <div className="rating ">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                    <span> | 38 Answered Questions</span>
                                </div>
                                <p>Brand : {Brand_Name} | <span>More Smart Phones from Apple</span> </p>
                            </div>
                            <div className="rating gap-1">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            </div>
                        </div>
                        <hr />
                        <h2 className="text-3xl font-bold text-amber-500">Price : ${Price}</h2>
                        <div className="flex gap-5">
                            <p>Instalment Offers</p>
                            <p>Installment Offers available up to 6 months</p>
                        </div>
                        <button onClick={()=> hadelAddtoProduct(find)} className="btn w-full bg-green-500 text-white hover:bg-green-400">Add to card</button>
                    </div>

                </div>
                <div className="">
            
                </div>
            </div>
            <div className=" gap-3 grid lg:grid-cols-5">
                <div className="col-span-4 bg-white p-5 space-y-4">
                    <h3 className=" text-lg font-semibold ">Product details of {Name} iOS 16 6.7 inches Super Retina XDR OLED Apple A16 Bionic, 128GB</h3>
                    <div className="flex justify-around gap-4 my-5 p-4 ">
                        <ul className="list-disc">
                            <li>Display: 6.7 Inches</li>
                            <li>Processor: Apple A16 Bionic (5 nm)</li>
                            <li>Operating System: iOS 16</li>
                            <li>Storage: 128GB/ 6GB</li>
                        </ul>
                        <ul className="list-disc">
                            <li>Primary Camera: 12 MP</li>
                            <li>Front Camera: 12 MP f/2.2</li>
                            <li>Battery: 3115mAh</li>
                        </ul>
                    </div>
                    <hr />

                    <div>
                        <h4 className="font-semibold text-xl mb-4  ">{Name} Details Specification</h4>
                        <p>
                            iPhone 14 Pro Max is the newest and most powerful iPhone from Apple. Apple has always put its highest-end specs and features in its Pro Max line-up. This year is also no exception!
                        </p>
                        <p>
                            Not only is the newer iPhone 14 Pro Max the most powerful iPhone, but it's also a joy to use – all thanks to its mind-blowing hardware and software optimization!
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">{Name}: Key Features</h4>
                        <div className="flex gap-10">

                            <ul>
                                <li>Display Size</li>
                                <li>Chipset</li>
                                <li>Storage</li>
                                <li>Cameras</li>
                                <li>Connectivity</li>
                                <li>Size</li>
                                <li>Weight</li>
                                <li>Rated Battery Life</li>
                                <li>Colors</li>
                            </ul>
                            <ul>
                                <li>6.7‑inch</li>
                                <li>Apple A16 Bionic</li>
                                <li>128GB</li>
                                <li>48MP Main, 12MP Ultra Wide, 12MP Telephoto, 12MP Front</li>
                                <li>5G, Wi-Fi 6, Bluetooth 5.3</li>
                                <li>6.33 x 3.05 x 0.31 inches</li>
                                <li>240 grams</li>
                                <li>Up to 29 Hours (Video Playback)</li>
                                <li>Space Black, Silver, Gold, Deep Purple</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className=" text-xl text-justify font-semibold mb-5">How Much Does the iPhone 14 Pro Max Cost in Bangladesh?</h4>
                        <p>The price of the iPhone 14 Pro Max varies depending on the storage options you are choosing. You can check the latest iPhone 14 Pro Max price from Gadget & Gear, one of the trusted Apple-authorized resellers in Bangladesh.

                            Though the price is a bit high, the top-notch design, mind-blowing performance, camera, and extra-long battery life make up for it. That’s why, after the official launch, iPhone 14 Pro Max gained massive popularity among all the iPhone users in Bangladesh.</p>
                    </div>
                    <div className="flex justify-center">
                    <button className="btn btn-outline btn-success mx-auto">more Detiles</button>
                    </div>

                </div>
                
            </div>

        </div>
    );
};

export default CardDtls;