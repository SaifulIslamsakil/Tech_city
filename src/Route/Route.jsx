import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Registar from "../Pages/Registar/Registar";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivareRoute from "../PrivateRoute/PrivareRoute";
import BrandDara from "../Pages/BrandData/BrandDara";
import CardDtls from "../Components/CardDtls/CardDtls";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateData from "../Pages/UpdateData/UpdateData";
import Error from "../Pages/Error/Error";


const route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/Registar",
                element:<Registar></Registar>
            },
            {
                path:"/Login",
                element:<Login></Login>
            },
            {
                path:"/AddProduct",
                element:<PrivareRoute><AddProduct></AddProduct></PrivareRoute>
            },
            {
                path:"/brand/:name",
                loader: ()=> fetch("https://tech-city-server-eight.vercel.app/AddCard"),
                element:<PrivareRoute><BrandDara></BrandDara></PrivareRoute>
            },
            {
                path:"/detlis/:id",
                loader: ()=> fetch(`https://tech-city-server-eight.vercel.app/AddCard`),
                element:<PrivareRoute> <CardDtls></CardDtls> </PrivareRoute>
            },
            {
                path:"/MyCart",
                loader: ()=> fetch(`https://tech-city-server-eight.vercel.app/SaveData`),
                element:<PrivareRoute> <MyCart></MyCart> </PrivareRoute>
            },
            {
                path:"/update/:id",
                loader: ({params}) => fetch(`https://tech-city-server-eight.vercel.app/AddCard/${params.id}`),
                element:<PrivareRoute> <UpdateData></UpdateData></PrivareRoute>
            },
            
          
        ]
    }
])

export default route