import React from "react";
import CategoryAdminPage from "./CategoryAdminPage/CategoryAdminPage";
import { CATEGORY_URL } from "../../urls";
import { setCategories } from "../../Store/Categories/actions";
import { connect } from "react-redux";

class CategoryAdminPageContainer extends React.Component {
    componentDidMount() {
        fetch(CATEGORY_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const categories = data.reverse();
                this.props.set_categories(categories);
            });
    }

    render() {
        return <CategoryAdminPage categories={this.props.category_list} />;
    }
}

const mapState = (state) => {
    return {
        category_list: state.category.categories,
    };
};

const mapDispatch = {
    set_categories: setCategories,
};

const connector = connect(mapState, mapDispatch);

export default connector(CategoryAdminPageContainer);
