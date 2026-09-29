<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld 
      msg="Welcome to Your Vue.js App"
      title="بشر بلاخره تصمیم گرفت، بجای دستکاری دستی DOM. یه سازوکاری بسازه که وضعیت رو توصیف کنه و یزاره سیستم خود باقی کارها رو انجام بده."
    />
    <div>
      <span :title="message">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!
      </span>
      <br>
      <div style="display: flex; gap: 4px; justify-content: center;">
        <span v-if="seen" style="color: red;">{{ seenMsg }}</span>
        <button @click="show">{{ seen ? 'hide' : 'see' }}</button>
      </div>
    </div>
    <div style="width: fit-content; margin: 0 auto;">
      <ol :title="note">
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',

  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seenMsg: 'can u see me?',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      note: "بشر حتی attributeهای HTML را هم تبدیل به زبان برنامه‌نویسی کرده",
    }

    
  },
  methods: {
    show () {
      this.seen = !this.seen;
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
