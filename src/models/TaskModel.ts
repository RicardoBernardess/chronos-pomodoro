import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duração em minutos
  startDate: number;
  completeDate: number | null; // quando o timer chegar ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModel['config'];
};
