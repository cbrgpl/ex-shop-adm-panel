<template >
  <ZInput
    v-bind="$props"
    class="required-input"
    @update:modelValue="$emit('update:modelValue', $event)" >
    <template #label="{ label }" >
      <span class="required-input__label" >
        {{ label }}
      </span>
    </template>
  </ZInput>
</template>

<script>
import ZInput from '@general_components/composite/ZInput.vue'

export default {
  name: 'ZRequiredInput',
  components: {
    ZInput
  },
  props: [ 'modelValue' ],
  emits: [ 'update:modelValue' ],
}
</script>

<style lang="scss" scoped>
.required-input {
  &__label {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: $danger;
      transform: translateX(100%);
    }
  }
}

</style>
