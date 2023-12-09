import Swal from "sweetalert2";


    const AddedCart = ({cart,cartData,setCartData}) => {
        const { _id, Name, Brand_Name, Price, Image } = cart
         

        const handelDeleteCard = _id =>{

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://tech-city-server-eight.vercel.app/SaveData/${_id}`,{
                        method:"DELETE",
                       })
                       .then(res => res.json())
                       .then(data => {
                        console.log(data)
            
                       })

                   Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                    const filter = cartData.filter(cards => cards._id !== _id)
                    setCartData(filter)

                }
              })

        
        }
        
    return (
        <div className="bg-white">
           <div className="flex p-2 space-x-3" >
           <img className="w-24" src={Image} alt="" />
           <div>
            <h4 className="text-lg font-semibold">Product details of {Name} iOS 16 6.7 inches Super Retina XDR OLED Apple A16 Bionic, 128GB</h4>
            <p>{Brand_Name} Color Family:Deep Purple</p>
            <p>Only 5 item(s) in stock</p>
          
            <div className="flex justify-between">
            <p className="text-xl text-amber-500"> price: ${Price}</p>
            <button onClick={()=> handelDeleteCard(_id)} className="btn bg-amber-500 text-white">Delete</button>
            </div>
           </div>
          
           </div>
           
        </div>
    );
};

export default AddedCart;