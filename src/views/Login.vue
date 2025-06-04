<template>
    <div class="container mt-5">
        <b-card title="Login" class="mx-auto login-card shadow" header-class="login-header">
            <b-form @submit.prevent="handleLogin">
                <b-form-group label="Username" label-class="fw-medium">
                    <b-form-input v-model="username" required class="form-control-lg"></b-form-input>
                </b-form-group>
                <b-form-group label="Password" label-class="fw-medium" class="mt-3">
                    <b-form-input type="password" v-model="password" required class="form-control-lg"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-4 w-100 login-btn">Login</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/auth'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        handleLogin() {
            const authStore = useAuthStore()
            authStore.login(this.username, this.password)
            if (authStore.isAuthenticated) {
                this.$router.push('/dashboard')
            }
        }
    },
    mounted() {
        const authStore = useAuthStore()
        authStore.initialize()
        if (authStore.isAuthenticated) {
            this.$router.push('/dashboard')
        }
    }
}
</script>

<style scoped>
.login-card {
    max-width: 400px;
    border-radius: 10px;
    background: #ffffff;
}

.login-header {
    background-color: #007bff;
    color: white;
    font-size: 1.5rem;
    border-radius: 10px 10px 0 0;
    padding: 1.5rem;
    text-align: center;
}

.form-control-lg {
    border-radius: 8px;
}

.login-btn {
    font-size: 1.2rem;
    padding: 0.75rem;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.login-btn:hover {
    background-color: #0056b3;
}
</style>