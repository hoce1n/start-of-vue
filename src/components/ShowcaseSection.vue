<template>
  <section class="showcase">
    <header class="showcase__header">
      <div class="showcase__header-info">
        <span class="showcase__icon-wrapper">
          <i :class="icon"></i>
        </span>
        <div class="showcase__title-group">
          <h3 class="showcase__title">{{ title }}</h3>
          <p v-if="subtitle" class="showcase__subtitle">{{ subtitle }}</p>
        </div>
      </div>

      <span v-if="tag" class="showcase__badge">{{ tag }}</span>
    </header>

    <div class="showcase__body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShowcaseSection',

  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    tag: { type: String, default: '' },
    icon: { type: String, default: 'fa-solid fa-cube' }
  }
}
</script>

<style lang="scss" scoped>
.showcase {
  margin-bottom: 24px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  &__header-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: $radius-card;
    background-color: $primary;
    color: $text-white;
  }

  &__title {
    font-size: $text-lg;
    color: $text-primary;
  }

  &__subtitle {
    font-size: $text-sm;
    color: $text-muted;
  }

  &__badge {
    padding: 6px 12px;
    border-radius: $radius-badge;
    background-color: $tag-background;
    font-family: 'Courier New', Courier, monospace;
    font-size: $text-sm;
    direction: ltr;
  }

  &__body {
    margin-top: 24px;
    padding: 24px;
    border-radius: $radius-card;
    background-color: $white-bg;
  }
}
</style>
