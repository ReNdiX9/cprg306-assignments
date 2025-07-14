"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
            <br />
            <img src={user.photoURL} className="w-25 rounded outline-1 outline-offset-2" alt={user.displayName} />
          </p>
          <button
            onClick={handleSignOut}
            type="button"
            className="text-lg bg-blue-500 text-white py-1 mt-4 outline-blue-300 outline-2 cursor-pointer rounded"
          >
            Sign out
          </button>
          <Link href="/week-9/shopping-list/" className="ml-4 underline italic">
            Go to shopping page
          </Link>
        </>
      ) : (
        <>
          <button
            onClick={handleSignIn}
            type="button"
            className="text-lg bg-blue-500 text-white py-1 mt-4 outline-blue-300 outline-2 cursor-pointer rounded outline-offset-2"
          >
            Sign in with GitHub
          </button>
          <Link href="/week-9/shopping-list/" className="ml-4 underline italic">
            Go to shopping page
          </Link>
        </>
      )}
    </main>
  );
}
