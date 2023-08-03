





import React from 'react'
// import any subcomponent classes
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {updateRestaurant, updateDishName, updateGrade,updateNotes, updateCategory} from './redux/dishUpdateSlice'


const DishForm = props =>{
    const Dispatch = useDispatch()
    
    const updateStore = (e) =>{
        const inputVal = e.target.value
        if (props.label === 'Restaurant'){
            console.log("reached the props check")
            Dispatch(updateRestaurant(inputVal))
        }

        if (props.label === 'Name'){
            console.log("reached the props check")
            Dispatch(updateDishName(inputVal))
        }

        if (props.label === 'Grade'){
            console.log("reached the props check")
            Dispatch(updateGrade(inputVal))
        }

        if (props.label === 'Notes'){
            console.log("reached the props check")
            Dispatch(updateNotes(inputVal))
        }
        if (props.label === 'Category'){
            console.log("reached the props check")
            Dispatch(updateCategory(inputVal))
        }
    }
    return (
        <div className = "DishForm">
        <form width = '15%'>
            <label>{props.label}</label>
            <input name = {props.label} onChange={updateStore}/>
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