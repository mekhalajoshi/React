import React, { Component } from 'react';
import List from './List';
import Form from './Form';
// import Button from './Button';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      todoList: [],
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handelSubmit = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item],
      item: '',
    });
  }



  render() {
    const { todoList } = this.state;
    return (
      <div className=' ui container'>
        <div className=' ui segment'>
          <h1 className='ui center aligned header'>Todo List App</h1>
          <div className="ui divider"></div>
          <div>
            <Form handelSubmit={this.handelSubmit} ></Form>

          </div>
          <div className="ui horizontal divider"><h4 className="ui header">Todo Items</h4></div>
          <List list={todoList}></List>
        </div>
      </div>
    );
  }
}