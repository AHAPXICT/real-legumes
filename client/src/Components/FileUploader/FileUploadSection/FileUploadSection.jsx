import React from "react";

import s from './style.module.css'
import FileUploader from "../FileUploader";

const FileUploadSection = ({title, multipleFiles}) => {
    return (
        <div className={s.fileUploadSection}>
            <div className={s.title}>
                {title}
            </div>
            <FileUploader multipleFiles={multipleFiles}/>
        </div>)
}

export default FileUploadSection