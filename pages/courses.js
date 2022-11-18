import React from "react";
export const getStaticProps = async () => {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();
    return {
        props: { productData: data }
    }
}
const Courses = (props) => {

    const productData = props.productData;
    //console.log("props", productData);
    return (
        <div>
            <h2>Hi This is Courses page.</h2>
            {productData.map((item, index) => {
                return (
                    <div className="advantage" key={index}>
                        {item.title}
                    </div>
                );
            })}

        </div>
    )
}
export default Courses
