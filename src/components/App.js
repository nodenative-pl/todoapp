import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Nauczyć się react',
        date: '2019-08-30',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Nauczyć się Sass',
        date: '2019-07-31',
        important: true,
        active: true,
        finishDate: null
      }, {
        id: 2,
        text: 'Nauczyć się Css',
        date: '2019-07-20',
        important: false,
        active: true,
        finishDate: null
      }, {
        id: 3,
        text: 'Nauczyć się JavaScript',
        date: '2019-07-25',
        important: true,
        active: true,
        finishDate: null
      }, {
        id: 4,
        text: 'Znaleźć pracę',
        date: '2019-08-20',
        important: false,
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

  render() {
    return (
      <div className="App">
        <div id="top"><div id="logo"><strong>TODO APP</strong><br /><span>BY MATEUSZ PASICH</span></div></div>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div >
    );
  }
}

export default App;