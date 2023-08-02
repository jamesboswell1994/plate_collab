

import React from 'react'


// dish expects an object with restaurant, dishname, grade, and notes
const Dish = props => {
    return (
<div>
        <p>{props.data['dishName']}</p>
        <p>{props.data['restaurant']}</p>
        <p>{props.data['grade']}</p>
        <p>{props.data['category']}</p>
        <p>{props.data['notes']}</p>
        </div>
        )  
}


export default Dish