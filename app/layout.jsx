import "@/app/globals.css";
import Header from "./_components/header";
import { angkor, josefinSans } from "./_ui/font";

// export const metadata = {
//   title: "Main Page",
//   description:""
// };

export const metadata = {
  title:{
    template:"Nike | %s",
    default:"Nike Main Page"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Header />
        <main>{children}</main>
        <footer className={angkor.className}>Copyleaf@2024</footer>
      </body>
    </html>
  );
}
