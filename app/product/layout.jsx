export default function Layout({ children }) {
  return (
    <div>
      <aside>Side Nav</aside>
      <article>{children}</article>
    </div>
  );
}
