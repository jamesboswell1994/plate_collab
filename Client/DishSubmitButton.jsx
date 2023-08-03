





import React from 'react'
// import any subcomponent classes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'


const DishSubmitButton = props =>{
    const stateObj = useSelector(state => state.dishUpdate)
    const nav = useNavigate()
    let theData = {}
    const clickHandler = ()=> {
        console.log(stateObj)
        axios.post('/feed', stateObj).then(() =>{nav('/')})
    }
    return (
        <button onClick = {() =>{
            clickHandler()}
        }>Submit</button>
    )
    // Restaurant
    // Dish name
    // Grade
    // Notes
    // Add dish button


}

export default DishSubmitButton