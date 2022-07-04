<template>
  <ZFormField>
    <template #input="{props, attrs}">
      <input
        class="form-field__input"
        v-bind="attrs"
        :data-error="props.errorState"
        type="text"
      >
    </template>
  </ZFormField>
</template>

<script>
import ZFormField from '@components/composite/ZFormField.vue'

export default {
  name: 'ZInput',
  components: {
    ZFormField
  }
}
</script>

<style lang="scss" scoped>

</style>
