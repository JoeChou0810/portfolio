import React from 'react';

function TodoItem({
  id,
  completed,
  text,
  toggleCompleted,
  toggleEditing,
  deleteTodo,
}) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        {text}
        <button onClick={() => toggleEditing(id)}>Edit</button>
        <button onClick={() => deleteTodo(id)}>Delet</button>
      </li>
    </>
  );
}

export default TodoItem;
