import { ReactNode } from "react";
import Navbar from "./navbar";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
