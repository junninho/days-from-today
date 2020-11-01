import React from 'react';
import { TextField } from '@material-ui/core';
import moment from 'moment';
import './Input.css';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            final: moment().format('dddd, MMMM Do YYYY').toString()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    addDays(days) {
        let output = moment().add(days, 'days').format('dddd, MMMM Do YYYY').toString();
        this.setState({final: output});
    }

    handleChange(event) {
        this.addDays(event.target.value);
    }

    render() {
        return (
            <div>
                <TextField
                        id="outlined-number"
                        className="number-input"
                        label="Number"
                        type="number"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        defaultValue="0"
                        onChange={this.handleChange}
                />
                <p> days from today will be: </p>
                <p>{this.state.final}</p>
            </div>
        );
    }
}