import axios from "axios";
import Image from "next/image";
import prisma from "./_lib/prisma";
import { Suspense } from "react";

// fetching waterfall
const cache = {
  "get/product": [{ id: 1, name: "pepsi" }],
};

// ### setTimeOut : ...เพื่อให้เห็นภาพในการโหลด
const fetchDog = () =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      const src = res.data.message;
      resolve(src);
    }, 3000);
  });

const fetchTodo = () =>
  new Promise((resolve) => {
    setTimeout(async () => {
      const todos = await prisma.todo.findMany({});
      resolve(todos);
    }, 10000);
  });

// react => lib => swr, react-query

export default async function Page() {
  // step-1 => await
  // const src = await fetchDog();
  // const todos = await fetchTodo(); // step-3

  // step-2 => Promise.all
  // const [src, todos] = await Promise.all([fetchDog(), fetchTodo()]);
  return (
    <>
      <h1>Welcome to next APP</h1>
      {/* <Image src="/300_9.jpg" alt="Example" width={300} height={300} /> */}
      <Suspense fallback={<h1 className="text-red-500">Load u na</h1>}>
        {/* <div className="w-80 h-40 relative">
          <Image src={src} alt="dogo" fill />
        </div> */}
        <Dog />
      </Suspense>
      {/* {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))} */}
      <Suspense fallback={<h1 className="text-green-500">Load todo kub</h1>}>
        <Todo />
      </Suspense>
    </>
  );
}

// step-4 => Suspense
async function Todo() {
  const todos = await fetchTodo();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
}

async function Dog() {
  const src = await fetchDog();
  return (
    <div className="w-80 h-40 relative">
      <Image src={src} alt="dogo" fill />
    </div>
  );
}
