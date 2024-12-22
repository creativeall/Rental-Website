import React from 'react';
import './Quality.css';
import Heading from '../../common/Heading';
import QualityCard from './QualityCard';

const Quality = () => {
    return (
        <>
            <section className='featured background'>
                <div className='conatiner'>
                    <Heading title='Feature' subtitle='Find All Type of Item.'/>
                    <QualityCard />
                </div>
            </section>
        </>
    )
}

export default Quality;