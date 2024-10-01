import { Header, NewTodoServerActions, TodosGridServerActions } from '@/components';
import prisma from '@/lib/prisma';
import { getUserServerSession } from '@/todos/actions/todo-actions';
import { redirect } from 'next/navigation';

const ServerTodosPage = async () => {
  const user = await getUserServerSession();

  if (!user) redirect('/api/auth/signin');
  const todos = await prisma.todo.findMany({ where: { userId: user.id }, orderBy: { description: 'asc' } });
  return (
    <section>
      <Header />
      <NewTodoServerActions />

      <h3 className="text-3xl font-semibold mb-4">Server Todos</h3>
      <TodosGridServerActions todos={todos} />
    </section>
  );
};

export default ServerTodosPage;
