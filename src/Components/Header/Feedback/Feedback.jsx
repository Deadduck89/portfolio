import React from 'react';
import classes from './Feedback.module.css';
import Button from "@mui/material/Button";

const Feedback = () => {
    return (
        <div className={classes.feedbackButton}>
            <Button variant="contained">Обратная связь</Button>
        </div>
    )
};

export default Feedback;