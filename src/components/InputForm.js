import React from 'react'

export class InputForm extends React.Component {
    render() {
        return (
            <div className="input-form">
                <form class="form">
                    <div className="input long">
                        <label htmlFor="item-name" className="input-label">Item Name</label>
                        <input name="item-name" type="text" className="input-field"/>
                    </div>
                    <div className="input short">
                        <label htmlFor="item-price" className="input-label">Item Price</label>
                        <input name="item-price" type="text" className="input-field"/>
                    </div>
                    <div className="input short">
                        <label htmlFor="item-quantity" className="input-label">Item Quantity</label>
                        <input name="item-quantity" type="text" className="input-field"/>
                    </div>
                    <input type="submit" value="Add Item" className="submit-btn"/>
                </form>
            </div>
        )
    }
}