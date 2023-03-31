import React from "react";

const Layout = ({ section1, section2, footer }) => {
  return (
    <div className="flex flex-col">
      {" "}
      <main className="flex flex-col">
        <section className="font-playfair flex justify-between w-4/5 mx-auto mt-10">
          <div className="basis-2/6 p-3 min-h-[350px] border-r-[1px] border-white-0.5">
            {section1.left}
          </div>
          <div className="basis-2/6 p-3  border-r-[1px] border-white-0.5">
            {section1.center}
          </div>
          <div className="basis-2/6 p-3">{section1.right}</div>
        </section>
        <section className="font-playfair flex justify-between w-4/5 mx-auto mt-10">
          {section2}
        </section>
      </main>
      <footer className="font-playfair flex justify-between w-4/5 mx-auto mt-10">
        {footer}
      </footer>
    </div>
  );
};

export default Layout;
