<template>
    <div class="container mt-5">
        <h1 class="mb-4 text-primary">History</h1>
        <b-card header="Completed Tasks" header-class="history-header" class="shadow-sm">
            <b-list-group>
                <b-list-group-item v-for="task in completedTasks" :key="task.id" class="history-item">
                    <h5 class="task-title">{{ task.title }}</h5>
                    <p class="task-description">{{ task.description || 'No description' }}</p>
                    <small class="text-muted">Completed: {{ task.completedAt.toLocaleString() }}</small>
                </b-list-group-item>
                <b-list-group-item v-if="!completedTasks.length" class="text-center text-muted">
                    No completed tasks yet.
                </b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/tasks'

export default {
    name: 'History',
    setup() {
        return { taskStore: useTaskStore() }
    },
    computed: {
        completedTasks() {
            return this.taskStore.completedTasks
        }
    },
    mounted() {
        this.taskStore.loadTasks()
        console.log('History page mounted, completed tasks loaded')
    }
}
</script>

<style scoped>
h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

.history-header {
    background-color: #f1f3f5;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    padding: 1.2rem;
}

.history-item {
    border-radius: 8px;
    margin-bottom: 0.5rem;
    padding: 1.2rem;
}

.task-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #343a40;
}

.task-description {
    color: #495057;
}
</style>