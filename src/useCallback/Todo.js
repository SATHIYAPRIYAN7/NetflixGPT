import React, { memo } from "react";

function Todos({ todos, addTodo }) {

    console.log("Render todos");

    return (
        <>
            <div>Todos</div>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button></>
    )
}

export default memo(Todos);