import React from "react";
import { useRouter } from 'next/router';
import style from '../../styles/Product.module.scss';
export const getServerSideProps = async (context) => {
    const id = context.params.id;
    console.log("id", id);
    const response = await fetch(process.env.API_URL + id);
    const data = await response.json();
    return {
        props: { productData: data }
    }
}

const ProductId = (props) => {
    console.log("pp", props);
    return (
        // <div className="row">
        //     this is product page -{props.productData.title}
        //     <div className="col-lg-4"><img className={style.productImage} src={props.productData.image} /></div>
        //     <div className="col-lg-8">
        //         <div className="row">
        //             <h2>{props.productData.title}</h2>
        //             <div className="h6">{props.productData.description}</div>
        //         </div>
        //     </div>

        // </div >
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.productData.title}</h5>
                <p className="card-text">{props.productData.description}</p>
                <p className="card-text"><small className="text-muted">{props.productData.category}</small></p>
                <p className="card-text"><small className="text-muted">Price: ${props.productData.price}</small></p>
            </div>
            <div className={style.cardImage}>
                <img src={props.productData.image} className={`${style.productImage} card-img-bottom`} alt="..." />
            </div>

        </div>
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
