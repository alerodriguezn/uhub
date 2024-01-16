import { getAssignmentsByUser } from "@/app/actions";
import { DataTable } from "@/app/dashboard/assignments/ui/dataTable";

import Link from "next/link";
import { FilePlus } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AssignmentsPage() {
  const { ok, assignmentsByUser } = await getAssignmentsByUser();

  if (!ok) {
    redirect("/");
  }

  console.log(assignmentsByUser);

  return (
    <div className="mx-2 mt-4">
      <section className="mt-4">
        <h2 className="font-bold text-3xl mb-4">Mis Tareas</h2>
        <Link
          href="/dashboard/assignments/new"
          className="flex bg-[#3b82f6] w-full sm:w-1/6 justify-center h-8 items-center gap-2 rounded hover:bg-sky-600 "
        >
          <FilePlus />
          <span>Nueva Tarea</span>
        </Link>
        <DataTable data={assignmentsByUser ?? []} />
      </section>
    </div>
  );
}
