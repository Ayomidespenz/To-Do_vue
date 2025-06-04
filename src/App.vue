<template>
  <div class="app-container">
    <b-navbar toggleable="lg" type="dark" variant="primary" class="shadow-sm">
      <b-container>
        <b-navbar-brand to="/dashboard" class="fw-bold">Task Manager</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="isAuthenticated" class="ms-auto">
            <b-nav-item to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item to="/tasks">Tasks</b-nav-item>
            <b-nav-item to="/history">History</b-nav-item>
            <b-nav-item @click="logout" class="logout-link">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container class="main-content mt-4">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import { useAuthStore } from './stores/auth'

export default {
  name: 'App',
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  computed: {
    isAuthenticated() {
      return this.authStore.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.authStore.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  padding-bottom: 2rem;
}

.navbar {
  padding: 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
}

.nav-item {
  font-size: 1.1rem;
}

.logout-link {
  cursor: pointer;
  color: #ffffff !important;
}

.logout-link:hover {
  color: #d1e7ff !important;
}
</style>