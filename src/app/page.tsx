import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello how are you?</h1>
      <h2>Sub title Here</h2>
      <Link href="/about">About</Link>
    </main>
  );
}
