import React from 'react';
import './App.css';
import { Header } from "./components/Header"
import { ShoppingList } from "./components/ShoppingList"

export class App extends React.Component {
  render() {
    return (
      <div className="container">
          <Header />
          <ShoppingList />
      </div>
    );
  }
}
