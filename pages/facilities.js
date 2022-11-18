import React from "react";
import Link from "next/link";
const Facilities = () => {
    return (
        <div>
            <h2>Hi This is Facilities page.</h2>
            <ul>
                <li><Link href="/facilities/lab">Lab</Link></li>
                <li><Link href="/facilities/library">library</Link></li>
                <li><Link href="/facilities/playground">playground</Link></li>
            </ul>


        </div>
    )
}
export default Facilities