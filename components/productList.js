import React from 'react';
import Link from 'next/link';
const ProductList = async ({ products }) => {

    return (
    <>
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
                <div className="row">
                    {products?.map((product) => (
                        <div
                            key={product?.id}
                            className="col-md-3 mb-4 mb-lg-0 pt-4"
                        >
                            <div className="card h-100">
                                <img
                                   src={product.imageart}
                                   className="card-img-top p-5"
                                   
                                   alt={product.designation}

                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">{product.idcat}</p>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3" >
                                        <Link href={`/products/${product._id}`}>
                                            <h5 className="mb-0">{product.designation}</h5>
                                        </Link>
                                        <h5 className="text-dark mb-0">${product.prix}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
export default ProductList;