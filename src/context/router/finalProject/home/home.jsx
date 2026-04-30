import React, { useContext } from 'react'
import './index.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button } from 'react-bootstrap';
import Menscloth from '../Categoriescomponents/MensCloth';
import { DataContext } from '../../Context';
import About from '../About';
import Womenscloth from '../Categoriescomponents/WomensCloth';
import Jewelery from '../Categoriescomponents/Jewelery';
import Electronics from '../Categoriescomponents/Electronics';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const {loading} = useContext(DataContext)

    const navigate = useNavigate()
    
    if (loading) return <p>Loading...</p>
  return (
    <div>
      <div>
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Men's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/mensCloth')}>Show more</button>
        </div>
        <Menscloth />
      </div>
      <div>
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Women's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/womenCloth')}>Show more</button>
        </div>
        <Womenscloth />
      </div>
      <div>
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Jewelery's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/jewelery')}>Show more</button>
        </div>
        <Jewelery />
      </div>
      <div>
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Electronics's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/electronics')}>Show more</button>
        </div>
        <Electronics />
      </div>
    </div>
  )
}