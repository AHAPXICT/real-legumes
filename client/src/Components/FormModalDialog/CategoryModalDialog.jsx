import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const CategoryModalDialog = ({
    titleText,
    helpText,
    fullWidth,
    btnText,
    fieldText,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open form dialog
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Закрити
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        {btnText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CategoryModalDialog;
