





import React from 'react'
// import any subcomponent classes
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import DishForm from './DishForm.jsx'
import DishSubmitButton from './DishSubmitButton.jsx'
import Dish from './Dish.jsx'
import {useState} from 'react'
import { useEffect } from 'react'

const DishDisplay = () =>{
    

    const [response, setResponse] = useState([{}])
    const entries = []

    const username = useSelector((state) => (state.dishUpdate.username))
    console.log("the redux user ID is " + username)
    useEffect( () =>{
        async function getRecords(){
            const response = await axios.get('/feed/records', {params: {username}})
            console.log(response)
            setResponse(response.data)
        }
        getRecords()      
    }, [])


        for (let entry of response){
            entries.push(<Dish data = {entry}></Dish>)
        }
        return (
            <div className = "dishAdder">
            <h2>Your recent dishes</h2>
            {entries}
            </div>
        )
    }

export default DishDisplay