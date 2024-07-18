export default function Page() {
  return (
    <form action={createTodo}>
      <input type="text" name="title" className="border border-gray-200 px-3 py-1.5" />
      <button>Create Todo</button>
    </form>
  );
}

async function createTodo(formData) {
  "use server";
  console.log(formData.get("title"));
}
