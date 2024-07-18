import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404 Todo with this id was not found!!!</h1>
      <Link href="/todo">Go to Page</Link>
    </>
  );
}
