import React from 'react';
import axios from 'axios';

class Form extends React.Component{
  constructor() {
    super();
    this.state = {
      name: '',
      priority: 1
    }
    this.handleInput = this.handleInput.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
  }
  
  handleInput(e) {
    e.preventDefault();
    let {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handlePriorityChange(e) {
    e.preventDefault();
    let {value} = e.target
    this.setState({
      priority: value
    }, () => console.log(this.state))
  }

  handleSubmit(e) {
    e.preventDefault()
    let {name, priority} = this.state;
    axios
    .post('/api/create', {name, priority})
    .then(() => {
      this.props.handleFetchData();
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <input onChange={(e) => {this.handleInput(e)}} 
                  name="name" type="text"/>
          <select value={this.state.priority} 
                  onChange={(e) => {this.handlePriorityChange(e)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <button onSubmit={(e) => {this.props.handleSubmit(e)}}>submit</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;