import Swal from "sweetalert2";


const AddProduct = () => {
  const hanelAddProduct = event => {
    event.preventDefault()
    const form = event.target;
    const Name = form.Name.value;
    const Brand_Name = form.Brand_Name.value;
    const Short_Dec = form.Short_Dec.value;
    const Type = form.Type.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const Image = form.Image.value;
    const cardInfo = {
      Name,
      Brand_Name,
      Short_Dec,
      Type,
      Price,
      Rating,
      Image
    }
    console.log(cardInfo)

    fetch("https://tech-city-server-eight.vercel.app/AddCard", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(cardInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire(
            'Good job!',
            'You Account Successfully Regisater !',
            'success')
        }
      })

  }
  return (
    <div className="min-h-screen p-6 bg-gray-100 items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg"> products Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">

                <form onSubmit={hanelAddProduct}>

                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5 ">
                      <label > Name</label>
                      <input required type="text" name="Name" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div className="md:col-span-5">
                      <label >Brand Name</label>
                      <input required type="text" name="Brand_Name" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>
                    <div className="md:col-span-5">
                      <label >Short description</label>
                      <input required type="text" name="Short_Dec" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div className="md:col-span-3">
                      <label >Type</label>
                      <input required type="text" name="Type" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div className="md:col-span-2">
                      <label>Price</label>
                      <input required type="text" name="Price" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div className="md:col-span-2">
                      <label>Rating</label>
                      <input required type="text" name="Rating" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />


                    </div>

                    <div className="md:col-span-2">
                      <label >Image</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input required type="text" name="Image" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                      </div>
                    </div>



                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input required type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                        <label className="ml-2">My billing address is different than above.</label>
                      </div>
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">

                        <input required type="submit" value="Add Product" id="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;