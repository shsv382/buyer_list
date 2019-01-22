import React, { Component } from 'react';

import './App.css';
import ItemList from "./ItemList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        count: 1, 
        price: 100, 
        value: function() {return this.count * this.price}
      }]
    }
    this.createItem = this.createItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.calculateSum = this.calculateSum.bind(this);
  }

  createItem(e) {
    this.setState({
      items: this.state.items.concat({
        count: 1,
        price: parseInt(e.target.previousSibling.value) && parseInt(e.target.previousSibling.value) > 0 ?
                parseInt(e.target.previousSibling.value) : 1,
        value: function() {return this.count * this.price}
      })
    });
  }

  calculateSum() {
    let sum = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      sum += this.state.items[i].value();
    }
    return sum;
  }

  increment(e) {
    let items = this.state.items;
    items[parseInt(e.target.dataset.elem)].count += 1;
    this.setState({
      items: items
    });
  }

  decrement(e) {
    let items = this.state.items;
    if (items[parseInt(e.target.dataset.elem)].count > 1) {
      items[parseInt(e.target.dataset.elem)].count -= 1;
    } else if (items[parseInt(e.target.dataset.elem)].count <= 1) {
      items.splice(parseInt(e.target.dataset.elem), 1)
    }
    this.setState({
      items: items
    });
  }

  componentDidMount() {

  }

  removeItem(e) {
    let items = this.state.items;
    items.splice(parseInt(e.target.dataset.elem), 1);
    this.setState({
      items: items
    });
  }

  render() {
    return (
            <table>
              <ItemList items={this.state.items}
                        addCount={this.addCount}
                        removeCount={this.removeCount}
                        increment={this.increment}
                        decrement={this.decrement}
                        removeItem={this.removeItem} />
              <tfoot>
                <tr>
                  <td colSpan="2">
                  <input  type="number" 
                          name="price" 
                          min="0"
                          pattern="[0-9]{1,}"
                          placeholder="Enter price" />
                  <span onClick={this.createItem}>&#10010;</span>
                  </td>
                  <td id="sum">{this.calculateSum()} руб.</td>
                </tr>
              </tfoot>
            </table>
        
    );
  }
}

export default App;
