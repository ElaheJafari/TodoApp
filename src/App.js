import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import "./App.css"

export default function App() {
    const [Data, setData] = React.useState([]);


    useEffect(() => {
        let Result = localStorage.getItem("MyData");
        if (Result)
            setData(JSON.parse(Result))
    }, [])


    useEffect(() => {
        if (Data.length !== 0) {
            localStorage.setItem("MyData", JSON.stringify(Data))
        }
    }, [Data])

    function addTodo(event) {
        let newObject = {
            id: uuidv4(),
            title: event.target[0].value,
            status: "",
            Discription: event.target[1].value,
        }
        setData([...Data, newObject])
        event.preventDefault()
    }
    function deleteTodo(item) {
        let newArr = Data.filter((i) => {
            return i.id !== item.id
        })
        setData(newArr)
    }
    function edditeTodo(item) {
        let eddite = window.prompt("")
        let newItem = { ...item, title: eddite }
        let newArr = Data.map((i) => {
            if (i.id === newItem.id) {
                return newItem
            }
            return i
        })
        setData(newArr)
    }
    function Togle(item) {
        let newArr = Data.map((i) => {
            if (i.id === item.id) {
                return item
            }
            return i
        })
        setData(newArr)
    }
    return (
        <div className="main">
            <form className="header" onSubmit={addTodo}>
                <input className="title" placeholder="Title" />
                <input className="des" placeholder="Description" />
                <input type="submit" value="Submit" />
            </form>
            <div className="continer">
                {Data.map((props, index) => {
                    return <Todo key={index} {...props} Togle={Togle} edditeTodo={edditeTodo} deleteTodo={deleteTodo} />
                })}

            </div>
        </div>
    )
}