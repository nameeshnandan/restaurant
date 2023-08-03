import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../RestOp/Restop';
import Restreview from '../RestReview/Restreview';


function View() {
    const [restDetails, setRestDetails] = useState([])

    //geting particular id from the restaurent
    // const pathParameter = useParams()
    // console.log(pathParameter.id);

    //destructuring
    const { id } = useParams()
    console.log(id);
    // api call for particular restaurent details
    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data);
        setRestDetails(data)
    }
    console.log(restDetails);
    //function call
    useEffect(() => {
        fetchData()
    },[])


    return (
        <>
            <Row>
                <Col sm={12} md={3} lg={4}>
                    {/* image */}
                    <Image className='border rounded border-2 border-dark' src={restDetails.photograph} fluid></Image>
                </Col>
                <Col>
                    <h1 className='text-center mt-5'>{restDetails.name}</h1>
                    <ListGroup className='shadow'>
                        <ListGroup.Item>{restDetails.neighborhood}</ListGroup.Item>
                        <ListGroup.Item>{restDetails.address}</ListGroup.Item>
                        <ListGroup.Item>{restDetails.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item><Restop op={restDetails.operating_hours}/></ListGroup.Item>
                        <ListGroup.Item><Restreview review={restDetails.reviews}/></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default View