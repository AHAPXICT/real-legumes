import React, { useState } from "react";
import ReactFileReader from "react-file-reader";

import s from "./style.module.css";

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [file64, setFile64] = useState();

    const handleFiles = (files) => {
        // console.log(files.base64);
        var new_file = files.base64;
        setFile64(new_file);
        console.log(file64);
    };

    const getBase64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var result = reader.result;

            return "la la";
        };
    };

    const upload = () => {
        // var newObject = getBase64(fileObject);

        // console.log(newObject);

        const p = {
            name: "test name",
            price: 1,
            calories: 2,
            description: "descr",
            count: 3,
            weight: 4,
            category: "category",
            image: file64,
            ingredients: ["i1", "i2"],
            is_special: false,
        };

        // console.log("JSON:", JSON.stringify(p));

        // debugger;

        fetch("http://127.0.0.1:5000/api/products", {
            // Your POST endpoint
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(p),
        })
            .then(
                (response) => response.json() // if the response is a JSON object
            )
            .then(
                (success) => console.log(success) // Handle the success response object
            )
            .catch(
                (error) => console.log(error) // Handle the error response object
            );
    };

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);

        // upload(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        upload();
        // console.log(selectedFile);
    };

    return (
        <div className={s.main}>
            <div className="container">
                {/* <input type="file" name="file" onChange={changeHandler} />
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div> */}
                <ReactFileReader
                    base64={true}
                    fileTypes={[".jpg"]}
                    handleFiles={handleFiles}
                >
                    <button>Upload</button>
                </ReactFileReader>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    );
};

export default FileUploader;
