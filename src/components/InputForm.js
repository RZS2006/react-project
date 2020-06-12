import React from 'react'

export class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemPrice: "",
            itemQuantity: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault()

        const {itemName, itemPrice, itemQuantity} = this.state;
        if (!itemName || !itemPrice || !itemQuantity) return 
        this.props.addListItem([itemName, itemPrice, itemQuantity]);
    }

    render() {
        return (
            <div className="input-form">
                <form className="form" onSubmit={this.handleSubmit}>

                    <div className="input long">
                        <label htmlFor="itemName" className="input-label">Item Name</label>

                        <input name="itemName" 
                               type="text" 
                               className="input-field"
                               value= {this.state.itemName}
                               onChange= {this.handleInputChange} />
                    </div>

                    <div className="input short">
                        <label htmlFor="itemPrice" className="input-label">Item Price</label>

                        <input name="itemPrice" 
                               type="number" step="0.01" min="0" max="10000" // 0 - 10 000
                               className="input-field"
                               value= {this.state.itemPrice}
                               onChange= {this.handleInputChange} />
                    </div>

                    <div className="input short">
                        <label htmlFor="itemQuantity" className="input-label">Item Quantity</label>

                        <input name="itemQuantity"
                               type="number" min="1" max="100" // 1 - 100
                               className="input-field"
                               value={this.state.itemQuantity}
                               onChange= {this.handleInputChange} />
                    </div>

                    <input type="submit"
                           className="submit-btn" 
                           value="Add Item" />
                </form>
            </div>
        )
    }
}