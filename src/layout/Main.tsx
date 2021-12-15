import React, { ReactNode } from "react";
interface IMain {
  children: ReactNode;
}
const Main: React.FC<IMain> = ({ children }) => {
  return (
    <section className="lg:p-6 py-2 px-4 flex-1">
      <main className="flex-1">{children}</main>
    </section>
  );
};

export default Main;
