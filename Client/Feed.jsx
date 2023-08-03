
import React, {useEffect, useRef, useImperativeHandle} from 'react'
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
import FriendLookup from './FriendLookup.jsx'
import WishlistRecordTable from './WishlistRecordTable.jsx'
import WishAdder from './WishAdder.jsx'
const Feed = () =>{
    const [refresher, setRefresher] = useState(0)



    const username = useSelector((state) => (state.dishUpdate.username))

    let header = ("Hey " + username + ", welcome to Dishlist!")

    if (username === 'Katherine') header = 'Hey beautiful, welcome to Dishlist'
    return (
        <div>
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
    <div className = "primaryFeedContainer">
        <img src="https://i.ibb.co/1MyQpL1/Screenshot-2023-08-03-at-1-16-21-PM.png" alt="Screenshot-2023-08-03-at-1-16-21-PM" border="0" width="300px" height = "300px" margin = "10px"></img>
        <h1 className='feedHeader'>{header}</h1>
    <div className = "columnContainer">
        <div className = "userFeedContainer">

            <RecordTable username = {username} ></RecordTable>
            <DishAdder refreshVal = {refresher} refreshFunction = {setRefresher}></DishAdder>
        </div>
        <div className = "wishlist">
        <WishlistRecordTable username = {username}></WishlistRecordTable>
        <WishAdder></WishAdder>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Feed


/// Feed will need to take user input, save that data to db, then display
// recent restaurants
// recent entrees
// full list

