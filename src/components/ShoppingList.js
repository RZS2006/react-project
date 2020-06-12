import React from 'react'
import { ListItem } from "./ListItem"

export class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        )
    }
}
