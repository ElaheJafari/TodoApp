import React from "react";
import "./App.css"

export default function Todo(props) {
    const [isOpen, setisOpen] = React.useState(false);
    const [edditeMood, setedditeMood] = React.useState(false);
    const [Des , setDes] = React.useState(props.Discription);
    return (
        <>
            <div className="todo-item">
                <h3>{props.title}</h3>
                {isOpen ? (edditeMood ? (<input value={Des} onChange = {(i)=>setDes(i.target.value)} />) : (<p onClick={() => { setedditeMood(!edditeMood) }}>{props.Discription}</p>)) : null}
                <div>
                    {props.status === "" ? (
                        <>
                            <button className="togle" onClick={props.Togle.bind(null, { ...props, status: "Confirm" })}>Confirm</button>
                            <button className="togle" onClick={props.Togle.bind(null, { ...props, status: "Cancel" })}>Cancel</button>
                        </>
                    ) : props.status}
                </div>
                <button onClick={props.edditeTodo.bind(null, props)}>Edit</button>
                <button onClick={props.deleteTodo.bind(null, props)}>Delete</button>
                <button className="Des" onClick={() => {
                    setisOpen(!isOpen)
                }}>More</button>
                {edditeMood ? (<button className="Des" onClick={() => {
                    setedditeMood(!isOpen);
                    props.edditDiscription(props,Des)
                }}>Edit</button>) : null}
            </div>
        </>
    )
}