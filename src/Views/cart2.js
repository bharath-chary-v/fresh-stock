import React from "react";
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        
        updateItemQuantity,
        removeItem,
        
    } = useCart();

    if (isEmpty) return <h1 className="text-center text-secondary   ">Your cart is empty</h1>


    return (
        <>
        
        <section className="py-4 container">
        
            <div className="row justify-content-center">
                <div className="col-12">
                <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
                    <h5>Cart  ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        {items.map((item, index) =>  {
                            return(
                                <tbody>
                                    <tr key={index}>
                                        <td>
                                            <img src={item.image} alt={item.title} style={{height:'6rem'}}/>
                                        </td>
                                        <td>{item.title }</td>
                                        <td>{item.price}</td>
                                        <td>Quantity: {item.quantity}</td>
                                        <td>
                                            <button 
                                            className="btn btn-info ms-2"
                                            onClick={()=>   updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                            <button 
                                            className="btn btn-info ms-2"
                                            onClick={()=>   updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            <button 
                                            className="btn btn-danger ms-2"
                                            onClick={()=>  removeItem(item.id) }>Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            )
                        })}
                    </table>
                </div>
            </div>
        </section></>
    )
}

export default Cart