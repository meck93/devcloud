import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return <section className="flex flex-col items-center justify-center min-h-screen bg-slate-50">{children}</section>;
}
