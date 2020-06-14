import React from 'react'
import { ListItem } from "./ListItem"

export class ShoppingList extends React.Component {

    render() {
    const { listItems, hideCompleted } = this.props;

    let formattedListItems = hideCompleted ? listItems.filter(listItem => !listItem.completed) : listItems;

    const list = formattedListItems.map(listItem => 
    <ListItem key={listItem.id} 
              listItem={listItem} 
              onCheckboxChange={this.props.onCheckboxChange}
              onDeleteBtnClick={this.props.onDeleteBtnClick} 
              onQuantityBtnClick={this.props.onQuantityBtnClick} /> 
    )

        if (list.length > 0) {
            return (
                <div className="shopping-list">
                    {list}
                </div>
            )
        } else {
            return null
        }
    }
}
