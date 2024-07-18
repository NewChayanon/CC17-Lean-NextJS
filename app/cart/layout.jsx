export default function Layout({ children }) {
  return (
    <div className="flex justify-between">
      <div>{children}</div>
      <aside>Right Side Bar</aside>
    </div>
  );
}
