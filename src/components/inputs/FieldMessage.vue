<template>
  <p v-if="text" class="field-message" :class="`field-message--${type}`">
    <i :class="iconClass"></i>
    {{ text }}
  </p>
</template>

<script>
const ICONS = {
  error: 'fa-solid fa-circle-exclamation',
  success: 'fa-regular fa-circle-check',
  hint: 'fa-solid fa-circle-info'
}

export default {
  name: 'FieldMessage',

  props: {
    type: {
      type: String,
      default: 'hint',
      validator: value => ['hint', 'success', 'error'].includes(value)
    },
    text: { type: String, default: '' }
  },

  computed: {
    iconClass () {
      return ICONS[this.type]
    }
  }
}
</script>

<style lang="scss" scoped>
.field-message {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 4px 0;
  font-size: $text-xs;

  &--hint {
    color: $text-muted;
  }

  &--success {
    color: $success;
  }

  &--error {
    color: $error;
  }
}
</style>
