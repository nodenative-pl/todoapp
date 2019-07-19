import React, { Component } from 'react';

class AddTask extends Component {
    state = {}
    render() {
        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} />
                <input type="checkbox" checked={this.state.checked} />
            </div>
        );
    }
}

export default AddTask;