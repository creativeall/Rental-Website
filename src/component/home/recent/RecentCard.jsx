import React from 'react';
import { list } from '../../data/Data';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from 'react-bootstrap';

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category == "for sale" ? "#25b5791a" : "#ff98001a", color: category == "for sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <FavoriteBorderIcon />
                </div>
                <h4>{name}</h4>
                <p>
                  <LocationOnIcon />{location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <Button className='btn2'>{price}</Button>
                  <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard;