import React from "react"
import "./personal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Personal  = () => {
    return(
        <div className = "parentContainer">
            <div className = "top-container">
                <h4>Batch Name | PHY_B1</h4>
                <img className = " note "src = "assets/edit.png"></img>
            </div>
            <div className = "bodyContainer">
                <div className = "lineOne">
                  <img src = "assets/profile.jpg" alt = "my photo"></img>
                  <span>Marvin Mckinney</span>
                  <img src = "assets/add-friend.png" className = "friend"></img>
                  
                </div>
                
                <div className = "lineTwo">
                    <img src = "assets/user.png"></img>
                   <span>125 Students </span>
                </div>
                
                <div className = "lineThree">
                  <div className = "leftSide">
                    <img className = "time" src = "assets/time.png"></img>
                    <div>
                     <p>Upcoming {`<Activity>`}</p>
                     <p>Thu, 25th May</p>
                     <p>12:00 PM - 12:00PM</p>
                     </div>
                 </div>
                 <div className = "rightSide">
                     <button>View</button>
                </div> 
                </div>
            </div>
        </div>
    )
}

export default Personal;
