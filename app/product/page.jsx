export default async function Page() {
  throw new Error("Intentional throw error")
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <h1>Product Page</h1>;
}
