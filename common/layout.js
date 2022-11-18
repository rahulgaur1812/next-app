import React from "react";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = (props) => {
    const { children, footerstatus } = props
    return (
        <div className="container-fluid">
            {true ? (
                <div>
                    <Header />
                    {/* <Navbar /> */}
                    {children}
                    {!footerstatus && <Footer />}

                </div>
            ) : (
                <div>
                    <Header />
                    {/* <Navbar /> */}
                    {children}
                    {!footerstatus && <Footer />}
                </div>
            )}
        </div>


    )
}
export default Layout