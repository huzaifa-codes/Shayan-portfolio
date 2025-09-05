import React from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
   <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
