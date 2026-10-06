const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹'
const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩'

export function toPersianDigits (value) {
  return String(value).replace(/\d/g, digit => PERSIAN_DIGITS[digit])
}

export function toEnglishDigits (value) {
  return String(value)
    .replace(/[۰-۹]/g, digit => PERSIAN_DIGITS.indexOf(digit))
    .replace(/[٠-٩]/g, digit => ARABIC_DIGITS.indexOf(digit))
}

export function formatNumber (value) {
  if (value === '' || value == null || isNaN(value)) {
    return ''
  }
  return toPersianDigits(Number(value).toLocaleString('en-US'))
}

export function parseNumber (text) {
  const cleaned = toEnglishDigits(text).replace(/[,٬،\s]/g, '')
  if (!/^-?\d+(\.\d+)?$/.test(cleaned)) {
    return null
  }
  return Number(cleaned)
}
