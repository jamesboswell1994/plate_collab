
import React from 'react'
// import any subcomponent classes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishAdder from './DishAdder.jsx'
import DishDisplay from './DishDisplay.jsx'
import RecordTable from './RecordTable.jsx'

const Feed = () =>{
    return (
        <div>
            <h1>My Feed</h1>
            <DishAdder></DishAdder>
            <DishDisplay></DishDisplay>
            <RecordTable></RecordTable>
        </div>
    )
}

export default Feed


/// Feed will need to take user input, save that data to db, then display
// recent restaurants
// recent entrees
// full list

