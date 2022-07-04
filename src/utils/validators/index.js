import {
  helpers,

  required as vRequired,
  minLength as vMinLength,
  url as vUrl,
  numeric as vNumeric,
} from '@vuelidate/validators'

const customizedValidators = {
  required: helpers.withMessage('Поле является обязательным', vRequired),
  minLength: (min) => helpers.withMessage( ( {$params} ) => `Минимальное количество символов ${$params.min}`, vMinLength(min) ),
  url: helpers.withMessage('Значение должно быть корректной ссылкой', vUrl),
  numeric: helpers.withMessage('Значение должно состоять из цифр', vNumeric)
}

export const {
  required,
  minLength,
  url,
  numeric
} = customizedValidators
