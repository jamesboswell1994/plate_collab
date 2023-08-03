
import React from 'react'
// import any subcomponent classes
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import { updateUsername } from './redux/dishUpdateSlice.js'

const EntryForm = () => {

    const [username, changeUsername] = useState('')

    const changeHandler = (e) => {
        changeUsername(e.target.value)
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
        nav("/feed")
        // location.href = ('https://developers.google.com/identity/sign-in/web/sign-in')
    }
    const navigateToAccountCreation = () => {
        nav("/create")
        // location.href = ('https://developers.google.com/identity/sign-in/web/sign-in')
    }

    return (
        <div className = 'loginForm'>
            <div className = 'loginFormContainer'>
            <h1>Welcome to </h1>
            <form>
                <label htmlFor = "username">Username</label>
                <input type = "text" name = "username" id = "username" required onChange = {changeHandler}></input>
            </form>
            <form>
                <label htmlFor = "password">Password</label>
                <input type = "password" name = "password" id = "password" required></input>
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