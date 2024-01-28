import { Sidebar } from "@/components";
import { TopMenu } from "@/components/";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />

      <div className="w-full">
        <TopMenu />
        {children}
      </div>
    </main>
  );
}
