import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LogoutButton from '@/components/admin/LogoutButton';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 opacity-80">Welcome, {session?.user?.email}</p>

      <div className="mt-6 rounded-lg border p-4">
        <p>Only logged-in admin can view this page.</p>
        <LogoutButton />
      </div>
    </main>
  );
}
