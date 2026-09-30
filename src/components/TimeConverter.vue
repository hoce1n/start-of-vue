<template>
    <section>
        <div class="card">
            <div class="header">
                <h3>۳. سیستم تبدیل زمان</h3>
                <span>methods / computed</span>
            </div>
            <div class="row">
                <div>
                <label for="age">سن</label>
                <input
                    id="age"
                    type="number"
                    placeholder="مثلاً ۲۴"
                    v-model="age"
                >
                </div>
            </div>
            <button @click="calculateAge">
                محاسبه
            </button>
            <div style="background-color: gray; height: 1px;"></div>
            <div class="show">
                <h4>نمایش سن</h4>
                <div>
                <strong>
                    سن به سال:
                    <span>{{calculatedAge}}</span>
                </strong>
                <strong>
                    سن به ماه:
                    <span>{{ageInMonths}}</span>
                </strong>
                <strong>
                    سن به روز:
                    <span>{{ageInDays}}</span>
                </strong>
                <strong>
                    سن به ساعت:
                    <span>{{ageInHours}}</span>
                </strong>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'TimeConverter',
  data () {
    return {
      age: null,
      calculatedAge: null
    }
  },
  methods: {
    calculateAge () { this.calculatedAge = this.age }
  },
  computed: {
    ageInMonths () { return this.calculatedAge * 12 },
    ageInDays () { return this.calculatedAge * 365 },
    ageInHours () { return this.calculatedAge * 365 * 24 }
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
    font-size: 14px; color: gray;
}
.row {
    display: flex;
    gap: 20px;
}
.row div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
}
.row div input {
    padding: 12px 14px;
    border: 1px solid rgb(216, 210, 198);
    border-radius: 8px;
    background: rgb(251, 250, 247);
}
button {
    width: fit-content;
    padding: 10px 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
}
.show {
    background: #F6F4F0;
    border: 1px dashed rgb(216, 210, 198);
    border-radius: 10px;
    padding: 18px 20px;
    font-size: 15px;
    line-height: 1.9;
}
.show div {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.show div span {
    color: gray;
}
</style>
