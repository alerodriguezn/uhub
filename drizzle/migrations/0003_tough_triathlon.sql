ALTER TABLE "assignment" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "course" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();