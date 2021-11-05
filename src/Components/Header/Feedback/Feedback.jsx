import React from 'react';
import classes from './Feedback.module.css';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

const Feedback = () => {

    const [open, setOpen] = React.useState( false );

    const handleClickOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    };

    return (<div className={classes.feedbackButton}>
            <div>
                <Button variant="contained" onClick={handleClickOpen}>Обратная связь</Button>
            </div>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Отправить сообщение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Здесь вы можете отправить мне сообщение, мне будет приятен ваш отзыв или предложения (в том
                            числе о работе, конечно)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Ваше имя"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Ваш Email"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="text"
                            label="Ваше сообщение"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отмена</Button>
                        <Button onClick={handleClose}>Отправить сообщение</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Feedback;