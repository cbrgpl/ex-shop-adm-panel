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
    <ZCard
      ref="card"
      style="width: 50%; margin: auto; padding: 24px;"
    >
      <ZProductForm @submitted="test" />
    </ZCard>

    <div style="width: 420px;">
      <ZRequiredInput
        v-model="text"
        label="Required input"
        placeholder="some required input"
      />

      {{ text }}
    </div>
  </div>
</template>

<script>
import ZInput from '@general_components/composite/ZInput.vue'
import ZTextarea from '@general_components/composite/ZTextarea.vue'
import ZButton from '@general_components/atomic/ZButton.vue'
import ZButtonWithLoader from '@general_components/composite/ZButtonWithLoader.vue'
import ZProductForm from '@admin_components/composite/ZProductForm.vue'
import ZRequiredInput from '@general_components/composite/ZRequiredInput.vue'
import ZCard from '@general_components/atomic/ZCard.vue'

export default {
  name: 'TheCatalog',
  components: {
    ZInput,
    ZTextarea,
    ZButton,
    ZButtonWithLoader,
    ZProductForm,
    ZRequiredInput,
    ZCard
  },
  data() {
    return {
      text: 'zxc',
      inputError: null,
      loader: false
    }
  },
  methods: {
    toggleInputError() {
      this.inputError = !this.inputError
    },
    test(ev) {
      this.$refs.card.setLoaderStateTo(!this.loader)
      this.loader = !this.loader
      console.log('test', ev)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
