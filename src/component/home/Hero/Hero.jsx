import React from 'react';
import './Hero.css';
import { Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import Heading from '../../common/Heading';

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <Heading title='Search Your Next Item' subtitle='Find new & items located in your local city.'/>
                    <form className='flex'>
                        <div className='box'>
                            <span>City/Street</span>
                            <input type='text' placeholder='Location' />
                        </div>
                        <div className='box'>
                            <span>Item Type</span>
                            <input type='text' placeholder='Item Type' />
                        </div>
                        <div className='box'>
                            <span>Price Range</span>
                            <input type='text' placeholder='Price Range' />
                        </div>
                        <div className='box'>
                            <h4>Advance Filter</h4>
                        </div>
                        <Button className='btn'>
                            <SearchIcon />
                        </Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Hero;