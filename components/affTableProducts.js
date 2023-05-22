"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AjoutProduit from './ajoutProduit'; 
import UpdateProduct from './updateProduct'; 

const affTableProducts = (props) => {

    const [products, setproducts] = React.useState(props.products)
    const getproducts = async () => {
        const res= await fetch('http://localhost:3001/api/produit')
         const products = await res.json();
         setproducts(products)
         }
        React.useEffect(() => {
         getproducts();
        
         }, [products]); 
        
    const handleDelete = async (id) => {
        if (window.confirm("supprimer le produit O/N")) {
            console.log(id)
            const res = await (await
                fetch('http://localhost:3001/api/produit' + id, {
                    method: "DELETE"
                })).json();
            if (res) {
                const newProducts = products.filter((item) => item.id !== id);
                setproducts(newProducts);

            } else {
                console.log(res);
            }
        }
    }

    const columns = [
        {
            label: "Title",
            name: "designation"
        },
        {
            label: "price",
            name: "prix"
        },
        {
            label: "Quantité en stock",
            name: "qtestock"
        },
        {
            label: "Image",
            name: "imageart",
            options: {
                customBodyRender: (rowdata) => (
                    <img
                        style={{ height: 40, width: 60, borderRadius: '10%' }}
                        src={`${rowdata}`}
                        alt=""
                    />
                )
            }
        },
        {
            name: "id",
            label: "Actions",
            options: {
                customBodyRender: (value) => (
                    <div>
                        <span
                            onClick={() => { }}
                            style={{ cursor: 'pointer' }}
                        >
                            <NoteAltOutlinedIcon color='success' />
                        </span>
                        <span
                            onClick={(e) => handleDelete(value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <DeleteForeverRoundedIcon color='error' />
                        </span>
                    </div>
                )
            }
        }
    ];
    return (
        <>
        <AjoutProduit />

            {products && products?.length > 0 ?

                <MUIDataTable
                    title="Products List"
                    data={products}
                    columns={columns}
                />

                : null}
        </>
    )
}
export default affTableProducts;