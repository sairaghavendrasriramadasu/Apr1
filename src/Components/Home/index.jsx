import React, { useContext } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context'
import Menscloth from '../Categoriescomponents/MensCloth';
import Womenscloth from '../Categoriescomponents/WomenCloth';
import Electronics from '../Electronics';

export default function Home() {
    const {loading} = useContext(DataContext)

    const navigate = useNavigate()
    
    if (loading) return <p>Loading...</p>
  return (
    <main className="home-page">
      <section className="category-section">
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Men's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/mensCloth')}>Show more</button>
        </div>
        <Menscloth />
      </section>
      <section className="category-section">
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Women's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/womenCloth')}>Show more</button>
        </div>
        <Womenscloth />
      </section>
      <section className="category-section">
        <div className='categories-sub-container'>
            <h4 className='sub-heading-category'>Electronics's Latest</h4>
            <button className='show-more-button' onClick={() => navigate('/electronics')}>Show more</button>
        </div>
        <Electronics />
      </section>
    </main>
  )
}
