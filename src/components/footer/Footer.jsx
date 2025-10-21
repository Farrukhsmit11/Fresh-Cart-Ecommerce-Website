import { Link } from "react-router-dom"
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="g-4 py-4 row">
                    <div className="nav-items">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h6 className="footer-heading">Categories</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="links-main">
                                        <Link className="nav-links" to={"/"}>Vegetable Fruits</Link>
                                        <Link className="nav-links" to={"/"}>Breakfast & instant food</Link>
                                        <Link className="nav-links" to={"/"}>Dairy bread and eggs</Link>
                                        <Link className="nav-links" to={"/"}>Suaces & spreads</Link>
                                        <Link className="nav-links" to={"/"}>Organic & gurment</Link>
                                        <Link className="nav-links" to={"/"}>Cleaning & essentials</Link>
                                        <Link className="nav-links" to={"/"}>Baby Care</Link>
                                        <Link className="nav-links" to={"/"}>Personal Care</Link>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="links-main">
                                        <Link className="nav-links" to={"/"}>Dairy, bread & eggs</Link>
                                        <Link className="nav-links" to={"/"}> Cold drinks & juices</Link>
                                        <Link className="nav-links" to={"/"}>Tea coffee & drinks</Link>
                                        <Link className="nav-links" to={"/"}>Masala oil & more </Link>
                                        <Link className="nav-links" to={"/"}>Chicken meat & fish</Link>
                                        <Link className="nav-links" to={"/"}>Pharma & wellness</Link>
                                        <Link className="nav-links" to={"/"}>Home & Office</Link>
                                        <Link className="nav-links" to={"/"}>Pet care</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer