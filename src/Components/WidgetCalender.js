import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class WidgetCalender extends Component {
    constructor()
    {
        super();
        this.state = {
            date: new Date(),
          }
    }
    onChange = date => this.setState({ date });
    render() {
        return (
            <div className="graphWidget">
                <div className="widgetTitle">Calender</div>
                <div className="widgetValue">         
                    <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                </div>
            </div>
           
        )
    }
}

