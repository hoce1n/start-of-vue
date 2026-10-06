<template>
  <div
    class="text-input"
    :class="stateClass"
  >
    <label
      :for="inputId"
      class="text-input__label"
    >
        {{ label }}
    </label>
    <div class="text-input__wrapper">
      <i :class="['text-input__icon', icon]"></i>
      <input
        :id="inputId"
        type="text"
        class="text-input__control"
        :value="innerValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxLength"
        :aria-invalid="isInvalid"
        @input="onInput($event.target.value)"
        @blur="onBlur"
      />
      <i
        v-if="isInvalid"
        class="fa-solid fa-circle-exclamation text-input__status text-input__status--error"
      ></i>
      <i
        v-else-if="isValid"
        class="fa-solid fa-circle-check text-input__status text-input__status--success"
      ></i>
    </div>

    <FieldMessage :type="messageType" :text="message" />
  </div>
</template>

<script>
import inputMixin from '@/mixins/inputMixin'
import FieldMessage from './FieldMessage.vue'
import { toPersianDigits } from '@/utils/numbers.js'

export default {
  name: 'CustomTextInput',
  components: { FieldMessage },
  props: {
    icon: { type: String, default: 'fa-solid fa-user' },
    minLength: { type: Number, default: 0 },
    maxLength: { type: Number, default: null }
  },
  mixins: [inputMixin],
  computed: {
    validationError () {
      if (this.requiredError) {
        return this.requiredError
      }
      if (this.hasValue &&
          this.minLength &&
          String(this.innerValue).trim().length < this.minLength) {
        return `باید حداقل ${toPersianDigits(this.minLength)} کاراکتر باشد.`
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  &__label {
    @include field-label;
  }

  &__wrapper {
    @include field-box(false);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 14px;
  }

  &__icon {
    color: $text-primary-soft;
    flex-shrink: 0;
  }

  &__control {
    @include field-control;
  }

  &__status {
    @include field-status-icon;
  }
}
</style>
