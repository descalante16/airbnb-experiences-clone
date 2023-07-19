import React from 'react';
import '../App.css'
import Card from 'react-bootstrap/Card';
import starIcon from '../star-solid.svg'

import heartIcon from '../heart-regular.svg'




const CardGrid = (props) => {
    return (
        <div className=''>
            
            <Card className='border-light' style={{ width: '18rem', height: '34rem', position: 'relative'}}>
            <img src={heartIcon} alt="heart Icon" width="24" height="24" className="overlay hover m-2" 
            style={{ position: 'absolute', top: '5px', right: '5px',  cursor: 'pointer'}}
            />

            <Card.Img variant="top" src={props.img} alt={props.alt} width="176" height="340" />
            <Card.Body>
                <div className='d-flex align-items-center'>
                <img src={starIcon} alt="" width="15" height="15" className=" me-2 mb-2" />
                <h4 className='fs-6 fw-normal mb-2 me-1'>{props.rating}</h4>
                <h4 className='fs-6 fw-normal mb-2 text-secondary'>({props.count})</h4>
                <h4 className='fs-6 fw-normal mb-2 text-secondary ms-1'> • </h4>
                <h4 className='fs-6 fw-normal mb-2 text-secondary ms-1'>{props.country}</h4>


                </div>
                <Card.Text className='fs-5 mb-0 fw-medium'>
                {props.title}
                </Card.Text>
                <div className='d-flex align-items-center mt-1'>
                    <h4 className='fs-5 fw-normal'><span className='fw-medium me-1'>From ₱{props.price}</span>/ person</h4>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CardGrid;