import { instance } from "@/common/instance"
import { GetTasksResponse } from "@/features/todolists/api/tasksApi.types.ts"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(payload: { todolistId: string; title: string }) {
    const { todolistId, title } = payload
    return instance.post(`/todo-lists/${todolistId}/tasks`, { title })
  },
}
