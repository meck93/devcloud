import type { NextPage } from "next";

export const BasicAuthPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="flex flex-col items-center justify-center flex-grow">
        <main className="w-full px-4 py-6 mx-auto lg:w-4/12">
          <h1 className="mb-3 text-2xl font-bold text-center lg:text-3xl">Basic Auth Page</h1>
        </main>
      </section>
    </div>
  );
};

export default BasicAuthPage;
