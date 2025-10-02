import { Route, Routes } from "react-router-dom"
import Signin from "../pages/auth/signIn/Signin"
import Auth from "./Auth"

const Auth = () => {
    return (
        <div>
            <Routes>
                <Route path="/SignIn" element={<Signin />}></Route>
            </Routes>

        </div>
    )
}

export default Auth