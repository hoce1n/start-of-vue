<template>
<section>
  <div class="card">
    <div class="header">
      <h3>۱. فرم مشخصات فردی</h3>
      <span>v-model</span>
    </div>

    <div class="row">
      <div>
        <label for="fname">نام</label>
        <input id="fname" type="text" placeholder="مثلاً حسین" v-model="firstName">
      </div>
      <div>
        <label for="lname">نام خانوادگی</label>
        <input id="lname" type="text" placeholder="مثلاً رضایی" v-model="lastName">
      </div>
    </div>

    <fieldset>
      <legend>جنسیت</legend>
      <div>
        <label>
          <input type="radio" name="gender" value="مرد" v-model="gender">
          مرد
        </label>
        <label>
          <input type="radio" name="gender" value="خانوم" v-model="gender">
          زن
        </label>
      </div>
    </fieldset>

    <div class="row">
      <div>
        <label for="mobile">شماره موبایل</label>
        <input 
          id="mobile" 
          type="tel" 
          placeholder="۰۹۱۲۳۴۵۶۷۸۹" 
          style="width: 33%;"
          v-model="phoneNubmer"
        >
      </div>
    </div>

    <div class="row">
      <div>
        <label for="address">آدرس</label>
        <textarea id="address" rows="3" placeholder="آدرس کامل..." v-model="address"></textarea>
      </div>
    </div>

    <div style="background-color: gray; height: 1px;" ></div>

    <div class="show">
      <h4>نمایش اطلاعات (خارج از اینپوت)</h4>
      <div>
        <strong>نام: <span>{{ firstName }}</span></strong>
        <strong>نام‌خانوادگی: <span>{{ lastName }}</span></strong>
        <strong>جنسیت: <span>{{ gender }}</span></strong>
        <strong>موبایل: <span>{{ phoneNubmer }}</span></strong>
        <strong>آدرس: <span>{{ address }}</span></strong>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'PersonalInformation',
  data() {
    return {
      firstName: null,
      lastName: null,
      gender: null,
      phoneNubmer: null,
      address: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.row div input, textarea {
  padding: 12px 14px;
  border: 1px solid rgb(216, 210, 198);
  border-radius: 8px;
  background: rgb(251, 250, 247);
  
}

fieldset {
  border: 0;
}

fieldset div {
  display: flex;
  gap: 20px;
}

fieldset label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  margin: 0 8px;
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
