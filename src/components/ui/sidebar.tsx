import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CheckSquare, Home, Library } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="border-r-2 border-gray-800 w-1/5 h-screen sticky top-0 hidden md:block ">
      <div className="mt-6 flex flex-col items-center justify-center mb-2">
        <Avatar className="w-14 h-14" >
          <AvatarImage src="https://github.com/shadcn.png"  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="mt-2 font-bold antialiased">Alejandro Rodríguez</span>
      </div>
      <Separator />
      <nav className="w-full mt-4 flex ml-8">
        <ul className="flex flex-col justify-center gap-4">
          <li className="flex gap-2">
            <Link href={"/"} className="font-semibold flex items-center gap-2">
              <Home size={18} />
              <span>Incio</span>
            </Link>
          </li>
          <li className="flex gap-2">
            <Link href={"/"} className="font-semibold flex items-center gap-2">
              <CheckSquare size={18} />
              <span>Tareas</span>
            </Link>
          </li>
          <li className="flex gap-2">
            <Link href={"/"} className="font-semibold flex items-center gap-2">
              <Library />
              <span>Cursos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
