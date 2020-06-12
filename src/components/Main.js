import React from 'react'
import { InputForm } from "./InputForm"
import { ShoppingList } from "./ShoppingList"
import { ListFooter } from "./ListFooter"

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };

        this.addListItem = this.addListItem.bind(this)
    }

    addListItem(itemData) {
        const [itemName, itemPrice, itemQuantity] = itemData;
        const newListItem = { name: itemName, 
                              price: itemPrice, 
                              quantity: itemQuantity, 
                              completed: false };
        this.setState({
            listItems: [...this.state.listItems, newListItem]
        });
    }

    render() {
        return (
            <main className="main">
                <InputForm addListItem={this.addListItem}/>
                <ShoppingList />
                <ListFooter />
            </main>
        )
    }
}
