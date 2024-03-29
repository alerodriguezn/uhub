import { getAssignmentsByUser } from "@/actions";
import { DataTable } from "@/app/dashboard/assignments/ui/DataTable";
import { redirect } from "next/navigation";
import { AddAssignmentDialog } from "./ui/AddAssignmentDialog";

export default async function AssignmentsPage() {
  const { ok, assignmentsByUser } = await getAssignmentsByUser();

  if (!ok) {
    redirect("/");
  }

  return (
    <div className="mx-2 mt-4">
      <section className="mt-4">
        <h2 className="font-bold text-3xl mb-4">Mis Tareas</h2>
        <AddAssignmentDialog/>
        <DataTable data={assignmentsByUser ?? []} />
      </section>
    </div>
  );
}
