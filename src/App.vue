<template>
  <div>
    <ShowcaseSection
      title="۱. ورودی متنی سفارشی (CustomTextInput)"
      subtitle="ورودی رشته‌ای تک‌خطی برای اسامی، شناسه‌ها و عبارات عمومی"
      tag="Input_Text_State"
      icon="fa-regular fa-id-card"
    >
      <StateCard v-bind="cardProps('text')">
        <CustomTextInput
          v-model="form.name"
          label="نام و نام خانوادگی"
          placeholder="مثال: علی محمدی"
          :min-length="3"
          required
          success0message="اطلاعات وارد شده شما معبتر است."
          validate-immediately
          @validity-change="setValidity('text', $event)"
        />
      </StateCard>
    </ShowcaseSection>
    <ShowcaseSection
      title="ورودی عددی سفارشی با استپر (CustomNumberInput)"
      subtitle="ورودی مقدار با استپر و جداسازی ارقام فارسی"
      tag="Input_Number_Stepper"
      icon="fa-solid fa-arrow-down-1-9"
    >
      <StateCard v-bind="cardProps('number')">
        <CustomNumberInput
          v-model="form.amount"
          label="مبلغ تراکنش (ریال)"
          :min="10000"
          :max="500000000"
          :step="10000"
          required
          success-message="مبلغ معتبر است."
          validate-immediately
          @validity-change="setValidity('number', $event)"
        />
      </StateCard>
    </ShowcaseSection>
  </div>
</template>

<script>
import ShowcaseSection from './components/ShowcaseSection.vue'
import StateCard from './components/StateCard.vue'
import CustomNumberInput from './components/inputs/CustomNumberInput.vue'
import CustomTextInput from './components/inputs/CustomTextInput.vue'

const stateCards = {
  text: {
    valid: {
      statusText: 'حالت معتبر (Valid State)',
      tag: 'تایید شده',
      tagIcon: 'fa-solid fa-check'
    },
    invalid: {
      statusText: 'حالت نامعتبر (Invalid State)',
      tag: 'نیازمند اصلاح',
      tagIcon: 'fa-solid fa-circle-info'
    }
  },
  number: {
    valid: {
      statusText: 'حالت معتبر (Valid Stepper)',
      tag: 'تراز مثبت',
      tagIcon: ''
    },
    invalid: {
      statusText: 'حالت نامعتبر (Invalid Stepper)',
      tag: 'مقدار غیرمجاز',
      tagIcon: ''
    }
  }
}

export default {
  name: 'App',

  components: {
    ShowcaseSection,
    StateCard,
    CustomTextInput,
    CustomNumberInput
  },

  data () {
    return {
      form: {
        name: 'سهراب سپهری',
        amount: 150000
      },
      validity: {
        text: true,
        number: true,
        timer: null
      }
    }
  },

  mounted () {
    this.startDemo()
  },

  beforeDestroy () {
    clearTimeout(this.timer)
  },

  methods: {
    cardProps (key) {
      const state = this.validity[key] ? 'valid' : 'invalid'
      const props = { state, ...stateCards[key][state] }

      return props
    },

    setValidity (key, isValid) {
      this.validity[key] = isValid
    },

    startDemo () {
      clearTimeout(this.timer)
      this.form.name = 'سهراب سپهری'
      this.form.amount = 150000
      this.updated = false
      this.timer = setTimeout(this.changeValuesFromParent, 3000)
    },

    changeValuesFromParent () {
      this.form.name = 'احمد شاملو'
      this.form.amount = 275000
      this.updated = true
    }
  }
}
</script>
