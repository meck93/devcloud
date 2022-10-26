export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col items-center justify-center min-h-screen bg-slate-50">{children}</section>;
}
