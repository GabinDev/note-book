export interface Priority {
  id: number;
  text: string;
  color?: string;
}


export interface Task {
  id: number;
  title: string;
  description?: string;
  color?: string;
  date?: Date,
  priority?: Priority
}