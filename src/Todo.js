import React from "react";

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
                                    <button onClick={props.Togle.bind(null, { ...props, status: "Confirm" })}>Confirm</button>
                                    <button onClick={props.Togle.bind(null, { ...props, status: "Cancel" })}>Cancel</button>
                                </>
                            ):props.status}
                        </div>
                        <button onClick={props.edditeTodo.bind(null, props)}>Edit</button>
                        <button onClick={props.deleteTodo.bind(null, props)}>Delete</button>
                        <button onClick={()=>{
                            setisOpen(!isOpen)
                        }}>Des</button>
                    </div>
        </>
    )
}