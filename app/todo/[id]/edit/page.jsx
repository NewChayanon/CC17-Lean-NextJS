import prisma from "@/app/_lib/prisma";
import { updateTodo } from "../../_lib/action";

export default async function Page({ params }) {
  const todo = await prisma.todo.findUnique({ where: { id: +params.id } });
  if (!todo) {
  }
  console.log(todo);
  return (
    <form action={updateTodo}>
      <input type="text" name="title" className="border border-gray-200 px-3 py-1.5" defaultValue={todo.title} />
      <input type="hidden" name="id" className="border border-gray-200 px-3 py-1.5" defaultValue={todo.id} />
      <button>Update TODO</button>
    </form>
  );
}
