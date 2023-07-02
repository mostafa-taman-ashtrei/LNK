import "@/public/styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
