import ErrorBoundary from "../Common/ErrorBoundary/ErrorBoundary";
import {Redirect, Route, Switch} from "react-router";
import MainPage from "./MainPage/MainPage";
import React from "react";
import classes from './Content.module.css'
import ProfilePage from "./ProfilePage/ProfilePage";
import ContactsPage from "./ContactsPage/ContactsPage";
import BlogPageContainer from "./BlogPage/BlogPageContainer";


const Content = (props) => {

    return(
        <div className={classes.contentWrapper}>
            <Switch>
                <ErrorBoundary>
                    <Route exact path='/'
                           render={() => <Redirect to='/main'/>}/>
                    <Route path='/main'
                           render={() => <MainPage />}/>
                    <Route path='/profile'
                           render={() =>
                               <ProfilePage/>}/>
                    <Route path='/blog/:id?' render={() => <BlogPageContainer/>}/>
                    <Route path='/contacts' render={() => <ContactsPage/>}/>
                </ErrorBoundary>
                <Route exact path='*' render={() => <div>PAGE 404 NOT FOUND</div>}/>
            </Switch>
        </div>
    )
}

export default Content;