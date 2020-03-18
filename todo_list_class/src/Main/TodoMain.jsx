import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoMain.css";

/*
    함수형 컴포넌트
    const 키워드로 시작되고
    화살표 함수형으로 코드가 시작되고(function으로 시작해도 무방)
    render() 함수가 없고 바로 return 시킨다
*/
const TodoMain = ({
  input,
  todoList,
  onCreate,
  onChange,
  onKeyPress,
  onToggle,
  onDelete
}) => {
  return (
    <main className="todoTemplate">
      <div className="title">할일</div>
      <div className="form-controller">
        <TodoForm
          value={input}
          onCreate={onCreate}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="todolist-controller">
        <TodoList todoList={todoList} onToggle={onToggle} onDelete={onDelete} />
      </div>
    </main>
  );
};

export default TodoMain;
