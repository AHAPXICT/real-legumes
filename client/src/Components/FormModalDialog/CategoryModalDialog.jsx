import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        borderColor: "#000",
    },
    label: {
        fontFamily: "Lobster, cursive",
        color: "#000",
    },
});

const CategoryModalDialog = ({
    titleText,
    helpText,
    fullWidth,
    btnText,
    fieldText,
    mainBtnText,
    updateInputValue,
    inputState,
}) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        updateInputValue("");
        setOpen(false);
    };

    const changeInput = (event) => {
        updateInputValue(event.target.value);
    };

    const clearInput = () => {
        updateInputValue("");
    };

    return (
        <div>
            <Button
                className="text__style"
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                classes={{ root: classes.root, label: classes.label }}
                size="large"
            >
                {mainBtnText}
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
                        label={`${fieldText}`}
                        type="text"
                        fullWidth
                        value={inputState}
                        onChange={changeInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        classes={{ root: classes.root, label: classes.label }}
                        size="large"
                        onClick={handleClose}
                    >
                        Закрити
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        classes={{ root: classes.root, label: classes.label }}
                        size="large"
                    >
                        {btnText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CategoryModalDialog;
