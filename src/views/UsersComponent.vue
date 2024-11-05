<template>
  <div class="users">
    <Navbar />
    <h2>Users</h2>
    <div class="users-list">
      <div v-for="user in users" :key="user.id" class="user">
        <h3>{{ user.name }}</h3>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/FooterComponent.vue';
import axios from 'axios';

export default {
  components: {
    Footer
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        this.users = response.data.users;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }
};
</script>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Assegura't que el footer es queda al final de la pàgina */
}
.users-list {
  max-width: 600px;
  width: 100%;
  margin: 20px 0;
}
.user {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
}
</style>