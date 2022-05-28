import React from 'react'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './JournalScreen';

import { BrowserRouter as Router,Redirect,
    Switch, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route 
                path='/auth'
                component={ AuthRouter }
            />
            <Route 
                exact
                path='/'
                component={ JournalScreen }
            />
            <Redirect to='/auth/register' />
        </Switch>

    </Router>
  )
}
