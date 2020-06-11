import React from 'react'

export class ListItem extends React.Component {
    render() {
        return (
            <div className="list-item">
                <input type="checkbox" name="completed-checkbox" className="completed-checkbox"/>
                <span className="item-name">Pirkka Porkkana 2kg</span>
                <span className="item-price">8.86€</span>
                <span className="quantity-container">
                    <button className="decrement-btn">-</button>
                    <span className="item-quantity">3</span>
                    <button className="increment-btn">+</button>
                </span>
                <span className="item-subtotal">Subtotal: 25.76€</span>
                <button className="delete-btn">X</button>
            </div>
        )
    }
}