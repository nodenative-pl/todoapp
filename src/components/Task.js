import React from 'react';
import './Task.css';

const Task = (props) => {

    const style = {
        color: 'red',
    }


    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <div className="wrapTask">
                <div className="task" ><strong style={important ? style : null}>{text}</strong> <span>do: {date}</span></div>
                <button className="doneBtn" onClick={() => props.change(id)}>Zrobione</button>
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