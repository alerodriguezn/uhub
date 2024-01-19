import { DragDropTodos } from "@/components/todos/dragDropTodos";

export default function DashboardPage() {
  return (
    <div className="m-4 flex gap-2">
      <div className="w-full flex ">
        <DragDropTodos/>
      </div>

      
    </div>
  );
}