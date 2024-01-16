"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { courses, assignments } from "@/db/schema";
import { auth } from "@/lib/auth";

export const getAssignmentsByUser = async () => {
  const session = await auth();

  if (!session?.user) {
    return {
      ok: false,
      message: "Invalid User",
    };
  }

  try {
    //Get assigments with course name
    const assignmentsByUser = await db.query.assignments.findMany({
      where: eq(assignments.userId, session?.user.id),

    });

    if(!assignmentsByUser) return {
      ok: false,
      message: "We cannot get the assignments of this course",
    }

    return {
      ok: true,
      assignmentsByUser: assignmentsByUser,
    }



  
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "We cannot get the assignments",
    };
  }
};
