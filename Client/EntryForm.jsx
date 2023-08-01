
import React from 'react'
// import any subcomponent classes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'

const EntryForm = () => {
    // this component should render a username form, password form, and login button
    // if we fail auth, generate a basic like tooltippy ui to reflect this to user
    // otherwise, redirect to a feed page
    // const navigate = useNavigate()
    const navigateToFeed = () => {
        console.log("reached axios portion")
        axios.get('/feed')
        .then((response =>{
            console.log(response.data)
        }))
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className = 'loginForm'>
            <h1>Welcome to Plate Collab</h1>
            <form>
                <label for = "username">Username</label>
                <input type = "text" name = "username" id = "username" required></input>
            </form>
            <form>
                <label for = "password">Password</label>
                <input type = "text" name = "password" id = "password" required></input>
            </form>
            <button onClick = {navigateToFeed}>Log in</button>

        </div>
    )
}
export default EntryForm


            // <Routes>
            //     <Route path = "/feed"></Route>
            //     <Route path = "/"></Route>
            // </Routes>