<template>
  <div class="state-card" :class="`state-card--${state}`">
    <div class="state-card__status-bar">
      <div class="state-card__status-type">
        <span class="state-card__status-dot"></span>
        <span class="state-card__status-text">{{ statusText }}</span>
      </div>

      <div v-if="tag" class="state-card__status-tag">
        <i v-if="tagIcon" :class="tagIcon"></i>
        <span>{{ tag }}</span>
      </div>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'StateCard',

  props: {
    state: {
      type: String,
      default: 'valid',
      validator: value => ['valid', 'invalid'].includes(value)
    },
    statusText: { type: String, default: '' },
    tag: { type: String, default: '' },
    tagIcon: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.state-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 18px 20px;
  border-radius: $radius-card;
  background-color: $card-valid-bg;

  &--invalid {
    background-color: $error-bg;
  }

  &__status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  &__status-type {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__status-dot {
    width: 10px;
    height: 10px;
    border-radius: $radius-badge;
    background-color: $success;
  }

  &__status-text {
    font-size: $text-sm;
  }

  &__status-tag {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: $radius-badge;
    background-color: $success-badge-bg;
    color: $success;
    font-size: $text-xs;
    font-weight: 600;
  }

  &--invalid &__status-dot {
    background-color: $error;
  }

  &--invalid &__status-text {
    color: $error;
  }

  &--invalid &__status-tag {
    background-color: $error-badge-bg;
    color: $error;
  }
}
</style>
