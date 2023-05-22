"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

import AjoutCategorie from './ajoutCategories';

import UpdateCategory from './updateCategory'; 

const affTableCategories = (props) => {
    const [categories, setCategories] = React.useState(props.categories)

    //Pour actualiser la liste
    const getCategories = async () => {
        const res = await fetch('http://localhost:3001/api/categories?timestamp=${new Date().getTime()}')
        const categories = await res.json();
        setCategories(categories)
    }
    React.useEffect(() => {
        getCategories();

    }, [categories]);

    const handleDelete = async (id) => {
        if (window.confirm("supprimer la catégorie O/N")) {
            console.log(id)
            const res = await (await
                fetch('http://localhost:3001/api/categories' + id, {
                    method: "DELETE"
                })).json();
            if (res) {
                const newCategories = categories.filter((item) => item.id !== id);
                setCategories(newCategories);

            } else {
                console.log(res);
            }
        }
    }
    const columns = [
        {
            label: "Name",
            name: "nomcategorie"
        },
        {
            label: "Image",
            name: "imagecategorie",
            options: {
                customBodyRender: (rowdata) => (
                    <img
                        style={{ height: 50, width: 60, borderRadius: '10%' }}
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
                customBodyRender: (value,tableMeta) => (
                    <div>
                   
                    <UpdateCategory categories={categories[tableMeta.rowIndex]}/>
                        {/* <span
                            onClick={() => { }}
                            style={{ cursor: 'pointer' }}
                        >
                            <NoteAltOutlinedIcon color='success' />
                        </span> */}
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
            <AjoutCategorie />
            {categories && categories?.length > 0 ?

                <MUIDataTable
                    title="Categories List"
                    data={categories}
                    columns={columns}
                />

                : null}
        </>
    )
}
export default affTableCategories;