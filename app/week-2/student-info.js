import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Yehor Rudiakov</h1>
      <Link href="https://github.com/ReNdiX9" className=" text-blue-500 underline hover:italic ">
        Link to GitHub: ReNdiX9
      </Link>
    </div>
  );
}
