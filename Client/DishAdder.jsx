



import React from 'react'
// import any subcomponent classes
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'
import DishSubmitButton from './DishSubmitButton.jsx'
import { useState } from 'react'
import { updateGrade } from './redux/dishUpdateSlice.js'


const DishAdder = () =>{
    
    const Dispatch = useDispatch()
    const[adderData , setAdderData] = useState({})
    const dropdownChangeHandler = (e) =>{
        const inputVal = e.target.value
            Dispatch(updateGrade(inputVal))
            
    }
    return (
        <div className = "dishAdder">
        <h2>Add a recent dish</h2>
        <DishForm label = "Restaurant" setState = {setAdderData}></DishForm>
        <DishForm label = "Name"></DishForm>
        <label for="cars">Grade</label>
        <select name="cars" id="cars" onChange = {dropdownChangeHandler}>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="F">F</option>
        </select>
        <DishForm label = "Category"></DishForm>
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