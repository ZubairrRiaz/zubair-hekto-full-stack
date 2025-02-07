import Link from "next/link";

export default async function PaymentSuccess() {

    return (
      <main className="font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        <div className="mb-10">
          <h1 className="sm:text-3xl text-xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="sm:text-2xl text-xl">Amount successfully sent</h2>
        </div>
          <Link href={'/'} className="border border-white text-white p-2 rounded-md"> <button>Go Back</button> </Link>
      </main>
    );
  }
