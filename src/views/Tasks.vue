<template>
    <div class="container mt-5">
        <h1 class="mb-4 text-primary">Tasks</h1>
        <b-card class="mb-4 shadow-sm" header="Add New Task" header-class="task-form-header">
            <b-form @submit.prevent="addTask">
                <b-form-group label="Task Title" label-class="fw-medium">
                    <b-form-input v-model="newTask.title" required class="form-control-lg"></b-form-input>
                </b-form-group>
                <b-form-group label="Description" label-class="fw-medium" class="mt-3">
                    <b-form-textarea v-model="newTask.description" rows="4"></b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-3 task-btn">Add Task</b-button>
            </b-form>
        </b-card>
        <b-list-group>
            <b-list-group-item v-for="task in tasks" :key="task.id" class="task-item shadow-sm">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="task-title">{{ task.title }}</h5>
                        <p class="task-description">{{ task.description || 'No description' }}</p>
                        <small class="text-muted">Created: {{ task.createdAt.toLocaleString() }}</small>
                    </div>
                    <div class="task-actions">
                        <b-button v-if="task.status === 'pending'" variant="success" @click="completeTask(task.id)"
                            class="me-2 action-btn">
                            Complete
                        </b-button>
                        <b-button variant="danger" @click="deleteTask(task.id)" class="action-btn">Delete</b-button>
                    </div>
                </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/tasks'

export default {
    name: 'Tasks',
    data() {
        return {
            newTask: { title: '', description: '' }
        }
    },
    setup() {
        return { taskStore: useTaskStore() }
    },
    computed: {
        tasks() {
            return this.taskStore.tasks
        }
    },
    methods: {
        addTask() {
            this.taskStore.addTask(this.newTask)
            this.newTask = { title: '', description: '' }
        },
        completeTask(id) {
            this.taskStore.completeTask(id)
        },
        deleteTask(id) {
            this.taskStore.deleteTask(id)
        }
    },
    mounted() {
        this.taskStore.loadTasks()
        console.log('Tasks page mounted, tasks loaded')
    }
}
</script>

<style scoped>
h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

.task-form-header {
    background-color: #f1f3f5;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    padding: 1.2rem;
}

.form-control-lg,
textarea {
    border-radius: 8px;
}

.task-btn {
    font-size: 1.2rem;
    padding: 0.75rem;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.task-btn:hover {
    background-color: #0056b3;
}

.task-item {
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1.5rem;
}

.task-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #343a40;
}

.task-description {
    color: #495057;
}

.task-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    border-radius: 6px;
    padding: 0.5rem 1rem;
}
</style>