import React, { useEffect, useState } from 'react';

function EditForm({ id, text, updateTodo }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(text);
  }, [text]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          updateTodo(id, inputValue);
        }}
      >
        儲存
      </button>
    </>
  );
}

export default EditForm;
