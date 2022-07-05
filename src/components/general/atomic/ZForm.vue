<template>
  <div class="form__wrapper">
    <form
      ref="form"
      class="form"
      @submit.prevent.stop="emitSubmit"
      @keypress.enter.prevent="focusNextField"
    >
      <slot />

      <div class="form__actions">
        <slot name="actions" />
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ZForm',
  focusFeature: {
    nodeBuffer: [],
    focusedNodeNumber: 0,
  },
  expose: [ 'focus', 'reset', ],
  props: {
    vuelidate: {
      type: Object,
      required: true,
    }
  },
  emits: ['submitted'],
  mounted() {
    this.bufferInputs()
    this.focus()
  },
  methods: {
    // Public
    focus() {
      this.setFocusOn(0)
    },
    reset() {
      this.$refs.form.reset()
    },

    // Private
    focusNextField() {
      const focusedNodeNumber = this.$options.focusFeature.focusedNodeNumber
      this.setFocusOn(focusedNodeNumber + 1)
    },
    setFocusOn(number) {
      const isLastFieldPassed = number ===  this.$options.focusFeature.nodeBuffer.length

      if(number < this.$options.focusFeature.nodeBuffer.length ) {
        this.$options.focusFeature.nodeBuffer[number].focus()
        this.$options.focusFeature.focusedNodeNumber = number;
      } else if ( isLastFieldPassed ) {
        this.emitSubmit()
      }
    },
    emitSubmit() {
      this.vuelidate.$reset()
      this.vuelidate.$touch()

      if(this.vuelidate.$error) {
        return
      }

      this.$emit('submitted')
    },
    bufferInputs() {
      const nodes = this.$refs.form.querySelectorAll('.form-field__input')

      this.$options.focusFeature.nodeBuffer = [ ...nodes ]
    }
  },


}
</script>

<style lang="scss" scoped>
</style>
