import { UserButton, useUser } from "@clerk/clerk-react";
import { useClerkSWR } from "../utils/fetchers";

export default function Home() {
  const { firstName } = useUser();
  const { data } = useClerkSWR("/api/hello");
  
  return (
    <>
      <header>
        <UserButton />
      </header>
      <main>
        <div>Hello, {firstName}!</div>
        <div>Backend data: {JSON.stringify(data)}</div>
      </main>
    </>
  );
}
