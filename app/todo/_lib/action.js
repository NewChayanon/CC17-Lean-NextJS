"use server";

import prisma from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(formData) {
  const title = formData.get("title");
  if (!title) {
    throw new Error("title is required");
  }
  await prisma.todo.create({ data: { title } });

  redirect("/todo");
}

export async function updateTodo(id, formData) {
  const title = formData.get("title");

  if (!title) {
    throw new Error("title is required");
  }
  await prisma.todo.update({ where: { id }, data: { title } });

  redirect("/todo");
}

export async function deleteTodo(id) {
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/todo");
}
