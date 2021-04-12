import React from 'react'
import {connect} from "react-redux";
import * as productActions from "../../Store/Products/actions";
import FileUploader from "./FileUploader";

class OneFileUploaderContainer extends React.Component {


    render() {
        return <FileUploader {...this.props} />
    }

}

const mapState = (state) => {
    return {
        images: state.product.product_title_image
    }
}

const mapDispatch = {
    setImages: productActions.setTitleImg
}

const connector = connect(mapState, mapDispatch);

export default connector(OneFileUploaderContainer)
