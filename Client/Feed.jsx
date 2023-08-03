
import React from 'react'
// import any subcomponent classes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishAdder from './DishAdder.jsx'
import DishDisplay from './DishDisplay.jsx'
import RecordTable from './RecordTable.jsx'
import { UseSelector } from 'react-redux/es/hooks/useSelector.js'
import store from './redux/store.js'
import { useState } from 'react'
const Feed = () =>{
    let header = 'My Dishlist'
    const [refresher, setRefresher] = useState(0)

    console.log(refresher + " is the refresher val")

    const username = useSelector((state) => (state.dishUpdate.username))
    console.log(username)
    if (username === 'Katherine') header = 'Hey beautiful, welcome to dishlist'
    return (
        <div>
            <h1>{header}</h1>
            <RecordTable></RecordTable>
            <DishAdder refreshVal = {refresher} refreshFunction = {setRefresher}></DishAdder>
        </div>
    )
}

export default Feed


/// Feed will need to take user input, save that data to db, then display
// recent restaurants
// recent entrees
// full list

