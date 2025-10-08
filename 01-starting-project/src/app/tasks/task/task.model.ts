export interface Task
{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string; // ISO date string (e.g., '2024-12-31')
}