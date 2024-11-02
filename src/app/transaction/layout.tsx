"use client";

import SharedLayout from "@/components/layouts/shared-layout";

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout title="Transaction">{children}</SharedLayout>;
}
