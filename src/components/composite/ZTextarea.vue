<template>
  <ZFormField>
    <template #input="{props, attrs}">
      <textarea
        class="form-field__input"
        v-bind="attrs"
        :data-error="props.errorState"
        cols="30"
        rows="10"
      />
    </template>
  </ZFormField>
</template>

<script>
import ZFormField from '@components/composite/ZFormField.vue'

export default {
  name: 'ZTextarea',
  components: {
    ZFormField
  }
}
</script>

<style lang="scss" scoped>
</style>
