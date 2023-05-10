import EditForm from './EditForm';
import TodoItem from './TodoItem';

function TodoList({
  todos,
  toggleCompleted,
  toggleEditing,
  deletTodo,
  updateTodo,
}) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, completed, text, editing } = v;
          return editing ? (
            <EditForm key={id} text={text} id={id} updateTodo={updateTodo} />
          ) : (
            <TodoItem
              key={id}
              id={id}
              completed={completed}
              text={text}
              toggleCompleted={toggleCompleted}
              toggleEditing={toggleEditing}
              deleteTodo={deletTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
