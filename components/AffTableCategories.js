"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
const affTableCategories = ({ categories }) => {
    const handleDelete = (id) => {
        if (window.confirm("supprimer la catégorie O/N")) {
            console.log(id)
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