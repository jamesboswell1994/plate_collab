// this should be a table to hold all of your dishes

import * as React from 'react';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table';
import { useState, useEffect , useImperativeHandle , forwardRef, useRef} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios'
const RecordTable = props=> {
    // const [filters, setFilters] = useState(['SETUP', 'LEARN']);

    const [response, setResponse] = useState([{}])
    const [refresher, updateRefresher] = useState(0)
    const entries = []

    // const forceRefresh = () => {

    //   forceUpdate(); // Replace this with the actual re-rendering logic
    // };
  
    // // Expose the method through the parent component's ref
    //  useImperativeHandle(ref, () => ({
    //   forceRefresh,
    // }));

    const username = useSelector((state) => (state.dishUpdate.username))
    console.log("the redux username in the table function is " + username)
    useEffect( () =>{
        async function getRecords(){
            const response = await axios.get('/feed/records', {params: {username}})
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
    <h2> My dishes</h2>
    <Table data={data}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Restaurant</HeaderCell>
              <HeaderCell>Dish</HeaderCell>
              <HeaderCell>Grade</HeaderCell>
              <HeaderCell>Category</HeaderCell>
              <HeaderCell>Notes</HeaderCell>
              <HeaderCell></HeaderCell>

            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
              <Cell>{item.restaurant}</Cell>
                <Cell>{item.dishName}</Cell>
                <Cell>{item.grade}</Cell>
                <Cell>{item.category}</Cell>
                <Cell>{item.notes}</Cell>
                <button onClick= {()=> {
                  const deleteKeys = {restaurant: item.restaurant , dishName : item.dishName, notes : item.notes}
                  axios.delete('/feed/records', {data: deleteKeys}).then(() => updateRefresher(refresher+1))
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
      
export default RecordTable;