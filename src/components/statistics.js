import {CircularProgress } from "@material-ui/core"
import { useEffect, useState } from "react"
import "./statistics.css"

import {StarBorderIcon} from '@material-ui/icons/StarBorder';

import Rating from '@material-ui/lab/Rating';

const Statistics = () => {

const [level, setLevel] = useState(0);

useEffect(() => {
    const timer = setInterval(() => {
        setLevel((newLevel) => newLevel >=90 ? 90 : newLevel + 5);
    }, 70 );

    return() => {
        clearInterval(timer);
    }
}, []);


    return(
        <div className = "parent">

            <div className = "attendance">
                <h4>Attendance</h4>
                <div className = "real">
                   <span className = "spanhere">90%</span>
                   <CircularProgress size = '100px' variant = "determinate" value = {level}  thickness = "10"  />
                </div>
                <p>Last Attendance</p>
                <p>31st May, 2021</p>
            </div>

            <div className = "tests">
                <h4>Tests</h4>
                <div className = "real">
                   <span className = "spanhere">90%</span>
                   <CircularProgress size = '100px' variant = "determinate" value = {level}  thickness = "10"  />
                </div>
                <p>Last Test</p>
                <p>100%</p>
            </div>
                
            <div className = "homework"> 
                <h4>H/W Rating</h4>
                <Rating
          name="customized-empty"
          defaultValue={4.1}
          precision={0.5}
         
        />
                <p>4.1</p>
                <p>Last homework</p>
                <p>4.5</p>
            </div>

        </div>
    )
}

export default Statistics;
