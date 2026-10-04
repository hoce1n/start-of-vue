<template>
  <section class="custom-input custom-input--valid">
    <header class="custom-input__header">
      <div class="custom-input__header-info">
        <span class="custom-input__icon-wrapper">
          <i class="fa-regular fa-id-card custom-input__icon"></i>
        </span>
        <div class="custom-input__title-group">
          <h3 class="custom-input__title">ورودی متنی سفارشی</h3>
          <p class="custom-input__subtitle">ورودی راسته‌ایی تک خطی برای اسامی</p>
        </div>
      </div>
      <span class="custom-input__badge">Input_Text_State</span>
    </header>
    <main class="custom-input__body">
      <div class="custom-input__body-wrapper">
        <div class="custom-input__status-bar">
          <div class="custom-input__status-type">
            <span class="custom-input__status-dot"></span>
            <span class="custom-input__status-text">حالت معتبر</span>
          </div>
          <div class="custom-input__status-tag custom-input__status-tag--success">
            <i class="fa-solid fa-check custom-input__status-icon"></i>
            <span>تایید شده</span>
          </div>
        </div>
        <div class="custom-input__field-group">
          <label for="first-name" class="custom-input__label">نام و نام خانوادگی</label>
          <div class="custom-input__wrapper">
            <i class="fa-solid fa-user custom-input__field-icon"></i>
            <input
              type="text"
              id="first-name"
              class="custom-input__control"
              placeholder="مثال: علی محمدی"
            />
          </div>
          <p class="custom-input__helper-text custom-input__helper-text--success">
            <i class="fa-regular fa-circle-check"></i>
            اطلاعات وارد شده معتبر است.
          </p>
        </div>
      </div>
    </main>
  </section>
</template>
<script>

export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.custom-input {
  background-color: $page-background;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__subtitle {
    color: $text-muted;
    font-size: $text-sm;
  }

  &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary;
    width: 36px;
    height: 36px;
    border-radius: $radius-card;
    color: $text-white;
  }
  &__badge {
    background-color: $tag-background;
    border-radius: $radius-badge;
    padding: 6px 8px;
    font-size: $text-sm;
    font-family: 'Courier New', Courier, monospace;
  }

  &__body {
    background-color: $white-bg;
    margin-top: 24px;
    padding: 24px;
  }
  &__body-wrapper {
    background-color: $page-background;
    padding: 18px 20px;
    border-radius: $radius-card;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__status-bar {
    display: flex;
    justify-content: space-between;
  }
  &__status-type {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__status-dot {
    background-color: $success;
    border-radius: $radius-badge;
    width: 12px;
    height: 12px;
  }
  &__status-text {
    font-size: $text-sm;
  }
  &__status-tag {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: $text-xs;
    background-color: $success-badge-bg;
    padding: 4px 8px;
    border-radius: $radius-badge;
  }
  &__field-group {}
  &__label {
    color: $text-muted;
    font-size: $text-sm;
  }
  &__wrapper {
    position: relative;
  }
  &__field-icon {
    position: absolute;
    right: 16px;
    top: 15px;
  }
  &__control {
    width: 100%;
    border-radius: $radius-input;
    padding: 8px 40px;
  }
  &__helper-text {
    padding: 8px;
    font-weight: lighter;
    color: $success;
  }
}
</style>
