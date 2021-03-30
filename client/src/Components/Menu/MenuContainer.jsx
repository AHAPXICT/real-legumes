import React from "react";
import { PRODUCTS_URL } from "../../urls";
import Menu from "./Menu";
import * as productActions from "../../Store/Products/actions";
import { connect } from "react-redux";

class MenuContainer extends React.Component {
    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = () => {
        fetch(PRODUCTS_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const product_list = data.products.reverse();
                this.props.setProducts(product_list);
            });
    };

    render() {
        return (
            <Menu
                products={this.props.product_list}
                inputNameState={this.props.inputNameState}
                updateInputNameValue={this.props.updateInputNameValue}
                inputDescriptionState={this.props.inputDescriptionState}
                updateInputDescriptionValue={
                    this.props.updateInputDescriptionValue
                }
                inputPriceState={this.props.inputPriceState}
                updateInputPriceValue={this.props.updateInputPriceValue}
                inputCaloriesState={this.props.inputCaloriesState}
                updateInputCaloriesValue={this.props.updateInputCaloriesValue}
                inputCountState={this.props.inputCountState}
                updateInputCountValue={this.props.updateInputCountValue}
                inputWeigthState={this.props.inputWeigthState}
                updateInputWeigthValue={this.props.updateInputWeigthValue}
            />
        );
    }
}

const mapState = (state) => {
    return {
        product_list: state.product.products,
        inputNameState: state.product.input_name_field,
        inputDescriptionState: state.product.input_description_field,
        inputPriceState: state.product.input_price_field,
        inputCaloriesState: state.product.input_calories_field,
        inputCountState: state.product.input_count_field,
        inputWeigthState: state.product.input_weight_field,
    };
};

const mapDispatch = {
    setProducts: productActions.setProducts,
    updateInputNameValue: productActions.updateInputNameValue,
    updateInputDescriptionValue: productActions.updateInputDescriptionValue,
    updateInputPriceValue: productActions.updateInputPriceValue,
    updateInputCaloriesValue: productActions.updateInputCaloriesValue,
    updateInputCountValue: productActions.updateInputCountValue,
    updateInputWeigthValue: productActions.updateInputWeigthValue,
};

const connector = connect(mapState, mapDispatch);

export default connector(MenuContainer);
