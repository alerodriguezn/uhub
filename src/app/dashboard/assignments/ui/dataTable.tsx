"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Assignment } from "@/interfaces";
import { FilePlus } from "lucide-react";
import Link from "next/link";
import { assignments } from '@/db/schema';

// const data: Assignment[] = [
//   {
//     id: "1",
//     date: '2024-01-01',
//     title: "Task 1",
//     isCompleted: false,
//     description: "Description 1",
//     weighting: 5,
//     type: "task",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "2",
//     date: '2024-01-01',
//     title: "Task 2",
//     isCompleted: false,
//     description: "Description 2",
//     weighting: 9,
//     type: "quiz",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "3",
//     date: '2024-01-01',
//     title: "Task 3",
//     isCompleted: false,
//     description: "Description 3",
//     weighting: 7,
//     type: "exam",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "4",
//     date: '2024-01-01',
//     title: "Task 4",
//     isCompleted: false,
//     description: "Description 4",
//     weighting: 0.2,
//     type: "project",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "5",
//     date: '2024-01-01',
//     title: "Task 5",
//     isCompleted: false,
//     description: "Description 5",
//     weighting: 0.2,
//     type: "exam",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "6",
//     date: '2024-01-01',
//     title: "Task 6",
//     isCompleted: false,
//     description: "Description 6	",
//     weighting: 0.2,
//     type: "task",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "7",
//     date: '2024-01-01',
//     title: "Task 7",
//     isCompleted: false,
//     description: "Description 7",
//     weighting: 0.2,
//     type: "project",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "8",
//     date: '2024-01-01',
//     title: "Task 8",
//     isCompleted: false,
//     description: "Description 8",
//     weighting: 0.2,
//     type: "task",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
//   {
//     id: "9",
//     date: '2024-01-01',
//     title: "Task 9",
//     isCompleted: false,
//     description: "Description 9",
//     weighting: 0.2,
//     type: "task",
//     courseId: "61061779-cfa6-4d93-9571-dbc2b3cba661",
//   },
// ];

const allTypes: { [key: string]: { name: string; color: string } } = {
  task: {
    name: "Tarea",
    color: "bg-blue-500",
  },
  exam: {
    name: "Examen",
    color: "bg-green-500",
  },
  quiz: {
    name: "Quiz",
    color: "bg-amber-500",
  },
  project: {
    name: "Proyecto",
    color: "bg-red-500",
  },
};

console.log(allTypes["task"]);

export const columns: ColumnDef<Assignment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "isCompleted",
    header: "Estado",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("isCompleted") ? "Completada" : "Pendiente"}
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-left pl-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Título
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="lowercase">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => <div>Fecha</div>,
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;

      const formattedDate = new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);

      return <div className="font-medium">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "weighting",
    header: "Peso",
    cell: ({ row }) => <div>{row.getValue("weighting")}%</div>,
  },
  
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => {
      const type = row.getValue("type");

      const formattedType = allTypes[type as string];

      return <Badge className={`${formattedType.color} text-center text-gray-200`}>{formattedType.name}</Badge>;
    },
  },
  {
    accessorKey: "description",
    header: "Descripcion",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface Props {
  data: Assignment[];
}

export function DataTable({data}: Props) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 h-full">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} fila(s) seleccionada(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
