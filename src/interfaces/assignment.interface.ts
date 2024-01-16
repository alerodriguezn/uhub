

export interface Assignment {
    id: string,
    date: string,
    title: string,
    isCompleted: boolean,
    description: string,
    weighting?: number | null,
    type: AssigmentType
    courseId: string

}

export type AssigmentType = "task" | "exam" | "project" | "quiz";

