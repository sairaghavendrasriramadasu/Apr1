import React, { useEffect, useState } from 'react'
import { DataContext } from './DataContext'

const extraMensProducts = [
]

export default function Dataprovider({children}) {

    const [data, setData] = useState([])
    const [cartproducts, setCartproducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState('')
    const [isLogin, setIslogin] = useState(false)

    const addToCart = (product) => {
  setCartproducts((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      );
    }

    return [...prev, { ...product, qty: 1 }];
  });
};

    useEffect(() => {
      const fetching = async () => {
        try {
            setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products')
                const products = await response.json()
                setData([...products, ...extraMensProducts])
            
        } catch (e) {
            setError(e)
            console.log(e, 'error in something');
            
        }
        finally {
            setLoading(false)
        }}
        fetching()
    }, [])

  return (
      <DataContext.Provider value={{data, isLogin, setIslogin,  loading, addToCart, cartproducts, setCartproducts}}>
        {children}
      </DataContext.Provider>
  )
}
