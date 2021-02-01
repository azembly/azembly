import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { init } from '../../server/models/User';
import AppContext from './AppContext';
import HttpClient from './HttpClient';

export default function App() {
    const [user, setUser] = useState(null);
    const [initiated, setInitiated] = useState(false);
    useEffect(() => {
        init()
    }, [])
    const init = async () => {
        const {data} = await HttpClient("/api/auth/init")
        setInitiated(true)
        setUser(data.user)
    }
    return (
        <React.Fragment>
            {initiated && (
                <AppContext.Provider value={{user, setUser}}>
                    <Switch>
                        
                    </Switch>
                </AppContext.Provider>
            )}
        </React.Fragment>
    )
}
