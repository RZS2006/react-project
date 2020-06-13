import React from 'react'
import {v4 as uuidv4 } from "uuid";

import { InputForm } from "./InputForm"
import { ShoppingList } from "./ShoppingList"
import { ListFooter } from "./ListFooter"

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            hideCompleted: false
        };

        this.addListItem = this.addListItem.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.changeItemQuantity = this.changeItemQuantity.bind(this);
        this.toggleHideCompletedListItems = this.toggleHideCompletedListItems.bind(this);
        this.deleteCompletedListItems = this.deleteCompletedListItems.bind(this);
        this.deleteAllListItems = this.deleteAllListItems.bind(this);
    }

    addListItem(itemData) {
        const [itemName, itemPrice, itemQuantity] = itemData;
        const newListItem = { id: uuidv4(),
                              name: itemName, 
                              price: itemPrice, 
                              quantity: itemQuantity, 
                              completed: false };
        const newList = [...this.state.listItems, newListItem];
        this.setState({
            listItems: newList
        });
    }

    toggleCompleted(id) {
        const newList = this.state.listItems.map(listItem => {
            if (listItem.id === id) {
                listItem.completed = !listItem.completed;
            }
            return listItem
        })
        this.setState({
            listItems: newList
        });
    }

    deleteListItem(id) {
        const newList = this.state.listItems.filter(listItem => listItem.id !== id)
        this.setState({
            listItems: newList
        });
    }

    changeItemQuantity(id, increment) {
        const newList = this.state.listItems.map(listItem => {
            if (listItem.id === id) {
                increment ? listItem.quantity++ : listItem.quantity--
            }
            return listItem
        })
        this.setState({
            listItems: newList
        });
    }

    toggleHideCompletedListItems() {
        this.setState({
            hideCompleted: !this.state.hideCompleted
        })
    }

    deleteCompletedListItems() {
        const newList = this.state.listItems.filter(listItem => !listItem.completed);
        this.setState({
            listItems: newList
        });
    }

    deleteAllListItems() {
        const newList = [];
        this.setState({
            listItems: newList
        });
    }

    render() {
        return (
            <main className="main">
                <InputForm onFormSubmit={this.addListItem} />
                <ShoppingList listItems={this.state.listItems} 
                              hideCompleted={this.state.hideCompleted}
                              onCheckboxChange={this.toggleCompleted} 
                              onDeleteBtnClick={this.deleteListItem}
                              onQuantityBtnClick={this.changeItemQuantity} />
                <ListFooter listItems={this.state.listItems}
                            hideCompleted={this.state.hideCompleted}
                            onHideCompletedCheckboxChange={this.toggleHideCompletedListItems}
                            onDeleteCompletedBtnClick={this.deleteCompletedListItems}
                            onDeleteAllBtnClick={this.deleteAllListItems} />
            </main>
        )
    }
}
