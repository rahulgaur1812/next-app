import React from "react";
import Link from 'next/link';
import styles from '../../styles/Product.module.css'
export const getStaticProps = async () => {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();
    return {
        props: { productData: data }
    }
}
const Batches = (props) => {
    const productData = props.productData;
    //console.log("props", productData);
    return (
        <div className="row">
            {productData.map((item, index) => {
                console.log("item", item);
                return (
                    <div className="col-sm-3" key={index}>
                        <Link href={`/products/${item.id}`}>

                            <div className={`card ${styles.card} `}>
                                <div className={styles.imagecontainer}>
                                    <img className={styles.cardimgtop} src={item.image} alt="Card image cap" />
                                </div>

                                <div className="card-body">
                                    <h5 className={`card-title ${styles.title}`}>{item.title}</h5>
                                    <p className="card-text"><small className="text-muted">Category: {item.category}</small></p>
                                    <p className={`card-text ${styles.description}`}>{item.description}</p>
                                    <p className="card-text"><small className="text-muted">Price: Rs {item.price}</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>
                );
            })}

        </div >
    )
}
export default Batches;