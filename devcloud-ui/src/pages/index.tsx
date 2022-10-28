import type { NextPage } from "next";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const Home: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="flex flex-col items-center justify-center flex-grow">
        <main className="w-full px-4 py-6 mx-auto lg:w-4/12">
          <h1 className="mb-3 text-2xl font-bold text-center lg:text-3xl">Welcome to the Devcloud</h1>
          <div className="px-6 mb-3">
            <div className="w-full mb-3 rounded-lg shadow-lg bg-slate-200">
              <p className="p-3">Welcome, please login first!</p>
            </div>
            <button
              onClick={() => signIn("auth0", { callbackUrl: "/dashboard" })}
              className="px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 active:bg-slate-600 hover:shadow-lg focus:outline-none"
            >
              Login
            </button>
          </div>
        </main>
      </section>

      <nav className="p-6">
        <Link href="/new-static-page">
          <span className="px-2 py-2 text-sm font-bold text-black transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-200 hover:shadow-md focus:outline-none">
            go to fully static page
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
