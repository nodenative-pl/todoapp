import React from 'react';
import Task from './Task'
import './Tasklist.css'

const TaskList = props => {



    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)


    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active">
                <p>ZADANIA DO WYKONANIA:</p>
                {activeTasks.length > 0 ? activeTasks : <p>brak zadań do wykonania.</p>}
            </div>
            <div className="done">
                <p>WYKONANE ZADANIA: <em>({done.length})</em></p>
                {doneTasks}
            </div>
        </>
    );
}

export default TaskList;