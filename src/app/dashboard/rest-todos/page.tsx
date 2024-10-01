import { Header, NewTodo } from '@/components';
import { TodosGrid } from '@/components/todos/todos-grid/TodosGrid';
import prisma from '@/lib/prisma';
import { getUserServerSession } from '@/todos/actions/todo-actions';
import { redirect } from 'next/navigation';

const RestTodosPage = async () => {
  const user = await getUserServerSession();

  if (!user) redirect('/api/auth/signin');
  const todos = await prisma.todo.findMany({ where: { userId: user.id }, orderBy: { description: 'asc' } });

  console.log({ todos });
  return (
    <section>
      <Header />
      <NewTodo />
      <TodosGrid todos={todos} />
    </section>
  );
};

export default RestTodosPage;
