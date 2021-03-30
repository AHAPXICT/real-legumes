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
}) => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(false);

    const changeNameInput = (event) => {
        updateInputNameValue(event.target.value);
    };

    const changeDescriptionInput = (event) => {
        updateInputDescriptionValue(event.target.value);
    };

    const changePriceInput = (event) => {
        updateInputPriceValue(Number(event.target.value));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        updateInputNameValue("");
        updateInputDescriptionValue("");
        updateInputPriceValue("");
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
                        id="name"
                        label={countHelpText}
                        type="number"
                        fullWidth
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
                        id="name"
                        label={weightHelpText}
                        type="number"
                        fullWidth
                    />
                    <br />
                    <br />
                    <p>{is_specialHelpText}: </p>
                    <ToggleButton
                        value="check"
                        selected={selected}
                        onChange={() => {
                            setSelected(!selected);
                        }}
                    >
                        <CheckIcon />
                    </ToggleButton>
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
