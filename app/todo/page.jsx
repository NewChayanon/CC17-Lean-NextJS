import Link from "next/link";
import prisma from "../_lib/prisma";
import Search from "./_component/search";
import { deleteTodo } from "./_lib/action";

// SC
export default async function Page({ searchParams }) {
  console.log(searchParams);
  const todos = await prisma.todo.findMany({ where: { title: { contains: searchParams.title } } });
  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center ">
      {/* CC */}
      <Search />
      <div>
        <Link href="/todo/create" className="px-3 bg-blue-200 py-1.5">
          create todo
        </Link>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-8">
            <Link href={`/todo/${todo.id}/edit`}>{todo.title}</Link>
            <form action={deleteTodo.bind(null,todo.id)}>
              <button className="bg-red-500 px-3 py-1.5">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
