import React from "react";
import CategoryAdminPage from "./CategoryAdminPage/CategoryAdminPage";
import { CATEGORY_URL, CATEGORIES_URL } from "../../urls";
import * as categoryActions from "../../Store/Categories/actions";
import { connect } from "react-redux";

class CategoryAdminPageContainer extends React.Component {
    componentDidMount() {
        this.fetchCategories();
    }

    fetchCategories = () => {
        fetch(CATEGORIES_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const categories = data.reverse();
                this.props.setCategories(categories);
            });
    };

    addCategory = (name, ...props) => {
        const newCategory = {
            name: name,
        };

        fetch(CATEGORIES_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
        }).then((response) => {
            if (response.ok) {
                this.fetchCategories();
            }
        });
    };

    deleteCategory = (name) => {
        fetch(`${CATEGORY_URL}/${name}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                this.fetchCategories();
            }
        });
    };

    updateCategory = (new_name, old_name) => {
        const newCategory = {
            name: new_name,
        };

        fetch(`${CATEGORY_URL}/${old_name}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
        }).then((response) => {
            if (response.ok) {
                this.fetchCategories();
            }
        });
    };

    render() {
        return (
            <CategoryAdminPage
                categories={this.props.category_list}
                updateInputValue={this.props.updateInputValue}
                inputState={this.props.inputState}
                addCategory={this.addCategory}
                deleteCategory={this.deleteCategory}
                updateCategory={this.updateCategory}
            />
        );
    }
}

const mapState = (state) => {
    return {
        category_list: state.category.categories,
        inputState: state.category.input_name_field,
    };
};

const mapDispatch = {
    setCategories: categoryActions.setCategories,
    updateInputValue: categoryActions.updateInputValue,
};

const connector = connect(mapState, mapDispatch);

export default connector(CategoryAdminPageContainer);
