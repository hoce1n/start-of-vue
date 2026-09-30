<template>
  <section>
    <div class="card">
      <div class="header">
        <h3>۲. نمایش اطلاعات با چک‌باکس</h3>
        <span>v-if / v-show</span>
      </div>

      <label>
        <input type="checkbox"  v-model="isLoggedIn">
        ورود
      </label>

      <div>
        <div>حالت فعال (چک‌باکس تیک‌خورده)</div>
        <div class="show" v-show="isLoggedIn">
          <div>
            <strong v-show="isLoggedIn">نام و نام‌خانوادگی: <span>حسین رضایی</span></strong>
            <strong v-if="isLoggedIn">جنسیت: <span>مرد</span></strong>
            <strong v-if="isLoggedIn">موبایل: <span>۰۹۱۲۳۴۵۶۷۸۹</span></strong>
            <strong v-if="isLoggedIn">آدرس: <span>تهران، خیابان...</span></strong>
          </div>
        </div>
      </div>

      <p style="color: grey;">
        وقتی چک‌باکس خاموش است: کل این باکس باید ناپدید شود، ولی نام و نام‌خانوادگی همچنان (مخفی) در DOM بمانند و بقیه‌ی فیلدها اصلاً در DOM نباشند.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DisplayInformation',
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    // Login() {
    //     this.isLoggedIn = !this.isLoggedIn;
    // }
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

label {
  font-size: 20px;
  display: flex;
  align-items: center;
}

label input {
  width: 22px;
  height: 22px;
  margin-left: 8px;
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
