import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import ItemList from "./ItemList";
import * as actions from './actions';


const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    onCreateItem: (event) => dispatch(actions.createItem(event)),
    onIncrement:  (event) => dispatch(actions.increment(event)),
    onDecrement:  (event) => dispatch(actions.decrement(event)),
    omRemoveItem: (event) => dispatch(actions.removeItem(event))
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.calculateSum = this.calculateSum.bind(this);
  }

  calculateSum() {
    let sum = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      sum += this.props.items[i].value();
    }
    return sum;
  }

  componentDidMount() {

  }

  render() {
    return (
            <table>
              <ItemList items={this.props.items}
                        addCount={this.addCount}
                        removeCount={this.removeCount}
                        increment={this.props.onIncrement}
                        decrement={this.props.onDecrement}
                        removeItem={this.props.onRemoveItem} />
              <tfoot>
                <tr>
                  <td colSpan="2">
                  <input  type="number" 
                          name="price" 
                          min="0"
                          pattern="[0-9]{1,}"
                          placeholder="Enter price" />
                  <span onClick={this.props.onCreateItem}>&#10010;</span>
                  </td>
                  <td id="sum">{this.calculateSum()} руб.</td>
                </tr>
              </tfoot>
            </table>
        
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
