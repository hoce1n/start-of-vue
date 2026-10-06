export default {
  props: {
    value: { type: [String, Number, Boolean], default: '' },
    label: { type: String, default: '' },
    id: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    requiredMessage: { type: String, default: 'این فیلد الزامی است.' },
    invalid: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    successMessage: { type: String, default: '' },
    hint: { type: String, default: '' },
    validateImmediately: { type: Boolean, default: false }
  },

  data () {
    return {
      innerValue: this.value,
      touched: false
    }
  },

  computed: {
    inputId () {
      return this.id || `field-${this._uid}`
    },

    hasValue () {
      const value = this.innerValue
      if (typeof value === 'string') {
        return value.trim() !== ''
      }
      return value !== null && value !== undefined && value !== false
    },

    validationError () {
      return this.requiredError
    },

    requiredError () {
      return this.required && !this.hasValue ? this.requiredMessage : ''
    },

    shouldValidate () {
      return this.touched || this.validateImmediately
    },

    error () {
      if (this.invalid) {
        return this.errorMessage || this.validationError || 'مقدار وارد شده نامعتبر است.'
      }
      return this.shouldValidate ? this.validationError : ''
    },

    isInvalid () {
      return this.error !== ''
    },

    isValid () {
      return this.shouldValidate && this.hasValue && !this.isInvalid
    },

    stateClass () {
      return {
        'is-valid': this.isValid,
        'is-invalid': this.isInvalid,
        'is-disabled': this.disabled
      }
    },

    messageType () {
      if (this.isInvalid) return 'error'
      if (this.isValid && this.successMessage) return 'success'
      return 'hint'
    },

    message () {
      if (this.isInvalid) return this.error
      if (this.isValid && this.successMessage) return this.successMessage
      return this.hint
    }
  },

  watch: {
    value (newValue) {
      this.innerValue = newValue
    },

    isInvalid: {
      immediate: true,
      handler (invalid) {
        this.$emit('validity-change', !invalid)
      }
    }
  },
  methods: {
    onInput (newValue) {
      this.touched = true
      this.innerValue = newValue
      this.$emit('input', newValue)
    },
    onBlur () {
      this.touched = true
    }
  }
}
