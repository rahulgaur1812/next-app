import Link from "next/link";
import React from "react";
const Head1 = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-2">
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href="/">Altudo</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav col-lg-8">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            <Link className="nav-link" href="/about">About</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/facilities">Facilities</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/batches">Batches</Link>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>


        </div>
    )
}
export default Head1