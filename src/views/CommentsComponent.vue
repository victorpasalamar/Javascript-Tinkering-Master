<template>
  <div class="comments">
    <Navbar />
    <h2>Comments</h2>
    <div class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      comments: []
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        this.comments = await response.json();
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  }
};
</script>

<style scoped>
.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Assegura't que el footer es queda al final de la pàgina */
}
.comments-list {
  max-width: 600px;
  width: 100%;
  margin: 20px 0;
}
.comment {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
}
</style>