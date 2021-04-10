import React from "react";

import s from './style.module.css'
import OneFileUploaderContainer from "../OneFileUploaderContainer";

const FileUploadSection = ({title, multipleFiles}) => {
    return (
        <div className={s.fileUploadSection}>
            <div className={s.title}>
                {title}
            </div>
            <OneFileUploaderContainer multipleFiles={multipleFiles}/>
        </div>)
}

export default FileUploadSection