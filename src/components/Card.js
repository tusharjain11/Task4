import "./card.css"


const Card = ({color}) => {
    if(color === "red")
    {
        return (
            <div className = "cardContainer">
                <div className = " cardHeading">
                    HomeWork
                </div>
                <div className = "cardBody">
                    <p>timing 12 - 1pm</p>
                    <p>Lorem ipsum </p>
                </div>
            </div>
        )
    }
    else {

        
        return (
            <div className = "cardContainer">
                <div className = " cardHeading2">
                    ClassWork
                </div>
                <div className = "cardBody">
                    <p>timing 12 - 1pm</p>
                    <p>Lorem ipsum </p>
                </div>
            </div>
        )

    }
  
}

export default Card;
