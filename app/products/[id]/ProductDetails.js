import React from 'react'
import Image from 'next/image';

async function getProductDetails(id) {
    try {
        const res = await fetch
            (`http://localhost:3001/api/produit/${id}`);
        const product = await res.json();
        return product;
    }
    catch (error) {
        console.log(error);
    }
}
const ProductDetails = async ({ params }) => {
    const product = await getProductDetails(params.id);
    if (!product || !product?.designation) notFound(); 


    return (
        <div className="container">
            <div className="row mt-5"   >
                <div className="col-5">
                    <img
                        src={product.imageart}
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-6 mt-5">
                    <h2 className="my-4">{product.designation}</h2>
                    <h3 className="my-4">${product.prix}</h3>
                </div>
             

            </div>
        </div>
    )
}
export default ProductDetails 