import React, {useState} from "react";
import ReactFileReader from "react-file-reader";
import Button from '@material-ui/core/Button';
import ItemBlock from "./ItemBlock/ItemBlock";
import PropTypes from "prop-types";

import s from "./style.module.css";

const FileUploader = ({multipleFiles, images, setImages, deleteImages }) => {

    const handleFiles = (files) => {
        if (!multipleFiles) {
            const file64 = {
                base64: files.base64,
                name: files.fileList[0].name
            }
            setImages(file64)

        } else {
            for (let i = 0; i < files.base64.length; i++) {
                const file64 = {
                    base64: files.base64[i],
                    name: files.fileList[i].name
                }
                setImages(file64)
            }
        }
    };

    // const upload = () => {
    //     const p = {
    //         name: "test name",
    //         price: 1,
    //         calories: 2,
    //         description: "descr",
    //         count: 3,
    //         weight: 4,
    //         category: "category",
    //         images: [file64],
    //         ingredients: ["i1", "i2"],
    //         is_special: false,
    //     };
    //
    //     console.log("JSON:", JSON.stringify(p));
    //
    //     // debugger;
    //
    //     fetch("http://127.0.0.1:5000/api/products", {
    //         // Your POST endpoint
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(p),
    //     })
    //         .then(
    //             (response) => response.json() // if the response is a JSON object
    //         )
    //         .then(
    //             (success) => console.log(success) // Handle the success response object
    //         )
    //         .catch(
    //             (error) => console.log(error) // Handle the error response object
    //         );
    // };

    const onDelete = (name) => {
        deleteImages(name)
    }

    return (
        <div className={s.base}>
            <ReactFileReader
                base64={true}
                fileTypes={[".jpg"]}
                handleFiles={handleFiles}
                multipleFiles={multipleFiles}
            >
                <Button size={"small"} variant="contained">
                    Вибрати
                </Button>
            </ReactFileReader>
            {
                images.map(file => {
                    return <ItemBlock name={file.name} btnAction={() => onDelete(file.name)}/>
                })
            }

            {/*{*/}
            {/*    images !== [] ? images.map(file => {*/}
            {/*    return <ItemBlock name={file.name} btnAction={onDelete}/>*/}
            {/*}) : null}*/}
        </div>
    );
};

FileUploader.defaultProps = {
    multipleFiles: true
}

FileUploader.propTypes = {
    multipleFiles: PropTypes.bool.isRequired
}

export default FileUploader;
