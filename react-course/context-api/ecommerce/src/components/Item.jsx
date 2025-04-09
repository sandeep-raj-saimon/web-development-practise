import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Item = () => {
    const items = [
        {
            id: 1,
            name: 'Pen',
            price: 100
        },
        {
            id: 2,
            name: 'Pencil',
            price: 10
        },
        {
            id: 3,
            name: 'Notebook',
            price: 200
        }
    ]

    const { cart, setCart } = useContext(CartContext)
    
    const addToCart = (item) => {
        console.log('item is being added to cart', item)
        setCart([...cart, item])
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            {items.map((item) => {
                return (
                    <div key={item.id} className="w-64 p-4 border rounded-lg shadow-md mb-4">
                        <h4>Item Name: {item.name}</h4>
                        <p>Price: {item.price}</p>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-full mt-4 px-4 py-2 bg-green-100 text-black rounded-md hover:bg-green-600 transition-colors duration-200 font-medium"
                        >
                          Add to cart
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
