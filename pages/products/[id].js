import React from "react";
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    console.log("id", id);
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await response.json();
    return {
        props: { productData: data }
    }
}

const ProductId = (props) => {
    console.log("pp", props);
    return (
        <div className="row">
            this is product page -{props.productData.title}

        </div >
    )
}
// make api call using id
// const ProductId = (context) => {
//     const router = useRouter();
//     const { id } = router.query;
//     console.log('id', id)
//     return (
//         <div className="row">
//             this is product page - {id}

//         </div >
//     )
// }
export default ProductId
