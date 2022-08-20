import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [Data, setData] = React.useState([{ id: 1, title: "saberi", status: "", Discription: "Bad Akhlagh" }]);

    function addTodo(event) {
        let newObject = {
            id: uuidv4(),
            title: event.target[0].value,
            status: "",
            Discription: ""
        }

        setData([...Data, newObject])
        event.preventDefault()
    }
    function deleteTodo(item) {
        let newArr = Data.filter((i) => {
            return i.id != item.id
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
    return (
        <div className="main">
            <form className="header" onSubmit={addTodo}>
                <input className="title" />
                <input type="submit" value="Submit" />
            </form>
            <div className="continer">
                {Data.map((props, index) => {
                    return <div className="todo-item" key={index}>
                        <h3>{props.title}</h3>
                        <div>
                            <button>Confirm</button>
                            <button>Cancel</button>
                        </div>
                        <button onClick={edditeTodo.bind(null, props)}>Edit</button>
                        <button onClick={deleteTodo.bind(null, props)}>Delete</button>
                    </div>
                })}

            </div>
        </div>
    )
}