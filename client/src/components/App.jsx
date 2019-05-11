import React from 'react';
import List from './List.jsx'
import Form from './Form.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      List: []
    }
    this.handleFetchData = this.handleFetchData.bind(this);
  }
  
  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData() {
    axios
    .get('/api/list')
    .then(({data}) => {
      this.setState({
        List: data
      });
    })
  }

  render() {
    return (
      <div>
        <Form handleFetchData={this.handleFetchData}/>
        <List list={this.state.List} handleFetchData={this.handleFetchData}/>
      </div>
    )
  }
}

export default App;