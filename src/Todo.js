import React from "react";
import "./App.css"

 export default function Todo(props){
    const [isOpen , setisOpen] = React.useState(false);
    return(
        <>
        <div className="todo-item">
                        <h3>{props.title}</h3>
                        {isOpen? (<p>{props.Discription}</p>) : null}
                        <div>
                            {props.status === "" ? (
                                <>
                                    <button className="togle" onClick={props.Togle.bind(null, { ...props, status: "Confirm" })}>Confirm</button>
                                    <button className="togle" onClick={props.Togle.bind(null, { ...props, status: "Cancel" })}>Cancel</button>
                                </>
                            ):props.status}
                        </div>
                        <button onClick={props.edditeTodo.bind(null, props)}>Edit</button>
                        <button onClick={props.deleteTodo.bind(null, props)}>Delete</button>
                        <button className="Des" onClick={()=>{
                            setisOpen(!isOpen)
                        }}>More</button>
                    </div>
        </>
    )
}