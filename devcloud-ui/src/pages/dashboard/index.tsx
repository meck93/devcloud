import { Claims, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Link from "next/link";
import CloudIcon from "../../features/dashboard/sidebar/icons/CloudIcon/CloudIcon";
import DashboardIcon from "../../features/dashboard/sidebar/icons/DashboardIcon/DashboardIcon";
import UserIcon from "../../features/dashboard/sidebar/icons/UserIcon/UserIcon";
import LinkItem from "../../features/dashboard/sidebar/LinkItem/LinkItem";

export const Dashboard: NextPage<Claims> = ({ user }) => {
  return (
    <div
      className="grid min-h-screen grid-cols-6 bg-slate-50"
      style={{ gridTemplateRows: "max-content auto min-content" }}
    >
      <nav className="flex justify-center row-start-1 row-end-2 bg-white border-b border-gray-200 rounded col-span-full">
        <div className="w-full p-3">
          <div className="flex flex-row justify-between">
            <div className="flex items-center text-xl font-bold">
              <Link href="/api/auth/logout">
                <span className="self-center whitespace-nowrap">Devcloud</span>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-sm">Welcome, {user.name}</span>
            </div>
          </div>
        </div>
      </nav>
      <aside className="flex-col hidden col-span-2 col-start-1 row-start-2 md:flex lg:col-span-1">
        <div className="flex-1 px-3 space-y-1 bg-white">
          <ul className="py-2 space-y-2">
            <LinkItem label="Overview" icon={<DashboardIcon />} href="#" />
            <LinkItem label="Cloud" icon={<CloudIcon />} href="#" />
            <LinkItem label="Users" icon={<UserIcon />} href="#" />
          </ul>
        </div>
      </aside>
      <main className="flex flex-col col-start-1 row-start-2 p-3 md:col-start-3 lg:col-start-2 col-span-full">
        <div className="text-center">Main</div>
      </main>
      <footer className="flex justify-center h-24 row-span-1 bg-white border-t border-gray-200 col-span-full">
        <div className="pt-6 text-sm">There should be some important information here</div>
      </footer>
    </div>
  );
};

export default withPageAuthRequired(Dashboard);
