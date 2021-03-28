import React from "react";
import { connect } from "react-redux";
import * as ingredientActions from "../../../Store/Ingredients/actions";
import { INGREDIENT_URL, INGREDIENTS_URL } from "../../../urls";
import IngredientAdminPage from "./IngredientAdminPage/IngredientAdminPage";

class IngredientAdminPageContainer extends React.Component {
    componentDidMount() {
        this.fetchIngredients();
    }

    fetchIngredients = () => {
        fetch(INGREDIENTS_URL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                const ingredients = data.reverse();
                this.props.setIngredients(ingredients);
            });
    };

    render() {
        return (
            <IngredientAdminPage
                ingredients={this.props.ingredient_list}
                inputState={this.props.inputState}
                updateInputValue={this.props.updateInputValue}
            />
        );
    }
}

const mapState = (state) => {
    return {
        ingredient_list: state.ingredient.ingredients,
        inputState: state.ingredient.input_name_field,
    };
};
const mapDispatch = {
    setIngredients: ingredientActions.setIngredients,
    updateInputValue: ingredientActions.updateInputValue,
};

const connector = connect(mapState, mapDispatch);

export default connector(IngredientAdminPageContainer);
