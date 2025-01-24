'use client'
import Link from "next/link";


const Error404 = () => (
  <div className="container mx-auto py-16 px-4 bg-white text-black text-center">
    <h1 className="t5xl font-bold mb-8">404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <Link href="/">
      <a className="border py-10 border-black px-6 mt-14 rounded-md">
        Go Home
      </a>
    </Link>
  </div>
);

export default Error404