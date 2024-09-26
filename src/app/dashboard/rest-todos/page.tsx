import { Header } from '@/components';
import { TodosGrid } from '@/components/todos/todos-grid/TodosGrid';
import prisma from '@/lib/prisma';

const RestTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
  return (
    <section>
      <Header />
      <TodosGrid todos={todos} />
    </section>
  );
};

export default RestTodosPage;