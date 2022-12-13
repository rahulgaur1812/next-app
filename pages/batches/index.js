import React from "react";
import Link from 'next/link';
export const getStaticProps = async () => {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();
    return {
        props: { productData: data }
    }
}
const Batches = (props) => {
    const { productData } = props
    return (
        <div className="row">
            {productData.map((item, index) => {
                console.log("item", item);
                return (
                    <div className="col-sm-3" key={index}>

                        <Link href={`/batches/${item.id}`}>{item.title}</Link>
                    </div>
                );
            })}

        </div >
    )
}
export default Batches;