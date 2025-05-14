import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl m-5 text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="  text-blue-500 underline  hover:italic">
        Go to week-2
      </Link>
    </main>
  );
}
