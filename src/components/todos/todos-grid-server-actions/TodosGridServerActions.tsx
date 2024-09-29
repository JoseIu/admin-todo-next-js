'use client';

import { TodoI } from '@/interfaces/Todo.interface';
import { toggelTodo } from '@/todos/actions/todo-actions';
import { TodoItem } from '../todo-item/TodoItem';

type Props = {
  todos: TodoI[];
};

export const TodosGridServerActions = ({ todos }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
      {!todos.length ? (
        <span>No tienes todos</span>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggelTodo} />)
      )}
    </div>
  );
};
