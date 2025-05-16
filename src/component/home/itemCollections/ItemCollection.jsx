import React from 'react';
import './ItemCollection.css';
import Heading from '../../common/Heading';
import { itemCollection } from '../../data/Data';

const ItemCollection = () => {
    return (
        <>
            <section className='itemCollection padding'>
                <div className='container'>
                    <Heading title='Explore More Items' subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi officiis laboriosam in illo est obcaecati odit non autem deleniti repudiandae eligendi id at culpa voluptas, possimus, assumenda necessitatibus reiciendis. Sed!' />
                    <div className='content grid3 mtop'>
                        {itemCollection.map((items, index) => {
                            return (
                                <div className='box' key={index}>
                                    <img src={items.cover} alt='' />
                                    <div className='overlay'>
                                        <h5>{items.name}</h5>
                                        <p>
                                            <label>{items.category}</label>
                                            <label>{items.location}</label>
                                            <label>{items.price}</label>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemCollection;