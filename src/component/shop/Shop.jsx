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
  { imgsrc: dress1, title: 'Nayasi Women Cotton Silk Kurta Pant With Dupatta', text: '₹899 MRP' },
  { imgsrc: dress2, title: 'Women Skater Dark Green Dress', text: '₹550.29 MRP' },
  { imgsrc: dress3, title: 'BHAKHARIMATA TRENDS Women Ethnic Dress Red Dress', text: '₹592.96 MRP' },
  { imgsrc: dress4, title: 'CANIBANI Women Anarkali Kurta with Pants & Dupatta', text: '₹984.41 MRP' },
  { imgsrc: dress5, title: ' Bodycon Dress Black Marchelas', text: '₹679.00 MRP' },
  { imgsrc: dress6, title: ' ZAHRA GARMENTS Women A-line Black Dress', text: '₹590.00 MRP' },
  { imgsrc: dress7, title: 'Trendy Petite Women Lehenga', text: '₹314.84 MRP' },
  { imgsrc: dress8, title: "MEROKEETY Women's Ribbed Long Sleeve Sweater Dress High Neck Green", text: '₹211.00 MRP' },
  { imgsrc: dress9, title: ' Boohoo Striped Cotton Lace-Up Back Shirt Style Top', text: '₹999.00 MRP' },
  { imgsrc: dress10, title: 'Handloom Dress', text: '₹899.00 MRP' },
  { imgsrc: dress11, title: 'Light Peach Organza Straight Cut Sharara Suit', text: '₹666.00 MRP' },
  { imgsrc: dress12, title: 'Neck Mini Color Blocking Striped Long Sleeve Dress', text: '₹681.29 MRP' },
  { imgsrc: dress13, title: "Women's Jumpsuits", text: '₹592.96 MRP' },
  { imgsrc: dress14, title: 'DAKSH FASHION STYLE Solid Georgette Stitched Anarkali Gown  (Blue)', text: '₹984.41 MRP' },
  { imgsrc: dress15, title: ' SRUTVA FASHION Colourblock Bodycon Dress', text: '₹679.00 MRP' },
  { imgsrc: dress16, title: ' Olive Crop Shirt With Pants Linen Casual Co-ordinate', text: '₹590.00 MRP' },
  { imgsrc: dress17, title: " Zeel Clothing Women's Sequins Embroidered Art Silk Lehenga Choli With Dupatta", text: '₹314.84 MRP' },
  { imgsrc: dress18, title: ' Divyanshi Women Regular Fit Solid Formal Shirt', text: '₹211.00 MRP' },
  { imgsrc: dress19, title: 'Multi Colored Lehenga Set', text: '₹1999.00 MRP' },
  { imgsrc: dress20, title: ' SEJUKAENTERPRISE Embroidered Georgette Stitched Flared/A-line Gown', text: '₹899.00 MRP' },
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
