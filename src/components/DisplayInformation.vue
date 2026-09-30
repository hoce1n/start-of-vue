<template>
  <div>
    <div>
      <div>۲. نمایش اطلاعات با چک‌باکس</div>
      <div>v-if / v-show</div>
    </div>

    <label>
      <input type="checkbox" checked="">
      ورود
    </label>

    <div>
      <div>حالت فعال (چک‌باکس تیک‌خورده)</div>
      <div>
        <div>نام و نام‌خانوادگی: <span>حسین رضایی</span></div>
        <div>جنسیت: <span>مرد</span></div>
        <div>موبایل: <span>۰۹۱۲۳۴۵۶۷۸۹</span></div>
        <div>آدرس: <span>تهران، خیابان...</span></div>
      </div>
    </div>

    <div>
      وقتی چک‌باکس خاموش است: کل این باکس باید ناپدید شود، ولی نام و نام‌خانوادگی همچنان (مخفی) در DOM بمانند و بقیه‌ی فیلدها اصلاً در DOM نباشند.
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayInformation'

}
</script>

<style>
</style>
