import React, { ReactNode } from "react";
interface IMain {
  children: ReactNode;
}
const Main: React.FC<IMain> = ({ children }) => {
  return (
    <section className="flex-1">
      <div className="lg:p-6">{children}</div>
    </section>
  );
};

export default Main;
