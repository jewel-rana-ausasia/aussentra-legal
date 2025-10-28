'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const handleLogout = () => {
    // ends session and redirects to homepage
    signOut({ callbackUrl: '/' });
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 rounded border px-3 py-1 text-sm hover:bg-gray-100"
    >
      Logout
    </button>
  );
}
