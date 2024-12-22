import React from 'react'
import Heading from '../common/Heading';
import PriceCard from '../pricing/PriceCard';
import './Price.css';

const Price = () => {
    return (
        <>
            <section className='price padding'>
                <div className='container'>
                    <Heading title='Select Your Package' subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi officiis laboriosam in illo est obcaecati odit non autem deleniti repudiandae eligendi id at culpa voluptas, possimus, assumenda necessitatibus reiciendis. Sed!' />
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Price;