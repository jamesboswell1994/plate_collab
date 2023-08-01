



import React from 'react'
// import any subcomponent classes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'
import DishSubmitButton from './DishSubmitButton.jsx'
import { useState } from 'react'


const DishAdder = () =>{
    
    const[adderData , setAdderData] = useState({})

    return (
        <div className = "dishAdder">
        <h2>Add a recent dish</h2>
        <DishForm label = "Restaurant" setState = {setAdderData}></DishForm>
        <DishForm label = "Name"></DishForm>
        <DishForm label = "Grade"></DishForm>
        <DishForm label = "Notes"></DishForm>
        <DishSubmitButton></DishSubmitButton>
        </div>
    )
    // Restaurant
    // Dish name
    // Grade
    // Notes
    // Add dish button


}

export default DishAdder