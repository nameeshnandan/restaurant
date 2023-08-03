import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({ review }) {
    console.log(review);

    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Show Reviews
            </Button>

            <Collapse in={open}>
                <div id="example-collapse-text">

                    {
                        review?.map((item) => (
                            <div>
                                <p>{item.name} </p><p>,on: {item.date}</p>
                            <p>rating: {item.rating}</p>
                            <p>rating: {item.comments}</p>
                            </div>
                            
                            
                        ))
                    }
                </div>
            </Collapse>
        </div>
    )
}

export default Restreview