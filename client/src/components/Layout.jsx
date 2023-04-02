import React from "react";

const Layout = ({ section1, section2, footer }) => {
  return (
    <div className="ss:flex ss:flex-col p-4">
      <main className="flex flex-col items-center">
        <section className="font-playfair flex flex-col md:flex-row justify-between w-full ss:w-4/5  mx-auto mt-10 ">
          <div className="w-full lg:basis-2/6 p-3 border-white-0.5 md:border-r-[1px]">
            {section1.left}
          </div>
          <div className="w-full lg:basis-2/6 p-3 border-white-0.5 md:border-r-[1px]">
            {section1.center}
          </div>
          <div className="w-full lg:basis-2/6 p-3">{section1.right}</div>
        </section>
        <section className="font-playfair flex justify-between w-full ss:w-4/5 mx-auto mt-10">
          {section2}
        </section>
      </main>
      <footer className="font-playfair flex justify-between w-full ss:w-4/5 mx-auto mt-10"></footer>
    </div>
  );
};

export default Layout;
