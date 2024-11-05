<template>
  <div class="home">
    <Navbar />
    <main class="main-content">
      <h1 class="title">Welcome to the Project</h1>
      <p class="description">Explore the different pages of this application.</p>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  name: 'HomeComponent',
  components: {
    Footer,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.title {
  font-size: 2.5rem;
  color: #333;
}

.description {
  font-size: 1.2rem;
  color: #555;
}
</style>