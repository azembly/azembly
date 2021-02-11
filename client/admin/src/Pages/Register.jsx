import React, { useState } from 'react'
import HttpClient from '../HttpClient';


export default function Register() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")
    const register = async (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        
        try {
        const response = await HttpClient().post("/api/auth/register", data)

        window.location.href="/auth/login"
        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    return (
        <div>
            <form onSubmit={register}>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>Login</button>
                
            </form>
        </div>
    )
}


