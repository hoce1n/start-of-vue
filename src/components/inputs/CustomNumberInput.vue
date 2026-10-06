<template>
  <div class="number-input" :class="stateClass">
    <div class="number-input__top">
      <label :for="inputId" class="number-input__label">{{ label }}</label>
      <p v-if="min !== null" class="number-input__limit">حداقل: {{ formatNumber(min) }}</p>
    </div>

    <div class="number-input__wrapper">
      <button
        type="button"
        class="number-input__button"
        aria-label="کاهش"
        :disabled="disabled"
        @click="stepBy(-1)"
      >
        <i class="fa-solid fa-minus"></i>
      </button>

      <input
        :id="inputId"
        type="text"
        inputmode="numeric"
        dir="ltr"
        class="number-input__control"
        :value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-invalid="isInvalid"
        @input="onType"
        @blur="onBlurInput"
      />

      <button
        type="button"
        class="number-input__button"
        aria-label="افزایش"
        :disabled="disabled"
        @click="stepBy(1)"
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>

    <div class="number-input__bottom">
      <FieldMessage :type="messageType" :text="message" />
      <p v-if="max !== null" class="number-input__limit">سقف مجاز: {{ formatNumber(max) }}</p>
    </div>
  </div>
</template>

<script>
import inputMixin from '@/mixins/inputMixin'
import FieldMessage from './FieldMessage.vue'
import { formatNumber, parseNumber } from '@/utils/numbers'

export default {
  name: 'CustomNumberInput',
  components: { FieldMessage },
  mixins: [inputMixin],
  props: {
    value: { type: Number, default: null },
    min: { type: Number, default: null },
    max: { type: Number, default: null },
    step: { type: Number, default: 1 }
  },
  data () {
    return {
      draft: null
    }
  },
  computed: {
    displayValue () {
      return this.draft !== null ? this.draft : formatNumber(this.innerValue)
    },
    validationError () {
      if (this.requiredError) return this.requiredError
      if (!this.hasValue) return ''
      const number = Number(this.innerValue)
      if (this.min !== null && number < this.min) {
        return this.min === 0
          ? 'مقدار وارد شده نمی‌تواند منفی باشد.'
          : `مقدار نمی‌تواند کمتر از ${formatNumber(this.min)} باشد.`
      }
      if (this.max !== null && number > this.max) {
        return `مقدار نمی‌تواند بیشتر از ${formatNumber(this.max)} باشد.`
      }
      return ''
    }
  },
  methods: {
    formatNumber,

    onType (event) {
      this.draft = event.target.value
      const number = parseNumber(this.draft)
      if (number !== null) {
        this.onInput(number)
      } else if (this.draft.trim() === '') {
        this.onInput(null)
      }
    },

    onBlurInput () {
      this.draft = null
      this.onBlur()
    },

    stepBy (direction) {
      this.draft = null
      const current = typeof this.innerValue === 'number' ? this.innerValue : 0
      this.onInput(current + direction * this.step)
    }
  }
}
</script>

<style lang="scss" scoped>
.number-input {
  &__top,
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  &__label {
    @include field-label;
  }

  &__limit {
    font-size: $text-xs;
    color: $text-muted;
    padding-top: 8px;
  }

  &__top &__limit {
    padding-top: 0;
    margin-bottom: 6px;
  }

  &__wrapper {
    @include field-box;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px;
  }

  &__control {
    @include field-control;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding: 8px 0;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: $radius-input;
    background-color: $tag-background;
    color: $primary;

    &:hover:not(:disabled) {
      background-color: #c8d6f2;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .is-invalid &__button {
    background-color: $error-badge-bg;
    color: $error;
  }

  .is-invalid &__control {
    color: $error;
  }
}
</style>
