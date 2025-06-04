import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(username, password) {
      if (username && password) {
        this.user = { username }
        this.isAuthenticated = true
        localStorage.setItem('user', JSON.stringify(this.user))
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
    },
    initialize() {
      const user = localStorage.getItem('user')
      if (user) {
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    },
  },
})
