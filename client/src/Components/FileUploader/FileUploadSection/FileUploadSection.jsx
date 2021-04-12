import React from "react";

import s from './style.module.css'
import OneFileUploaderContainer from "../OneFileUploaderContainer";
import ManyFileUploaderContainer from '../ManyFileUploaderContainer'

const FileUploadSection = ({title, multipleFiles}) => {
    return (
        <div className={s.fileUploadSection}>
            <div className={s.title}>
                {title}
            </div>
            { multipleFiles === false ?
                <OneFileUploaderContainer multipleFiles={multipleFiles}/> :
                <ManyFileUploaderContainer multipleFiles={multipleFiles} />
            }

        </div>)
}

export default FileUploadSection