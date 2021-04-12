import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import CategoryDropdownMenu from "../Menu/CategoryDropdownMenu/CategoryDropdownMenu";
import CheckboxList from "../Menu/IngredientsSelectionList/IngredientsSelectionList"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {IconButton} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import FileUploader from "../FileUploader/FileUploader";
import FileUploadSection from "../FileUploader/FileUploadSection/FileUploadSection";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const ProductModalDialog = ({
                                titleText,
                                helpText,
                                fullWidth,
                                nameHelpText,
                                countHelpText,
                                descriptionHelpText,
                                is_specialHelpText,
                                priceHelpText,
                                weightHelpText,
                                inputNameState,
                                updateInputNameValue,
                                inputDescriptionState,
                                updateInputDescriptionValue,
                                inputPriceState,
                                updateInputPriceValue,
                                inputCaloriesState,
                                updateInputCaloriesValue,
                                inputCountState,
                                updateInputCountValue,
                                inputWeigthState,
                                updateInputWeigthValue,
                                caliriesHelpText,
                                isSpecialState,
                                updateIsSpecialValue,
                                categories,
                                inputCategoryState,
                                updateCategoryValue,
                                ingredients,
                                addIngredient,
                                deleteIngredient,
                                clearIngredients,
                            }) => {
    const [open, setOpen] = React.useState(false);
    const [openIngredientList, setOpenIngredientList] = React.useState(false)

    const classes = useStyles();

    const changeNameInput = (event) => {
        updateInputNameValue(event.target.value);
    };

    const changeDescriptionInput = (event) => {
        updateInputDescriptionValue(event.target.value);
    };

    const changePriceInput = (event) => {
        updateInputPriceValue(Number(event.target.value));
    };

    const changeCaloriesInput = (event) => {
        updateInputCaloriesValue(Number(event.target.value));
    };

    const changeCountInput = (event) => {
        updateInputCountValue(Number(event.target.value));
    };

    const changeWeigthInput = (event) => {
        updateInputWeigthValue(Number(event.target.value));
    };

    const changeIsSpecialInput = (value) => {
        updateIsSpecialValue(value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        updateInputNameValue("");
        updateInputDescriptionValue("");
        updateInputPriceValue(0);
        updateInputCaloriesValue(0);
        updateInputCountValue(0);
        updateInputWeigthValue(0);
        updateIsSpecialValue(false);
        updateCategoryValue('');
        clearIngredients();
        setOpen(false);
    };

    return (
        <div>
            <Button
                className="text__style"
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                size="large"
            >
                Open dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={fullWidth}
            >
                <DialogTitle id="form-dialog-title">{titleText}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{helpText}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={nameHelpText}
                        type="text"
                        fullWidth
                        value={inputNameState}
                        onChange={changeNameInput}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label={descriptionHelpText}
                        value={inputDescriptionState}
                        type="text"
                        fullWidth
                        onChange={changeDescriptionInput}
                    />
                    <TextField
                        margin="dense"
                        id="count"
                        label={countHelpText}
                        type="number"
                        fullWidth
                        value={inputCountState}
                        onChange={changeCountInput}
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        label={priceHelpText}
                        type="number"
                        value={inputPriceState}
                        fullWidth
                        onChange={changePriceInput}
                    />
                    <TextField
                        margin="dense"
                        id="weight"
                        label={weightHelpText}
                        type="number"
                        fullWidth
                        value={inputWeigthState}
                        onChange={changeWeigthInput}
                    />
                    <TextField
                        margin="dense"
                        id="caliroes"
                        label={caliriesHelpText}
                        type="number"
                        fullWidth
                        value={inputCaloriesState}
                        onChange={changeCaloriesInput}
                    />
                    <br/>
                    <br/>
                    <p>{is_specialHelpText}: </p>
                    <ToggleButton
                        value="check"
                        selected={isSpecialState}
                        onChange={() => {
                            changeIsSpecialInput(!isSpecialState);
                        }}
                    >
                        <CheckIcon/>
                    </ToggleButton>
                    <CategoryDropdownMenu
                        categories={categories}
                        inputCategoryState={inputCategoryState}
                        updateCategoryValue={updateCategoryValue}
                    />
                    <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        size="lagre"
                        onClick={() => setOpenIngredientList(!openIngredientList)}
                    >
                        <ArrowDownwardIcon fontSize="inherit"/>
                    </IconButton>
                    Інгредієнти
                    {openIngredientList ?
                        <CheckboxList
                            ingredients={ingredients}
                            addIngredient={addIngredient}
                            deleteIngredient={deleteIngredient}
                        /> : null}
                    <br/>
                    <FileUploadSection
                        title={'Виберіть титульне зображення:'}
                        multipleFiles={false} />
                    {/*<FileUploadSection title={'Виберіть додаткові зображення (опціонально):'} multipleFiles={true} />*/}
                </DialogContent>
                <DialogActions>
                    <Button color="primary" size="large" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button color="primary" size="large">
                        btnText
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProductModalDialog;
