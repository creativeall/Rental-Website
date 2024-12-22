import React from 'react';
import Heading from '../../common/Heading';
import RecentCard from './RecentCard';
import './Recent.css';

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
         <Heading title='Recent Rented Item' subtitle='Your Choice Our Collection (❁´◡`❁)' />
         <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent;