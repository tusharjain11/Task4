import "./column.css"
import Card from "./Card"

const Column = ({items}) => {

    switch(items){
        case "1": return (
            <div className = "columnCard">
            <Card color ="green"/>
        </div>
        )
        case "2" :
            return (
                <div className = "columnCard">
                <Card color = "red"/>
                <Card color = "green"/>
            </div>
            )
        case "3":
            return (
                <div className = "columnCard">
                 <Card color = "green"/>
                 <Card color = "green"/>
                 <Card color = "green"/>
            </div>
            )
        case "4": 
        return (
            <div className = "columnCard">
            <Card color = "red"/>
            <Card color = "red"/>
            <Card color = "green"/>
            <Card color = "green"/>
        </div>
        )
    }

    return (
        <div className = "columnCard">
        <Card/>
        <Card/>
            <Card/>
            <Card/>
    </div>
    )
  
}

export default Column;
