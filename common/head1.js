import Link from "next/link";
import React from "react";
const Head1 = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href="/">Altudo</Link>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav col-lg-8">
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" href="/courses">Courses</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" href="/facilities">Facilities</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" href="/product">Products</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>


        </div>
    )
}
export default Head1