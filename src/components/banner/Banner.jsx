import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div className="fresh-cart-banner">
            <div className="container">
                <div className="row">
                    <nav className="banner-nav">
                        <div className="logo">
                            <img
                                className="cart-logo"
                                src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg"
                                alt="Fresh Cart Logo"
                            />
                        </div>
                        <div className="content-right">
                            <div className="nav-content">
                                <p>Already have an account? <a className="account-link" href="">Sign in</a></p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Banner