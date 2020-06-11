import React from 'react'
import { InputForm } from "./InputForm"
import { List } from "./List"
import { Footer } from "./Footer"

export class ShoppingList extends React.Component {
    render() {
        return (
            <main className="shopping-list">
                <InputForm />
                <List />
                <Footer />
            </main>
        )
    }
}
