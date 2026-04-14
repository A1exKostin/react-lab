import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos, Todo } from './todos.js';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');

  // Используем useMemo для кеширования результата фильтрации.
  // getVisibleTodos будет вызываться только при изменении todos или showActive.
  // Ввод текста в input (изменение text) не вызовет пересчет visibleTodos.
  const visibleTodos = useMemo(() => 
    getVisibleTodos(todos, showActive), 
    [todos, showActive]
  );

  function handleAddClick() {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
