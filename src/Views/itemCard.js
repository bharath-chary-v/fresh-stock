import React from 'react'
import { useCart } from 'react-use-cart'
import {Button} from 'react-bootstrap'


const Itemcard = (props) => {
    const { addItem } = useCart();
    return (
        <div  className="card" width="60px">
            <div className="card-body ">

                <img
                    alt={props.title}
                    className="card-img-top"
                    src={props.image}
                />
            </div>
            <div className="card-footer">
                <p className="card-text text-center text-capitalize text-secondary">Title: {props.title}</p>
                <p className="text-left text-capitalize text-secondary">{props.category}</p>
                <p className="text-left text-danger">Price:${props.price}</p>
                
                <Button
                    className='btn-block'
                    type='button'
                    onClick={() => addItem(props.item)}
                >
                    Add To Cart
                </Button>
                

            </div>
        </div>
    )


}


export default Itemcard