





import React from 'react'
// import any subcomponent classes
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'
import DishSubmitButton from './DishSubmitButton.jsx'
import { useState } from 'react'
import { updateGrade, updateWishRestaurant, updateWishDishName, updateHowBad } from './redux/dishUpdateSlice.js'
import WishSubmitButton from './WishSubmitButton.jsx'


const WishAdder = props =>{
    
    const Dispatch = useDispatch()
    const[adderData , setAdderData] = useState({})
    const dropdownChangeHandler = (e) =>{
        const inputVal = e.target.value
            Dispatch(updateHowBad(inputVal))
            
    }

    return (
        <div className = "wishAdder">
        <h2>Add to your wishlist</h2>
        <div className = "wishContainer">
        <DishForm label = "Wishlist Restaurant" setState = {setAdderData}></DishForm>
        <DishForm label = "Wishlist Dish Name"></DishForm>
        <select name="grade" id="grade" onChange = {dropdownChangeHandler}>
            <option value="Meh">Meh</option>
            <option value="Pretty interested">Pretty interested</option>
            <option value="Gotta have it">Gotta have it-</option>
        </select>

        </div>
        <WishSubmitButton refreshVal = {props.refreshVal} refreshFunction = {props.refreshFunction}></WishSubmitButton>
        </div>
    )
    // Restaurant
    // Dish name
    // Grade
    // Notes
    // Add dish button


}

export default WishAdder