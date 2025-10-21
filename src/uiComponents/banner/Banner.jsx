import { Toaster } from "react-hot-toast"

const Banner = () => {
    return (
        <div className="fresh-cart-banner">
            <Toaster />
            <div className="container">
                <div className="row my-lg-14 my-8">
                    <nav className="shadow-sm">
                        <div className="logo">
                            <img
                                className="cart-logo"
                                src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg"
                                alt="Fresh Cart Logo"
                            />
                        </div>
                        <div className="content-right">
                            <div className="nav-content">
                                <p>Already have an account? <a href="">Sign in</a></p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>


    )
}

export default Banner