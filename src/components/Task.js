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
            <div>
                <p>
                    <strong>{text}</strong> - do <span>{date}</span>
                    <br />
                    Potwierdzenie wykonania: <span>{finish}</span>
                    <button onClick={() => props.delete(id)}>Usuń</button>
                </p>
            </div>
        );
    }
}

export default Task;