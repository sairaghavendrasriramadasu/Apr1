import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import './index.css'
import { useNavigate } from 'react-router-dom'

export default function Womenscategorycloth() {
    const { data, loading, addToCart, isLogin } = useContext(DataContext)

    const navigate = useNavigate()

    const mensFilter = data.filter(
        (items) => items.category === `women's clothing`,
    );

    const addingCart = (items) => {
        if (isLogin) {
            addToCart(items)
        } else {
            navigate('/login')
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Womens Cloth</h2>
            <div className='mens-cloting-flex'>
                {
                    mensFilter.map((items) => (
                        <>
                            <div className="product-card">
                                <img src={items.image} alt="" className="product-img" />

                                <div className="product-body">
                                    <div className="title-row">
                                        <h5 className="title">
                                            {items.title.length > 20
                                                ? items.title.slice(0, 20) + "..."
                                                : items.title}
                                        </h5>

                                        <div className="rating">
                                            {"★".repeat(Math.round(items.rating.rate))}
                                        </div>
                                    </div>

                                    <div className="bottom-row">
                                        <span className="price">${items.price}</span>

                                        <div className="icons">
                                            <span className="heart">♡</span>
                                            <span className="cart" onClick={() => addingCart(items)}>🛒</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
