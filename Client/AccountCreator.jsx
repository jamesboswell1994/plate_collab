





import React from 'react'
// import any subcomponent classes
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'
import DishSubmitButton from './DishSubmitButton.jsx'
import { useState } from 'react'
import { updateUsername } from './redux/dishUpdateSlice.js'


const AccountCreator = ()=>{
    const [userInfo, setUserInfo] = useState({username: '' , password : ''})
    const nav = useNavigate()
    const Dispatch = useDispatch()
    const clickHandler = () =>{
        if (userInfo['username'] === '' || userInfo['password'] === '') {
            alert("Both username and password required")
            return
        }
        axios.post('/create' , userInfo).then(() => {
            console.log("Got through the post in the axios")
            Dispatch(updateUsername(userInfo.username))
            nav('/feed')
        
        }).catch((err) => {
            if (err.response.status ===504) alert("Username already exists. Please enter a new username, or log in from the home")
        })
    }

    const storeUsername = (e) =>{
        const {password} = userInfo
        setUserInfo({username : e.target.value, password: password})
    }
    const storePassword = (e) =>{
        const {username} = userInfo
        setUserInfo({username : username, password: e.target.value})
    }

    return (
    <div>
        <h1>Account page</h1>
        <div className = "DishForm">
        <form>
        <fieldset>
            <label>
                <p>Create username</p>
                <input name = "username" onChange={storeUsername}/>
            </label>
        </fieldset>
        <fieldset>
        <label>
            <p>Create Password</p>
            <input name = "password" onChange={storePassword}/>
        </label>
    </fieldset>
        </form>
        </div>    
        <button onClick={clickHandler}>Go to my feed</button>
    </div>

    )
}

export default AccountCreator