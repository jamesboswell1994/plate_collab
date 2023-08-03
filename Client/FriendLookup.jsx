





import React from 'react'
import { ReactDOM } from 'react'
// import any subcomponent classes
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'
import DishSubmitButton from './DishSubmitButton.jsx'
import { useState } from 'react'
import { updateGrade } from './redux/dishUpdateSlice.js'
import { useEffect } from 'react'
import RecordTable from './RecordTable.jsx'


const FriendLookup = props =>{
    
    const Dispatch = useDispatch()

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const usernameChangeHandler = (e) =>{
        setUsername(e.target.value)
    }

    const pwChangeHandler = (e) =>{
        setUsername(e.target.value)
    }


    // on click the following need to happen:
    // We make a get request to get the user's reviews
    // we populate that data into a table component that gets attached to the parent column
    // we get rid of the current inputs and button
    let isReady=false
    async function clickHandler() {
        const friendDisplay = document.getElementById('friendInfo')

        const container = document.createElement('div');

        const friendsTable = <RecordTable username = {username}></RecordTable>
        setTimeout(() => {
            isReady = true
        }, 2000);
      
        ReactDOM.render(friendsTable, container);
        friendDisplay.appendChild(container)
    }
    // const [appUsers, setAppUsers] = useState([])
    // useEffect(() =>{
    //     async function getAppUsers(){
    //         const userObj = axios.get('/users')
    //         let usernameArray = []
    //         for (let obj of userObj){
    //             usernameArray.push(obj.username)
    //         }
    //     }
    //     setAppUsers(getAppUsers())
    // })

    // const userSelector = document.getElementById('appUsers')

    // for (let username of appUsers){
    //     const user = document.createElement('user');
    //     user.text = username;
    //     selectElement.appendChild(user);
    // }

    return (
    <div className = "friendInfo" id = "friendInfo">
        <h2>Friend's info</h2>
        <form>
                <label htmlFor = "username">Username</label>
                <input type = "text" name = "username" id = "username" required onChange = {usernameChangeHandler}></input>
            </form>
            <button onClick ={clickHandler}>Pair with user</button>
    </div>
    )
}

export default FriendLookup