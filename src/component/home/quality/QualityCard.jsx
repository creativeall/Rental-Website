import React from 'react';
import { quality } from '../../data/Data'; // Assuming 'quality' is an exported array from the Data file

const QualityCard = () => {
    return (
        <>
            <div className="content grid5 mtop">
                {quality.map((items, index) => (
                   <div className='box' key={index}>
                   <div className="icon">{items.icon}</div>
                    <h4>{items.name}</h4>
                    <label>{items.total}</label>
                   </div>
                ))}
            </div>
        </>
    );
};

export default QualityCard;
