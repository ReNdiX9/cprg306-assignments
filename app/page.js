import Link from "next/link";

export default function Home() {
  let styleLink =
    "text-blue-500 block w-25  border-b-2 border-transparent hover:border-blue-500 transition-all duration-500";

  return (
    <main>
      <h1 className="text-2xl m-5 text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className={styleLink}>
        Go to week-2
      </Link>
      <Link href="/week-3" className={styleLink}>
        Go to week-3
      </Link>
      <Link href="/week-4" className={styleLink}>
        Go to week-4
      </Link>
      <Link href="/week-5" className={styleLink}>
        Go to week-5
      </Link>
      <Link href="/week-6" className={styleLink}>
        Go to week-6
      </Link>
      <Link href="/week-7" className={styleLink}>
        Go to week-7
      </Link>
      <Link href="/week-8" className={styleLink}>
        Go to week-8
      </Link>
      <Link href="/week-9" className={styleLink}>
        Go to week-9
      </Link>
    </main>
  );
}
