import React from 'react';
import classes from './Feedback.module.css';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import emailjs from "emailjs-com";
import apiKey from "../../../emailcontrol/emailkeys";

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
    const [text, setText] = React.useState( '' );
    const [successAlert, setSuccessAlert] = React.useState( false );

    const onEmailChange = (e) => {
        setEmail( e.currentTarget.value );
    };

    const onNameChange = (e) => {
        setName( e.currentTarget.value );
    };

    const onTextChange = (e) => {
        setText( e.currentTarget.value );
    };

    const feedbackObject = {
        email: email,
        name: name,
        text: text
    };

    const feedbackMessage = JSON.stringify( feedbackObject )

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.send(`service_1qdtkbi`, apiKey.TEMPLATE_ID, {
            name: JSON.stringify(name),
            email: JSON.stringify(email),
            text: JSON.stringify(text)
        }, apiKey.USER_ID)
            .then((result) => {
            setSuccessAlert( true );
            handleClose();
            },
                (error) => {
                    alert("An error occurred, Please try again");
                });

    };

    return (<div className={classes.feedbackButton}>
            <div>
                <Button variant="contained" onClick={handleClickOpen}>Обратная связь</Button>
            </div>
            {successAlert === true ?
                <div className={classes.alert}>
                    <Alert onClose={() => {
                        setSuccessAlert( false )
                    }} severity="success">Спасибо за ваш отзыв!</Alert>
                </div> : <div></div>}
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Отправить сообщение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Вы можете отправить мне сообщение, мне будет приятен ваш отзыв или предложения (заполните все поля, пожалуйста)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Ваше имя"
                            type="text"
                            value={name}
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
                            value={email}
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
                            value={text}
                            onChange={onTextChange}
                            multiline
                            fullWidth
                            helperText="Максимум - 250 символов"
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отмена</Button>
                        {name === '' || email === '' || text === '' || name.length > 20 || email.length > 30 || text.length > 250 ?
                            <Button disabled>Отправить сообщение</Button> :
                            <Button onClick={handleSubmit}>Отправить сообщение</Button>}
                    </DialogActions>

                </Dialog>
            </div>
        </div>
    )
}

export default Feedback;