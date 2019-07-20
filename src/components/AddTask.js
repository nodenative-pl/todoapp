import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        date: this.minDate
    }

    handleDate = e => {
        this.setState({
            date: e.target.value
        })
    }
    handleChange = e => {
        this.setState({
            text: e.target.value,
        })
    }
    handleClick = () => {
        const { text, date } = this.state;


        if (text.length > 2 && this.state.date >= this.minDate) {
            const add = this.props.add(text, date);
            if (add) {
                this.setState({
                    text: '',
                    date: this.minDate
                })
            }
        } else alert('Zadanie powinno składac się minimum z 3 znaków, a data powinna odwoływać się do przyszłości')

    }


    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <input id="addTask" type="text" placeholder="Wprowadź zadanie..." value={this.state.text} onChange={this.handleChange} />
                <label htmlFor="date">Deadline:</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                <button id="addTaskButton" onClick={this.handleClick}>Dodaj</button>
            </div>
        );
    }
}


export default AddTask;