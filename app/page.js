import Link from "next/link";

export default function Home() {
  let styleLink = "text-blue-500 underline hover:italic hover:no-underline block";

  return (
    <main>
      <h1 className="text-2xl m-5 text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className={styleLink}>
        Go to week-2
      </Link>
      <Link href="/week-3" className={styleLink}>
        Go to week-3
      </Link>
    </main>
  );
}
