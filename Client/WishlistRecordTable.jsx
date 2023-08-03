
// this should be a table to hold all of your dishes

import * as React from 'react';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table';
import { useState, useEffect , useImperativeHandle , forwardRef, useRef} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios'
const WishlistRecordTable = props=> {
    // const [filters, setFilters] = useState(['SETUP', 'LEARN']);

    const [response, setResponse] = useState([{}])
    const [refresher, updateRefresher] = useState(0)
    const entries = []

  
    
    const username = props.username
    console.log("the redux username in the table function is " + username)
    useEffect( () =>{
        async function getRecords(){
            const response = await axios.get('/wishlist', {params: {username}})
            console.log(response)
            setResponse(response.data)
        }
        getRecords()   
    }, [refresher])
    // async function handleDelete (restaurant, dishName, notes){
    //   const deleteKeys = {restaurant: restaurant , dishName : dishName, notes : notes}
    //   await axios.delete('/feed/records', deleteKeys)
    // }



  const data = { nodes: response };

  return (
    <div>
    <h2> My wishlist</h2>
    <Table className = "custom-table" data={data}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Restaurant</HeaderCell>
              <HeaderCell>Dish</HeaderCell>
              <HeaderCell>How Bad</HeaderCell>

              <HeaderCell></HeaderCell>

            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
              <Cell>{item.restaurant}</Cell>
                <Cell>{item.dishname}</Cell>
                <Cell>{item.howbad}</Cell>
                <button onClick= {()=> {
                  const deleteKeys = {restaurant: item.restaurant , dishName : item.dishName, username : username}
                  axios.delete('/wishlist', {data: deleteKeys}).then(() => updateRefresher(refresher+1))
                }}
                
                >Delete entry</button>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
    </div>
  );
};
      
export default WishlistRecordTable;