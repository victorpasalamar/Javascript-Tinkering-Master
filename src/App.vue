<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/calculator">Calculator</router-link>
      <router-link to="/comments">Comments</router-link>
      <router-link to="/users">Users</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  background: #333;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>