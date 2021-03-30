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
        return <Menu products={this.props.product_list} />;
    }
}

const mapState = (state) => {
    return {
        product_list: state.product.products,
    };
};

const mapDispatch = {
    setProducts: productActions.setProducts,
};

const connector = connect(mapState, mapDispatch);

export default connector(MenuContainer);
