



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


const DishAdder = props =>{
    
    const Dispatch = useDispatch()
    const[adderData , setAdderData] = useState({})
    const dropdownChangeHandler = (e) =>{
        const inputVal = e.target.value
            Dispatch(updateGrade(inputVal))
            
    }
    return (
        <div className = "dishAdder">
        <h2>Add a recent dish</h2>
        <div className = "dishContainer">
        <DishForm label = "Restaurant" setState = {setAdderData}></DishForm>
        <DishForm label = "Dish name"></DishForm>
        <label for="grade">Grade</label>
        <select name="grade" id="grade" onChange = {dropdownChangeHandler}>
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
        </div>
        <DishSubmitButton refreshVal = {props.refreshVal} refreshFunction = {props.refreshFunction}></DishSubmitButton>
        </div>
    )
    // Restaurant
    // Dish name
    // Grade
    // Notes
    // Add dish button


}

export default DishAdder