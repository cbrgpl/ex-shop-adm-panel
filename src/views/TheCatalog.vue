<template>
  <div>
    <ZInput
      placeholder="Input 1 holder"
      label="The input 1"
      :error-state="inputError"
      :on-error="'There is error 1'"
    />

    <ZTextarea
      placeholder="text area holder"
      label="text area"
      :error-state="inputError"
      on-error="there is error!!!"
    />
    <button @click="toggleInputError">
      toggle
    </button>
  </div>
</template>

<script>
import ZInput from '@components/composite/ZInput.vue'
import ZTextarea from '@components/composite/ZTextarea.vue'

export default {
  name: 'TheCatalog',
  components: {
    ZInput,
    ZTextarea
  },
  data() {
    return {
      inputError: null,
    }
  },
  methods: {
    toggleInputError() {
      this.inputError = !this.inputError
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
