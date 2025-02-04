import React, { useState } from "react";

export default function TodoApp(props) {
    const { todoItems, addTodo, removeTodo, removeAll, triggerAsyncFunction, fetchTodo } = props;
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
            <button
                onClick={() => {
                    triggerAsyncFunction((dispatch, getState) => {
                        console.log("비동기 함수 실행", getState());

                        new Promise((resolve, reject) => {
                            setTimeout(resolve, 3000);
                        })
                            .then(() => {
                                console.log("비동기 성공", getState());
                            })
                            .finally(() => {
                                console.log("비동기 함수 종료", getState());
                            });
                    });
                }}
            >
                비동기 함수 테스트
            </button>
            <button onClick={fetchTodo}>서버에서 할 일 목록 받아오기</button>
        </div>
    );
}
