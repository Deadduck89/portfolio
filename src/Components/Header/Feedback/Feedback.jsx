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

    const [email, setEmail] = React.useState( '' );
    const [name, setName] = React.useState( '' );
    const [text, setText] = React.useState( '');

    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onNameChange = (e) => {
        setName(e.currentTarget.value);
    };

    const onTextChange = (e) => {
        setText(e.currentTarget.value);
    };

    const feedbackObject = {
        email: email,
        name: name,
        text: text
    };

    const feedbackMessage = JSON.stringify(feedbackObject)

    const handleSubmit = () => {
        alert(feedbackMessage);
        handleClose();
    }

    return (<div className={classes.feedbackButton}>
            <div>
                <Button variant="contained" onClick={handleClickOpen}>Обратная связь</Button>
            </div>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Отправить сообщение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Вы можете отправить мне сообщение, мне будет приятен ваш отзыв или предложения (в том
                            числе о работе, конечно)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Ваше имя"
                            type="text"
                            onChange={onNameChange}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Ваш Email"
                            type="email"
                            onChange={onEmailChange}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="text"
                            label="Ваше сообщение"
                            type="text"
                            onChange={onTextChange}
                            multiline
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отмена</Button>
                        <Button onClick={handleSubmit}>Отправить сообщение</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Feedback;