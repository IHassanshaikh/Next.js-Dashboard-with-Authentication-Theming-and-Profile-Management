import Dashboard from "@/pages/Dashboard";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import scss from "../components/Layout/Layout.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  // Check the session status: 'loading', 'authenticated', or 'unauthenticated'
  if (status === "loading") {
    return (
      <main className={scss.main}>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className={scss.main}>
      {status === "authenticated" ? <Dashboard /> : <Login />}
    </main>
  );
};

export default Home;
