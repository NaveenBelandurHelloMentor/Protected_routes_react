import React from 'react'
import {useState} from 'react'

const Login = () =>{
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    return (
        <>
        <form>
            <label>Username</label>
            <input type='text' />
        </form>
        </>
    )
}


export default Login