import {Routes , Route} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Quotes from "../pages/Quotes";



const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/quotes" element={<Quotes />} />
                
            </Route>
        </Routes>
    )
}

export default Router;
