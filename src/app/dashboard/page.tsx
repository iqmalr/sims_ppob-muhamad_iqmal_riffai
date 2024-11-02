import DashboardPage from "@/components/pages/dashboard-page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <DashboardPage />
    </div>
  );
}
