import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push({
        id: Date.now(),
        title: task.title,
        description: task.description,
        status: 'pending',
        createdAt: new Date(),
        completedAt: null,
      })
      this.saveTasks()
    },
    completeTask(id) {
      const task = this.tasks.find((t) => t.id === id)
      if (task) {
        task.status = 'completed'
        task.completedAt = new Date()
        this.saveTasks()
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id)
      this.saveTasks()
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const tasks = localStorage.getItem('tasks')
      if (tasks) {
        this.tasks = JSON.parse(tasks)
      }
    },
  },
  getters: {
    pendingTasks: (state) => state.tasks.filter((t) => t.status === 'pending'),
    completedTasks: (state) => state.tasks.filter((t) => t.status === 'completed'),
    totalTasks: (state) => state.tasks.length,
  },
})
