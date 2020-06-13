import React from 'react'

export class ListItem extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        let { id, name, price, quantity, completed } = this.props.listItem;

        return (
            <div className={"list-item " + (completed ? "completed" : "")}>

                <input name="completed-checkbox"
                       type="checkbox"
                       className="completed-checkbox"
                       checked={completed}
                       onChange={() => {this.props.onCheckboxChange(id)}} />

                <span className="item-name">{name}</span>
                <span className="item-price">{parseFloat(price).toFixed(2)}€</span>

                <span className="quantity-container">
                    <button className="decrement-btn"
                            disabled={completed || quantity <= 1 }
                            onClick={() => this.props.onQuantityBtnClick(id, false)}>-</button>
                            
                    <span className="item-quantity">{quantity}</span>

                    <button className="increment-btn"
                            disabled={completed || quantity >= 100}
                            onClick={() => this.props.onQuantityBtnClick(id, true)}>+</button>
                </span>

                <span className="item-subtotal">Subtotal: {parseFloat((quantity * price)).toFixed(2)}€</span>

                <button className="delete-btn"
                        onClick={() => this.props.onDeleteBtnClick(id)}>X</button>
            </div>
        )
    }
}