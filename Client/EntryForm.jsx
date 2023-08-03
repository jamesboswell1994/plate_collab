
import React from 'react'
import Cookies from 'universal-cookie';

// import any subcomponent classes
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import { updateUsername } from './redux/dishUpdateSlice.js'
import CookieChecker from './CookieChecker.jsx';

const EntryForm = () => {
    const cookies = new Cookies()
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const changeHandler = (e) => {
        changeUsername(e.target.value)
        // console.log(username)
    }

    const pwChangeHandler = (e) => {
        changePassword(e.target.value)
        // console.log(username)
    }
    // this component should render a username form, password form, and login button
    // if we fail auth, generate a basic like tooltippy ui to reflect this to user
    // otherwise, redirect to a feed page
    // const navigate = useNavigate()
    const nav = useNavigate()
    const Dispatch = useDispatch()
    const navigateToFeed = () => {
        Dispatch(updateUsername(username))
        axios.post('/login' , {username, password}).then((res) =>{
            try{
            if (res.status === 200) {
                cookies.set('username' , username)
                nav('/feed')
            }
        }
        catch{
                alert('Bad user / pw combo')
        }
        })

        // location.href = ('https://developers.google.com/identity/sign-in/web/sign-in')
    }
    const navigateToAccountCreation = () => {
        nav("/create")
        // location.href = ('https://developers.google.com/identity/sign-in/web/sign-in')
    }

    return (
        <div className = 'loginForm'>
        <CookieChecker></CookieChecker>
            <div className = 'loginFormContainer'>
            <img src="https://i.ibb.co/1MyQpL1/Screenshot-2023-08-03-at-1-16-21-PM.png" alt="Screenshot-2023-08-03-at-1-16-21-PM" border="0" width="300px" height = "300px" margin = "10px"></img>            
            <form>
                <label htmlFor = "username">Username:</label>
                <input type = "text" name = "username" id = "username" required onChange = {changeHandler}></input>
            </form>
            <form>
                <label htmlFor = "password">Password:</label>
                <input type = "password" name = "password" id = "password" required onChange = {pwChangeHandler}></input>
            </form>
            <button onClick = {navigateToFeed}>Log in</button>
            <button onClick = {navigateToAccountCreation}>Create a new account</button>
            </div>
        </div>
    )
}
export default EntryForm


            // <Routes>
            //     <Route path = "/feed"></Route>
            //     <Route path = "/"></Route>
            // </Routes>