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
        important: true,
        active: true,
        finishDate: null
      }, {
        id: 3,
        text: 'Nauczyć się JavaScript',
        date: '2019-07-25',
        important: false,
        active: true,
        finishDate: null
      }, {
        id: 4,
        text: 'Nauczyć się React styled-components',
        date: '2019-08-20',
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }
  render() {
    return (
      <div className="App">
        TODO App
        <AddTask />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;