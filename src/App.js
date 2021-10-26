import React from 'react';
import "@fontsource/open-sans";
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import {Route, Redirect, Switch} from 'react-router';
import ErrorBoundary from "./Components/Common/ErrorBoundary/ErrorBoundary";

const App = () => {
    return (
        <div className={classes.app}>
            <div className={classes.appWrapper}>
                <Header/>
                <Switch>
                    <ErrorBoundary>
                        <Route exact path='/'
                               render={() => <Redirect to='/main'/>}/>
                        <Route path='/main'
                               render={() => <Main/>}/>
                        {/*<Route path='/dialogs'*/}
                        {/*       render={() =>*/}
                        {/*           <DialogsContainer/>}/>*/}
                        {/*<Route path='/login' render={() => <LoginPage/>}/>*/}
                    </ErrorBoundary>
                    <Route exact path='*' render={() => <div>PAGE 404 NOT FOUND</div>}/>
                </Switch>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
