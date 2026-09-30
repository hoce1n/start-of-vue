<template>
  <div id="app">
    <div>
      <h1>مرجع ظاهر برای تمرین‌های سه‌شنبه</h1>
      <p>این فقط چیدمان و ظاهر است؛ منطق و رفتار Vue را خودت اضافه می‌کنی</p>
    </div>
    <PersonalInformation />
    <DisplayInformation />
    <CountingSystem />
    <TimeConverter />
  </div>
</template>

<script>
import CountingSystem from './components/CountingSystem.vue'
import DisplayInformation from './components/DisplayInformation.vue'
import PersonalInformation from './components/PersonalInformation.vue'
import TimeConverter from './components/TimeConverter.vue'

export default {
  name: 'App',

  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    PersonalInformation,
    DisplayInformation,
    CountingSystem,
    TimeConverter
  }
}
</script>

<style>
#app {
  max-width: 900px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
