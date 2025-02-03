import React, { useState } from "react";

export default function TodoApp(props) {
    const { todoItems, addTodo, removeTodo, removeAll } = props;
    const [newTodo, setNewTodo] = useState("");
    return (
        <div>
            <h3>오늘 할일</h3>
            <ul>
                {todoItems.map((todo, index) => {
                    return <li>{todo}</li>;
                })}
            </ul>

            <div>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={() => addTodo(newTodo)}>할 일 추가</button>
                <button onClick={removeTodo}>할 일 삭제</button>
                <button onClick={removeAll}>모두 삭제</button>
            </div>
        </div>
    );
}
