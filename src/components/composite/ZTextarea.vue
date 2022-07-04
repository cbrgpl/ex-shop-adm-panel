<template>
  <ZFormField>
    <template #input="{props, attrs}">
      <textarea
        class="form-field__input"
        v-bind="attrs"
        :data-error="props.errorState"
        :value="attrs.modelValue"
        cols="30"
        rows="10"
        @input="$emit('update:modelValue', $event.target.value)"
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
  },
  emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
</style>
