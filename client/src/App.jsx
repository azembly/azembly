import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AppContext from './AppContext';
import HttpClient from './HttpClient';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
    const [user, setUser] = useState(null);
    const [initiated, setInitiated] = useState(false);
    useEffect(() => {
        init()
    }, [])
    const init = async () => {
        const {data} = await HttpClient().get("/api/auth/init")
        setInitiated(true)
        setUser(data.user)
    }
    return (
        <React.Fragment>
            {initiated && (
                <AppContext.Provider value={{user, setUser}}>
                    <Switch>
                        <Route path="/auth/login">
                            <Login />
                        </Route>
                        <Route path="/auth/register">
                            <Register />
                        </Route>
                        <Route path="/" exact>
                            <Homepage />
                        </Route>
                    </Switch>
                </AppContext.Provider>
            )}
        </React.Fragment>
    )
}
