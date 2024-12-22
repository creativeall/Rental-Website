import React from 'react';
import { Button } from 'react-bootstrap';
import { price } from '../data/Data';
const PriceCard = () => {
    return (
        <>
            <div className='content flex mtop'>
                {price.map((item, index) => {
                    return (
                        <div className='box shadow' key={index}>
                            <div className='topbtn'>
                                <Button className='btn3'>{item.best}</Button>
                            </div>
                            <h3>{item.plan}</h3>
                            <h1>
                                <span>$</span>{item.price}
                            </h1>
                            <p>{item.ptext}</p>
                            <ul>
                                {item.list.map((val) => {
                                    const { icon, text, change } = val
                                    return <li>
                                        <label htmlFor='' style={{
                                            background: change === "color" ? "#dc3545" : "#27ae601f",
                                            color: change === "color" ? "#fff" : "#27ae60"
                                        }}
                                        >
                                            {icon}
                                        </label>
                                        <p>{text}</p>
                                    </li>
                                })}
                            </ul>
                            <Button className='btn5' style={{
                                background: item.plan === "Standard" ? "#fff" : "#27ae601f",
                                color: item.plan === "Standard" ? "#27ae60" : "#27ae60"
                            }}>Start {item.plan}</Button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PriceCard;