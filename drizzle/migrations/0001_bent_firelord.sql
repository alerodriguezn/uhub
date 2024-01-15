DO $$ BEGIN
 CREATE TYPE "type" AS ENUM('task', 'exam', 'project', 'quiz');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "assignment" (
	"id" uuid PRIMARY KEY NOT NULL,
	"date" date,
	"title" text NOT NULL,
	"isCompleted" boolean DEFAULT false,
	"description" text NOT NULL,
	"weighting" numeric,
	"type" "type",
	"courseId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "course" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"professor" text,
	"userId" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assignment" ADD CONSTRAINT "assignment_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "course" ADD CONSTRAINT "course_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
