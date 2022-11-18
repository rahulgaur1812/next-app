import React from "react";
import Link from 'next/link';
const Navbar = () => {
    return (
        <div>
            <h2>Hi This is Navbar page.</h2>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/facilities'>Facilities</Link>
        </div>
    )
}
export default Navbar