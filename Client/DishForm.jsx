





import React from 'react'
// import any subcomponent classes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'


const DishForm = props =>{
    
    return (
        <div className = "DishForm">
        <form>
        <fieldset>
            <label>
                <p>{props.label}</p>
                <input name = {props.label}/>
            </label>
        </fieldset>
        </form>
        </div>
    )
    // Restaurant
    // Dish name
    // Grade
    // Notes
    // Add dish button


}

export default DishForm