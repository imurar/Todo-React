// rafceと書いて補完機能で関数コンポーネントを作成
import React from 'react';
import Todo from "./Todo"

const TodoList = ({ todos, toggleTodo }) => {
//mapとは todosの配列の中身を一つずつ取り出す。
  return todos.map((todo) => (
      <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
    ));
};
//export default はコンポーネントをどのファイルでも使えるようにする
export default TodoList;