import React from "react";
import { useRouter } from 'next/router';

// make api call using id
const ProductId = (context) => {
    const router = useRouter();
    const { id } = router.query;
    console.log('id', id)
    return (
        <div className="row">
            this is product page - {id}

        </div >
    )
}
export default ProductId
