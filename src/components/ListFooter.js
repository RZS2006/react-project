import React from 'react'

export class ListFooter extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { listItems } = this.props;

        const grandTotal = listItems.reduce((acc, cur) => {
            return acc + cur.quantity * cur.price;
        }, 0).toFixed(2)
        const totalListItems = listItems.length;
        const uncompletedListItems = listItems.filter(listItem => !listItem.completed).length;

        if (totalListItems > 0) {
            return ( 
                <div className="list-footer">

                    <div className="footer-numbers">
                        <span className="grandtotal-container">Grand Total: {grandTotal}€</span>
                        <span className="itemamount-container">Total Items: {totalListItems}</span>

                        {uncompletedListItems > 0 &&
                            <span className="uncomplete-container">Items Uncompleted: {uncompletedListItems}</span>
                        }
                    </div>

                    <div className="footer-filter">
                        {uncompletedListItems > 0 && 
                            <React.Fragment>
                                <input name="hide-completed-checkbox"
                                    type="checkbox"
                                    className="hide-completed-checkbox"
                                    checked={this.props.hideCompleted}
                                    onChange={this.props.onHideCompletedCheckboxChange} />
                                <label htmlFor="hide-completed-checkbox" className="hide-completed-label">Hide Completed</label>
                                
                                <button className="delete-completed-btn"
                                        onClick={this.props.onDeleteCompletedBtnClick}>Delete Completed</button>
                            </React.Fragment>
                        }

                        <button className="delete-all-btn"
                                onClick={this.props.onDeleteAllBtnClick}>Delete All</button>
                    </div>
                    
                </div>
            )
        } else {
            return null
        }
    }
}
