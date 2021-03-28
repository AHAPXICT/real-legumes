import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = ({
    titleText,
    helpText,
    cancelButtonText,
    submitButtonText,
    submitButtonAction,
    mainButtonText,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = () => {
        submitButtonAction();
        handleClose();
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                {mainButtonText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{titleText}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {helpText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {cancelButtonText}
                    </Button>
                    <Button onClick={onSubmit} color="primary" autoFocus>
                        {submitButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AlertDialog;
