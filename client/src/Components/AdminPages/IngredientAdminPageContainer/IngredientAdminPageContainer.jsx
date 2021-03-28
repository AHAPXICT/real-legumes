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

    addIngredient = (name) => {
        const newIngredient = {
            name: name,
        };

        fetch(INGREDIENTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newIngredient),
        }).then((response) => {
            if (response.ok) {
                this.fetchIngredients();
            } else if (response.status === 500) {
                return response.json().then((json) => {
                    const { message } = json;
                    alert(message);
                });
            }
        });
    };

    deleteIngredient = (name) => {
        fetch(`${INGREDIENT_URL}/${name}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                this.fetchIngredients();
            }
        });
    };

    updateIngredient = (new_name, old_name) => {
        const newIngredient = {
            name: new_name,
        };

        fetch(`${INGREDIENT_URL}/${old_name}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newIngredient),
        }).then((response) => {
            if (response.ok) {
                this.fetchIngredients();
            } else if (response.status === 500) {
                return response.json().then((json) => {
                    const { message } = json;
                    alert(message);
                });
            }
        });
    };

    render() {
        return (
            <IngredientAdminPage
                ingredients={this.props.ingredient_list}
                inputState={this.props.inputState}
                updateInputValue={this.props.updateInputValue}
                addIngredient={this.addIngredient}
                deleteIngredient={this.deleteIngredient}
                updateIngredient={this.updateIngredient}
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
