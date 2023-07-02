import Nav from "@/components/Nav";
import "@/public/styles/globals.css";
import Providers from "./provider";

export const metadata = {
  title: "LNK",
  description: "Manage all your links in one place.",
};

interface props {
  children: React.ReactNode;
}

const RootLayout: React.FC<props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
