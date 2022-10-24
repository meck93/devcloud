import { Claims, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../features/layout/Layout";

export const Dashboard: NextPage<Claims> = ({ user }) => {
  return (
    <Layout>
      <main className="w-full px-4 py-6 mx-auto lg:w-4/12">
        <h1 className="mb-3 text-2xl font-bold text-center lg:text-3xl">Welcome to the Devcloud</h1>
        <div className="px-6">
          <div className="w-full mb-3 rounded-lg shadow-lg bg-slate-200">
            <p className="p-3">Welcome, {user.name}</p>
          </div>
          <Link href="/api/auth/logout">
            <div className="px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 active:bg-slate-600 hover:shadow-lg focus:outline-none">
              <a>Logout</a>
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default withPageAuthRequired(Dashboard);
