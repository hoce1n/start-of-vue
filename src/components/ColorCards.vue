<template>
  <section>
    <div class="card">
      <div class="header">
        <h3>۴. کارت‌های رنگی</h3>
        <span>binding / methods / v-for</span>
      </div>

      <button @click="addColor">
        افزودن رنگ
      </button>

      <div style="background-color: gray; height: 1px;"></div>

      <div class="colors">
        <div
          v-for="color in colors"
          class="color-card"
          :style="{ backgroundColor: color }"
        >
          <strong>{{ color }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ColorCards',

  data () {
    return {
      colors: []
    }
  },

  methods: {
    addColor () {
      this.colors.push('red')
    }
  }
}
</script>

<style scoped>
section {
  padding: 32px;
  background-color: white;
}

section .card {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.header {
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
  gap: 0 6px;
}

.header span {
  font-size: 14px;
  color: gray;
}

button {
  width: fit-content;
  padding: 10px 20px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}

.colors {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.color-card {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
</style>
