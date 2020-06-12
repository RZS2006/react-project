import React from 'react'

export class ListFooter extends React.Component {
    render() {
        return (
            <div className="list-footer">
                <div className="footer-numbers">
                    <span className="grandtotal-container">Grand Total: 45.34€</span>
                    <span className="itemamount-container">Total Items: 3</span>
                    <span className="uncomplete-container">Items Uncompleted: 1</span>
                </div>
                <div className="footer-filter">
                    <input type="checkbox" name="hide-completed-checkbox" className="hide-completed-checkbox"/>
                    <label htmlFor="hide-completed-checkbox" className="hide-completed-label">Hide Completed</label>
                    <button className="delete-completed-btn">Delete Completed</button>
                    <button className="delete-all-btn">Delete All</button>
                </div>
            </div>
        )
    }
}
