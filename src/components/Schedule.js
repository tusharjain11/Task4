import React from 'react'
import './schedule.css'
import Column from './Column.js'
const Schedule = () => {
    return (
        <div className = "parentFor">
            <div className = "dayBar">
                <p>MON</p>
                <p>TUE</p>
                <p>WED</p>
                <p>THU</p>
                <p>FRI</p>
                <p>SAT</p>
                <p>SUN</p>
            </div>
            <div className = "timeTable">
                <Column items = "1"/>
                <Column items = "4" />
                <Column items = "4" />
                <Column items = "3" />
                <Column items = "4" />
                <Column items = "2" />
                <Column items = "4" />
            
            </div>
        </div>
    )
}

export default Schedule