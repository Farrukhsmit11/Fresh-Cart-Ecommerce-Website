import SignIn from "../../pages/auth/signIn/SignIn"
import HeroCards from "../../components/heroCards/HeroCards"
import Wishlist from "../../components/wishlist/Wishlist"
import CategoryDetail from "../../pages/categoryDetail/CategoryDetail"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path="/" element={<HeroCards />}></Route>
            <Route path="/categorydetail" element={<CategoryDetail />}></Route>
        </Routes>
    )
}

export default AppRoutes