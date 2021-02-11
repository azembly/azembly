import React, { useState } from 'react'
import HttpClient from '../HttpClient';


export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")
    const login = async (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        
        try {
        const response = await HttpClient().post("/api/auth/login", data)
        localStorage.setItem("token", response.data.token)
        window.location.href="/"
        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    return (
        <div>
            <form onSubmit={login}>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>Login</button>
                
            </form>
        </div>
    )
}


