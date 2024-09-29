import { Header, NewTodoServerActions, TodosGridServerActions } from '@/components';
import prisma from '@/lib/prisma';

const ServerTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
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
