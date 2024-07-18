import prisma from "../_lib/prisma";
import Search from "./_component/search";

// SC
export default async function Page({ searchParams }) {
  console.log(searchParams);
  const todos = await prisma.todo.findMany({ where: { title: { contains: searchParams.title } } });
  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center ">
      {/* CC */}
      <Search />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
