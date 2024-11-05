<template>
  <div class="calculator">
    <Navbar />
    <h2>Calculator</h2>
    <div class="screen">{{ display }}</div>
    <div class="buttons">
      <button @click="append(num)" v-for="num in numbers" :key="num">{{ num }}</button>
      <button @click="append(op)" v-for="op in operations" :key="op">{{ op }}</button>
      <button @click="clear">C</button>
      <button @click="calculate">=</button>
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
      display: '',
      numbers: ['1', '2', '3', '7', '8', '9', '4', '5', '6', '0', '.'],
      operations: ['+', '-', '*', '/']
    };
  },
  methods: {
    append(value) {
      this.display += value;
    },
    clear() {
      this.display = '';
    },
    calculate() {
      try {
        this.display = eval(this.display).toString();
      } catch (error) {
        this.display = 'Error';
      }
    }
  }
};
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Assegura't que el footer es queda al final de la pàgina */
}
.screen {
  font-size: 2em;
  background: #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
.buttons button {
  margin: 5px;
  font-size: 1.5em;
}
</style>