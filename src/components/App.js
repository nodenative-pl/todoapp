import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Poszerzyć wiedzę o React',
        date: '2019-08-30',
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Poszerzyć wiedzę o Sass',
        date: '2019-07-31',
        active: true,
        finishDate: null
      }, {
        id: 2,
        text: 'Poszerzyć wiedzę o Css',
        date: '2019-07-20',
        active: true,
        finishDate: null
      }, {
        id: 3,
        text: 'Poszerzyć wiedzę o JavaScript',
        date: '2019-07-25',
        active: true,
        finishDate: null
      }, {
        id: 4,
        text: 'Znaleźć pracę',
        date: '2019-08-20',
        active: true,
        finishDate: null
      }
    ]
  }

  deleteTask = (id) => {

    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)

    this.setState({
      tasks
    })

  }

  changeTaskStatus = (id) => {

    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })

    this.setState({
      tasks
    })
  }

  addTask = (text, date) => {

    const task = {
      id: this.state.tasks.length + 1,
      text,
      date,
      active: true,
      finishDate: null
    }

    const tasks = [...this.state.tasks]
    tasks.push(task)

    this.setState({
      tasks
    })
    return true
  }


  render() {
    return (
      <div className="App">
        <div id="top"><div id="logo"><strong>TODO APP</strong><br /><span>BY MATEUSZ PASICH</span></div></div>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div >
    );
  }
}

export default App;