"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-8 gradient-text">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg">
          The required page is under development or does not exist.
        </p>
        <div className="mt-8">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-full gradient-btn"
          >
            Go Back
          </button>
          <Link href="/" legacyBehavior>
            <a className="ml-4 px-6 py-2 rounded-full bg-gray-500 text-black hover:bg-gray-400 transition">
              Go to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
