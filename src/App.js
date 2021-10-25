import React from 'react';
import "@fontsource/open-sans";
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

const App = () => {
    return (
        <div className={classes.app}>
            <div className={classes.appWrapper}>
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<Preloader/>}>
                            <Route exact path='/'
                                   render={() => <Redirect to='/profile'/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs'
                                   render={() =>
                                       <DialogsContainer/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                        </Suspense>
                    </ErrorBoundary>
                    <Route exact path='*' render={() => <div>PAGE 404 NOT FOUND</div>}/>
                </Switch>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
