import { useSession } from "next-auth/react";

export default function EnsureAuthenticated({ children }: { children: JSX.Element }): JSX.Element {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  return children;
}
