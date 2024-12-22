import React from 'react';
import './Shop.css';

// Import your images
import dress1 from '../shopPhotos/dress.jpg';
import dress2 from '../shopPhotos/bodycone.jpg';
import dress3 from '../shopPhotos/casual.jpg';
import dress4 from '../shopPhotos/dress3.jpg';
import dress5 from '../shopPhotos/bodycone1.jpg';
import dress6 from '../shopPhotos/casual1.jpg';
import dress7 from '../shopPhotos/dress6.jpg';
import dress8 from '../shopPhotos/bodycone2.jpg';
import dress9 from '../shopPhotos/casual2.jpg';
import dress10 from '../shopPhotos/dress2.jpg';
import dress11 from '../shopPhotos/dress1.jpg';
import dress12 from '../shopPhotos/bodycone3.jpg';
import dress13 from '../shopPhotos/casual3.jpg';
import dress14 from '../shopPhotos/dress4.jpg';
import dress15 from '../shopPhotos/bodycone4.jpg';
import dress16 from '../shopPhotos/casual4.jpg';
import dress17 from '../shopPhotos/dress5.jpeg';
import dress18 from '../shopPhotos/casual5.jpg';
import dress19 from '../shopPhotos/dress7.jpg';
import dress20 from '../shopPhotos/dress8.jpg';

const items = [
  { imgsrc: dress1, title: 'BASKLE Midi Dress With Belt - Customize', text: '₹6666.00 MRP' },
  { imgsrc: dress2, title: 'Regular Fit Lapel Collar Long sleeve Elegant Long Dress', text: '₹6,481.29 MRP' },
  { imgsrc: dress3, title: 'Womens Satin Suit Dress', text: '₹5,492.96 MRP' },
  { imgsrc: dress4, title: 'Womens Suits Blazers Spring Winter Korean Style Dress', text: '₹1,984.41 MRP' },
  { imgsrc: dress5, title: 'Westhood Top Skirt Co-ords Set', text: '₹679.00 MRP' },
  { imgsrc: dress6, title: 'Premium Crop Blazer Coat With Fork Pencil Black Skirt Set', text: '₹5,190.00 MRP' },
  { imgsrc: dress7, title: 'AOBRICON Fashion summer jumpsuits', text: '₹3,104.84 MRP' },
  { imgsrc: dress8, title: 'KIRUNDO Women\'s 2024 Fall 2 Piece Blazer Set Casual Loose Long Blazer Jackets', text: '₹1,211.00 MRP' },
  { imgsrc: dress9, title: 'Women Cotton Blend Blazer Pant Set', text: '₹1999.00 MRP' },
  { imgsrc: dress10, title: 'rare Women Mini Casual Dress', text: '₹899.00 MRP' },
  { imgsrc: dress11, title: 'BASKLE Midi Dress With Belt - Customize', text: '₹6666.00 MRP' },
  { imgsrc: dress12, title: 'Regular Fit Lapel Collar Long sleeve Elegant Long Dress', text: '₹6,481.29 MRP' },
  { imgsrc: dress13, title: 'Womens Satin Suit Dress', text: '₹5,492.96 MRP' },
  { imgsrc: dress14, title: 'Womens Suits Blazers Spring Winter Korean Style Dress', text: '₹1,984.41 MRP' },
  { imgsrc: dress15, title: 'Westhood Top Skirt Co-ords Set', text: '₹679.00 MRP' },
  { imgsrc: dress16, title: 'Premium Crop Blazer Coat With Fork Pencil Black Skirt Set', text: '₹5,190.00 MRP' },
  { imgsrc: dress17, title: 'AOBRICON Fashion summer jumpsuits', text: '₹3,104.84 MRP' },
  { imgsrc: dress18, title: 'KIRUNDO Women\'s 2024 Fall 2 Piece Blazer Set Casual Loose Long Blazer Jackets', text: '₹1,211.00 MRP' },
  { imgsrc: dress19, title: 'Women Cotton Blend Blazer Pant Set', text: '₹1999.00 MRP' },
  { imgsrc: dress20, title: 'rare Women Mini Casual Dress', text: '₹899.00 MRP' },
];

const Shop = () => {
  return (
    <div className='shopD'>
      <h1 style={{ textAlign: 'center', fontFamily: "'Italianno', serif", fontSize: '85px', color: 'black' }}>
        Explore Items
      </h1>
      <p style={{ textAlign: 'center', fontSize: '22px' }}>
        Style on Rent, Memories to Keep (❁´◡`❁)
      </p>
      <div className="cards-container">
        {items.map((item, index) => (
          <div key={index} className="shop-card">
            <img src={item.imgsrc} alt={item.title} className="shop-card-image" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
