import React from 'react';
import axios from 'axios';

class ListEntry extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      updateForm: false,
      updateName: this.props.name,
      updatePriority: this.props.priority
    }
    this.handleShowUpdate = this.handleShowUpdate.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleUpdatePriorityChange = this.handleUpdatePriorityChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  handleShowUpdate() {
    this.setState({
      updateForm: !this.state.updateForm
    })
  }

  handleUpdateInput(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleUpdatePriorityChange(e) {
    this.setState({
      updatePriority: e.target.value
    });
  }

  handleUpdateSubmit(e) {
    e.preventDefault();
    let{updateName, updatePriority} = this.state;
    console.log(updatePriority, 'from updateSubmit');
    let {_id} = this.props.item;
    axios
    .patch(`/api/update/${_id}`, {name: updateName, priority: updatePriority})
    .then(() => {
      console.log('updated');
      this.props.handleFetchData();
    })
    .catch(err => console.error(err));
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <div>Todo: {this.props.item.name}</div>
        <div>Priority: {this.props.item.priority}</div>
        
        {this.state.updateForm ? 
        <div>
            <input onChange={(e) => {this.handleUpdateInput(e)}} 
                    name="updateName" type="text"/>
            <select value={this.state.updatePriority} 
                    onChange={(e) => {this.handleUpdatePriorityChange(e)}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <button onClick={(e) => {this.handleUpdateSubmit(e)}}>submit</button>
        </div>: 
        <span></span>}
        <button onClick={this.handleShowUpdate}>update</button>
      </div>
    )
  }
}

export default ListEntry;