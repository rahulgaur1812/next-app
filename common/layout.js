import React from "react";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = (props) => {
    const { children, footerstatus } = props
    return (
        <>
            {true ? (
                <div>
                    <Header />
                    <Navbar />
                    {children}
                    {!footerstatus && <Footer />}

                </div>
            ) : (
                <div>
                    <Header />
                    <Navbar />
                    {children}
                    {!footerstatus && <Footer />}
                </div>
            )}
        </>


    )
}
export default Layout