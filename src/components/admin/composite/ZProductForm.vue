<template>
  <ZForm
    ref="form"
    :vuelidate="v$"
    @submitted="emitSubmitted"
  >
    <ZRequiredInput
      v-model="form.title"
      label="Наименование товара"
      :error-state="v$.form.title.$error"
      :on-error="v$.form.title.$errors[0]?.$message"
      @update:modelValue="v$.form.title.$touch"
    />

    <ZTextarea
      v-model="form.description"
      class="product-form__textarea"
      rows="5"
      label="Описание товара"
    />

    <ZRequiredInput
      v-model="form.media"
      label="Ссылка на изображение"
      :error-state="v$.form.media.$error"
      :on-error="v$.form.media.$errors[0]?.$message"
      @update:modelValue="v$.form.media.$touch"
    />

    <ZRequiredInput
      v-model.number="form.price"
      label="Цена"
      :error-state="v$.form.price.$error"
      :on-error="v$.form.price.$errors[0]?.$message"
      @update:modelValue="v$.form.price.$touch"
    />

    <template #actions>
      <ZButtonWithLoader
        class="product-form__button"
        type="submit"
        v-bind="buttonProps"
      >
        Submit
      </ZButtonWithLoader>
    </template>
  </ZForm>
</template>

<script>
import ZForm from '@general_components/atomic/ZForm.vue'
import ZRequiredInput from '@general_components/composite/ZRequiredInput.vue'
import ZTextarea from '@general_components/composite/ZTextarea.vue'
import ZButtonWithLoader from '@general_components/composite/ZButtonWithLoader.vue'

import useVuelidate from '@vuelidate/core'
import { minLength, required, url, numeric } from '@validators'

export default {
  name: 'ZProductForm',
  expose: [ 'focus', 'reset', 'setButtonLoadingState' ],
  components: {
    ZForm,
    ZRequiredInput,
    ZTextarea,
    ZButtonWithLoader
  },
  emits: ['submitted'],
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      buttonProps: {
        loader: false,
        disabled: true,
      },
      form: {
        title: '',
        description: '',
        media: '',
        price: '',
      }
    }
  },
  watch: {
    form: {
      handler() {
        if(this.v$.$dirty && !this.v$.$error) {
          this.buttonProps.disabled = false
        } else {
          this.buttonProps.disabled = true
        }
      },
      deep: true
    }
  },
  validations() {
    return {
      form: {
        title: {
          required,
          minLength: minLength(4)
        },
        media: {
          required,
          url,
        },
        price: {
          required,
          numeric
        },
      },
    }
  },
  methods: {
    // Public
    focus() {
      this.$refs.form.focus()
    },
    reset() {
      this.$refs.form.reset()
    },
    setButtonLoadingState(state) {
      this.buttonProps.loader = !!state
    },

    // Private
    emitSubmitted() {
      const clone = Object.assign({}, this.form)
      this.$emit('submitted', clone)
    },

  }
}
</script>

<style lang="scss" scoped>
.product-form {
	&__button {
		width: 100%;
	}
}
</style>
