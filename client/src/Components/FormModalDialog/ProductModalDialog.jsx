import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
}) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("no");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
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
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={descriptionHelpText}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={countHelpText}
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={priceHelpText}
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={weightHelpText}
                        type="number"
                        fullWidth
                    />
                    <br />
                    <br />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            {is_specialHelpText}
                        </FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="no"
                                control={<Radio />}
                                label="Ні"
                            />
                            <FormControlLabel
                                value="yes"
                                control={<Radio />}
                                label="Tак"
                            />
                        </RadioGroup>
                    </FormControl>
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
