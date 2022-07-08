<template >
  <div class="select-option" >
    {{ displayValue }}
  </div>
</template>

<script>
export default {
  name: 'ZSelectOption',
  props: {
    item: {
      type: [ String, Object ],
      required: true,
    },
    valueGetter: {
      type: Function,
      default: ( val ) => val
    }
  },
  computed: {
    displayValue() {
      return this.valueGetter( this.item )
    }
  }

}
</script>

<style lang="scss" scoped>
.select-option {
  padding: rem(8px) rem(2px) rem(8px) rem(8px);
  font-size: rem(15px);
  cursor: pointer;
  transition: all 120ms ease-out;

  &:hover {
    background: darken($surface, 4%);
  }
}
</style>
