<template>
  <div>
    <ZInput
      placeholder="Input 1 holder"
      label="The input 1"
      :error-state="inputError"
      :on-error="'There is error 1'"
    />

    <ZTextarea
      v-model="text"
      placeholder="text area holder"
      label="text area"
      :error-state="inputError"
      on-error="there is error!!!"
    />


    <ZButton
      disabled
      @click="test"
    >
      Selecte i
    </ZButton>

    <ZButtonWithLoader
      :loader="false"
      @click="test"
    >
      Select an item
    </ZButtonWithLoader>
  </div>
</template>

<script>
import ZInput from '@components/composite/ZInput.vue'
import ZTextarea from '@components/composite/ZTextarea.vue'
import ZButton from '@components/atomic/ZButton.vue'
import ZButtonWithLoader from '@components/composite/ZButtonWithLoader.vue'


export default {
  name: 'TheCatalog',
  components: {
    ZInput,
    ZTextarea,
    ZButton,
    ZButtonWithLoader,
  },
  data() {
    return {
      text: '',
      inputError: null,
    }
  },
  methods: {
    toggleInputError() {
      this.inputError = !this.inputError
    },
    test(ev) {
      console.log('test', ev)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
