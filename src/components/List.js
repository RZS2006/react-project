import React from 'react'
import { ListItem } from "./ListItem"

export class List extends React.Component {
    render() {
        return (
            <div className="list">
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        )
    }
}
