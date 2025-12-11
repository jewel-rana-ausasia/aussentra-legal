// app/not-found.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
