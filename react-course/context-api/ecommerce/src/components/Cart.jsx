import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const removeFromCart = (itemToRemove) => {
        const index = cart.findIndex(item => item.id === itemToRemove.id)
        if (index !== -1) {
            setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
        }
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">{item.name}</span>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">${item.price}</span>
                        <button 
                            onClick={() => removeFromCart(item)}
                            className="px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors duration-200"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className="mt-4 pt-4 border-t">
                <p className="text-xl font-semibold text-gray-800">
                    Total: ${cart.reduce((total, item) => total + item.price, 0)}
                </p>
            </div>
        </div>
    )
}
