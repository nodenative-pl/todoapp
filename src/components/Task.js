import React from 'react';
import './Task.css';

const Task = (props) => {


    const { text, date, id, active, finishDate } = props.task;

    if (active) {
        return (
            <div className="wrapTask">
                <div className="task" ><strong>{text}</strong> <span>do: {date}</span></div>
                <button className="doneBtn" onClick={() => props.change(id)}>Zakończ</button>
                <button className="deleteBtn" onClick={() => props.delete(id)}>Usuń</button>
            </div >
        );
    }
    else {

        const finish = new Date(finishDate).toLocaleString()
        return (
            <div className="wrapTaskDone">

                <div className="taskDone" ><strong>{text}</strong> - do <span>{date}</span>
                    <br></br>Potwierdzenie wykonania: <span>{finish}</span>
                </div>
                <button className="deleteBtn" onClick={() => props.delete(id)}>Usuń</button>


            </div>
        );
    }
}

export default Task;