import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from '../RestCard/RestCard';

function AllRest() {
  //allItems is a state to hold all  the array items
  const[allItem,setAllitem]=useState([])
  const fetchData=async()=>{
    const response = await axios.get('http://localhost:3001/restaurants')
    console.log(response.data);
    setAllitem(response.data)
  }
  console.log(allItem); //array of data
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <Row>
        {
          allItem.map((item)=>( 
            <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard restaurents={item}/>
            </Col>
          ))
          
        }
      </Row>
    </>
  )
}

export default AllRest