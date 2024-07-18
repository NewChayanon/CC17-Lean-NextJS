"use server";

import prisma from "@/app/_lib/prisma";
import { redirect } from "next/navigation";

export async function createTodo(formData) {
  const title = formData.get("title");
  if (!title) {
    throw new Error("title is required");
  }
  await prisma.todo.create({ data: { title } });

  redirect("/todo");
}

export async function updateTodo(formData) {
  const title = formData.get("title");
  const id = +formData.get("id");
  if (!title) {
    throw new Error("title is required");
  }
  await prisma.todo.update({ where: { id}, data: { title } });

  redirect("/todo");
}
