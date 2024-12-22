import React from 'react'
import Back from '../common/Back';
import img from '../images/banner4.png';
import womenD from '../images/women boutique.png';
import './About.css';

const About = () => {
    return (
        <>

            <section className='about'>
                <Back name='About Us' title='About Us - Who We Are?' cover={img} />
                <h1 className='h1'>Our Agency Story</h1>
                <h4 className='h4'>Check out our company story and work process</h4>
                <div className='container flex mtop'>
                    <div className='left row'>
                        <p>A rental dress website is an online platform designed to offer users the convenience of renting dresses for various occasions rather than purchasing them. This type of service allows individuals to access a wide variety of stylish, designer, and high-end dresses for events such as weddings, parties, proms, and other formal gatherings at a fraction of the cost. By renting instead of buying, customers can enjoy wearing premium fashion without the need for long-term commitment or high costs.
                        </p>
                        <br />
                        <p>The website typically provides an extensive collection of dresses, categorized by style, size, color, and occasion, allowing users to quickly find the perfect outfit for their needs. With flexible rental periods, seamless booking, and secure payment options, the rental process is designed to be user-friendly. Moreover, many rental dress websites offer home delivery and easy return services, further enhancing the customer experience.
                        </p>
                    </div>
                    <div className='right row'>
                        <img src={womenD} alt='' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;