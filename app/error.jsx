"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
