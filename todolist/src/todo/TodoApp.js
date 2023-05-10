import React, { useState } from 'react';
import './TodoApp.css';
import AddForm from './AddForm';
import TodoList from './TodoList';

function TodoApp() {
  // todo列表用
  // completed 為後續判斷完成與否用
  const [todos, setTodos] = useState([
    { id: 1, text: '複習react', completed: true, editing: false },
    { id: 2, text: 'code Todolist', completed: false, editing: false },
  ]);

  // 過濾呈現項目用選項
  const [currentFilter, setCurrentFilter] = useState('All');
  const filterOptions = ['All', 'Active', 'Completed'];

  const getFilterTodos = () => {
    if (currentFilter === 'All') return todos;

    if (currentFilter === 'Active') {
      return todos.filter((v, i) => {
        return v.completed === false;
      });
    }

    if (currentFilter === 'Completed') {
      return todos.filter((v, i) => {
        return v.completed === true;
      });
    }
  };

  //新增一筆資料
  const addTodo = (text) => {
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    };

    // 拷貝 -> 加入新陣列 -> 設定回state
    setTodos([newTodo, ...todos]);
  };

  // 切換某筆資料的completed值
  const toggleCompleted = (id) => {
    // 拷貝 -> 加入新陣列 -> 設定回state
    const newTodos = todos.map((v) => {
      // toggle
      if (v.id === id) return { ...v, completed: !v.completed };
      return { ...v };
    });

    setTodos(newTodos);
  };

  // 切換某筆資料的editing值
  const toggleEditing = (id) => {
    // 拷貝 -> 加入新陣列 -> 設定回state
    const newTodos = todos.map((v) => {
      if (v.id === id) return { ...v, editing: !v.editing };

      // 設定其他非選中的項目 'editing: false'
      // 同時間只能有一個被編輯
      return { ...v, editing: false };
    });

    setTodos(newTodos);
  };

  const updateTodo = (id, text) => {
    // 拷貝 -> 加入新陣列 -> 設定回state
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, text: text, editing: false };

      return { ...v };
    });

    setTodos(newTodos);
  };

  // 刪除某筆資料
  const deleteTodo = (id) => {
    const newTodos = todos.filter((v, i) => {
      // 拷貝 -> 加入新陣列
      return id !== v.id;
    });

    //  設定回state
    setTodos(newTodos);

    // edit test
  };

  return (
    <>
      <AddForm addTodo={addTodo} />
      <TodoList
        todos={getFilterTodos()}
        toggleCompleted={toggleCompleted}
        toggleEditing={toggleEditing}
        deletTodo={deleteTodo}
        updateTodo={updateTodo}
      />

      {/* 過濾按鈕 */}
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              currentFilter === v ? 'filter-btn-active' : 'filter-btn-normal'
            }
            onClick={() => {
              setCurrentFilter(v);
            }}
          >
            {v}
          </button>
        );
      })}
    </>
  );
}

export default TodoApp;
