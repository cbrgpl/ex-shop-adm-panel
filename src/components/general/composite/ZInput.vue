<template>
  <ZFormField>
    <template #label="props">
      <slot
        name="label"
        v-bind="props"
      />
    </template>

    <template #input="{props, attrs}">
      <input
        v-bind="attrs"
        class="form-field__input"
        :data-error="props.errorState"
        type="text"
        :value="attrs.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </template>
  </ZFormField>
</template>

<script>
import ZFormField from '@general_components/composite/ZFormField.vue'

export default {
  name: 'ZInput',
  components: {
    ZFormField
  },
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>

</style>
