import React from 'react'
import {connect} from "react-redux";
import * as productActions from "../../Store/Products/actions";
import FileUploader from "./FileUploader";

class ManyFileUploaderContainer extends React.Component {


    render() {
        return <FileUploader {...this.props} />
    }

}

const mapState = (state) => {
    return {
        images: state.product.product_additional_images
    }
}

const mapDispatch = {
    setImages: productActions.setAdditionalImages,
    deleteImages: productActions.deleteAdditionalImage,
}

const connector = connect(mapState, mapDispatch);

export default connector(ManyFileUploaderContainer)
