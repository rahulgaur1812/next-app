import React from "react";
export const getStaticPaths = async () => {
    const response = await fetch(process.env.API_URL);
    const arr = await response.json();
    const paths = arr.map((item) => {
        return {
            params: { year: item.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }

}
export const getStaticProps = async (context) => {
    console.log(context.params);
    const temp = context.params.year
    const response = await fetch(process.env.API_URL + temp);
    const data = await response.json();
    return {
        props: {
            res: data,
            notfound: true
        }
    }
}
const Year = ({ res }) => {
    console.log("res", res);
    return (
        <div className="row">
            <div>
                Title : {res.title}
            </div>
        </div >
    )
}
export default Year
