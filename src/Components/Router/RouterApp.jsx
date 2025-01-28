import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "../../Pages/Home/Home.jsx"
import { Products } from "../../Pages/Products/Products.jsx"
import{Login} from "../../Pages/Login/Login.jsx"
import { NotFound } from "../../Pages/NotFound/NotFound.jsx"

const RouterApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
        
}
export {RouterApp}