import React, { useState } from 'react';

function AddForm({ addTodo }) {
  // 輸入欄位用
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        type="text"
        value={inputValue}
        name=""
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(inputValue);

            // 清空輸入框
            setInputValue('');
          }
        }}
      ></input>
      <button
        onClick={() => {
          addTodo(inputValue);

          // 清空輸入框
          setInputValue('');
        }}
      >
        新增
      </button>
    </>
  );
}

export default AddForm;
