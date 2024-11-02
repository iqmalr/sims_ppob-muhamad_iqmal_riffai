"use client";

import SharedLayout from "@/components/layouts/shared-layout";

export default function TopUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout title="Top Up">{children}</SharedLayout>;
}
