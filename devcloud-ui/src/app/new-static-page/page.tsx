/* eslint-disable @next/next/no-html-link-for-pages */
// currently, the nextjs Link component doesn't work
// it leads to a client-side crash when Link is used in a server component

export default function Page() {
  return (
    <main className="w-full px-4 py-6 mx-auto">
      <h1 className="mb-3 text-2xl font-bold text-center lg:text-3xl">Welcome to the Devcloud</h1>
      <div className="px-6 mb-3 rounded-lg shadow-lg bg-slate-200">
        <p className="p-3">This is page rendered as a React Server Component (Nextjs 13).</p>
        <p className="p-3">It is fully static and does not required JavaScript to work.</p>
      </div>
      <div className="flex justify-center">
        <a href="/">
          <div className="px-6 py-3 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 hover:shadow-lg focus:outline-none">
            Go to Startpage
          </div>
        </a>
      </div>
    </main>
  );
}
/* eslint-enable @next/next/no-html-link-for-pages */
