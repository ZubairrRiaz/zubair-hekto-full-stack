'use client'
import Link from "next/link";


const Error404 = () => (
  <div className="container mx-auto py-16 px-4 bg-white text-black text-center">
    <h1 className="t5xl font-bold mb-8">404 - Page Not Found</h1>
    <p>The page you are looking for does not exist or has been moved.</p>
    <Link href="/">
        Go Home
    </Link>
  </div>
);

export default Error404