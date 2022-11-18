import React from "react";
export const getStaticProps = () => {
    return {
        props: { footerstatus: true }
    }
}
const Lab = (props) => {
    return (
        <div>
            <h2>Hi This is lab page.</h2>
        </div>
    )
}
export default Lab