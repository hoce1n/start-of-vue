<template>
  <section>
    <div class="card">
        <div class="header">
          <h3>۳. سیستم شمارش نوبت</h3>
          <span>@click, data, methods</span>
        </div>
        <div class="showw">
          <h4>نوبت فعلی</h4>
          <div>
              <b>{{ count }}</b>
          </div>
          <div class="groupButton">
            <button type="button" @click="increase">افزودن</button>
            <button type="button" @click="decrease">کاهش</button>
            <button type="button" @click="reset">ریست</button>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'TurnCounter',
    data () {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            if (this.count > 0) this.count--;
        },
        reset() {
            this.count = 0;
        }
    }
}
</script>
<style>
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

.showw {
  background: #F6F4F0;
  border: 1px dashed rgb(216, 210, 198);
  border-radius: 10px;
  padding: 18px 20px;
  font-size: 15px;
  line-height: 1.9;
}

.showw div {
    text-align: center;
}

.showw b {
    margin: 0 auto;
  font-size: 32px;
  color: gray;
}
.groupButton {
    justify-content: center;
    display: flex;
    gap: 8px;
}

.groupButton button {
    padding: 12px 26px;
    border-radius: 8px;
    border: 1px solid #D8D2C6;
    background: #FFFFFF;
    color: #211E1A;
    font-size: 15px;
    cursor: pointer;
}
</style>