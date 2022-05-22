import React from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {
    const param =useParams();
    const productId=param.id;
    return (
        <div>
            <h3>Deatils about product:{productId}</h3>
            
        </div>
    );
};

export default Details;