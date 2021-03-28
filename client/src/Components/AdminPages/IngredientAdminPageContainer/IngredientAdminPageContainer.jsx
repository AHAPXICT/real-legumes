import React from "react";
import { connect } from "react-redux";
import * as ingredientActions from "../../../Store/Ingredients/actions";
import { INGREDIENT_URL, INGREDIENTS_URL } from "../../../urls";

class IngredientAdminPageContainer extends React.Component {
    componentDidMount() {
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
    }

    render() {
        return <div>ingredients</div>;
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
