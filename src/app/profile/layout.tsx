"use client";

import SharedLayout from "@/components/layouts/shared-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout title="Dashboard">{children}</SharedLayout>;
}
