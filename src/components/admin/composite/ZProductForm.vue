<template>
  <ZForm
    :vuelidate="v$"
    @submitted="emitSubmitted"
  >
    <ZInput
      v-model="form.title"
      label="Наименование товара"
      :error-state="v$.form.title.$error"
      :on-error="v$.form.title.$errors[0]?.$message"
      @update:modelValue="v$.form.title.$touch"
    />

    <ZTextarea
      v-model="form.description"
      label="Описание товара"
    />

    <ZInput
      v-model="form.mediaUrl"
      label="Ссылка на изображение"
      :error-state="v$.form.mediaUrl.$error"
      :on-error="v$.form.mediaUrl.$errors[0]?.$message"
      @update:modelValue="v$.form.mediaUrl.$touch"
    />

    <ZInput
      v-model.number="form.price"
      label="Цена"
      :error-state="v$.form.price.$error"
      :on-error="v$.form.price.$errors[0]?.$message"
      @update:modelValue="v$.form.price.$touch"
    />

    <template #actions>
      <ZButtonWithLoader
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
import ZInput from '@general_components/composite/ZInput.vue'
import ZTextarea from '@general_components/composite/ZTextarea.vue'
import ZButtonWithLoader from '@general_components/composite/ZButtonWithLoader.vue'

import useVuelidate from '@vuelidate/core'
import { minLength, required, url, numeric } from '@validators'

export default {
  name: 'ZProductForm',
  components: {
    ZForm,
    ZInput,
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
        mediaUrl: '',
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
        mediaUrl: {
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
    emitSubmitted() {
      this.$emit('submitted', this.form)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
