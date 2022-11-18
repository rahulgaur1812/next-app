import React, { useEffect } from "react";
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/404');
        }, 3000)
    }, [])
    return (
        <div>
            <h2>File not found</h2>
        </div>
    )
}
export default NotFound