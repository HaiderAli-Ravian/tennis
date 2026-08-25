import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#dashboard-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-surface focus:px-4 focus:py-3 focus:text-text-primary"
      >
        Skip to dashboard content
      </a>
      <DashboardShell>{children}</DashboardShell>
    </>
  );
}
