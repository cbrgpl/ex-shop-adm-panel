<template>
  <div
    v-bind="wrapperAttrs"
    :data-loader="`${loader}`"
    class="button-with-loader"
  >
    <div @click.stop="emitClick">
      <zButton
        v-bind="attrs"
        class="button-with-loader__button"
      >
        <span class="button-with-loader__text">
          <slot />
        </span>
      </zButton>

      <div
        v-show="loader"
        class="button-with-loader__loader-wrapper"
      >
        <zLoader color="white" />
      </div>
    </div>
  </div>
</template>

<script>
import ZButton from '@general_components/atomic/ZButton.vue'
import ZLoader from '@general_components/atomic/ZLoader.vue'

import extenderMix from '@mixins/extender.js'

export default {
  name: 'ZButtonWithLoader',
  components: {
    ZButton,
    ZLoader
  },
  mixins: [extenderMix],
  props: {
    loader: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['click'],
  methods: {
    emitClick($ev) {
      if(this.loader || Object.keys(this.attrs).includes('disabled')) {
        return
      }

      this.$emit('click', $ev)
    }
  }
}
</script>

<style lang="scss" scoped>
.button-with-loader {
	position: relative;
	display: inline-block;
	cursor: pointer;

	&__loader-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	&__button {
		width: 100%;
	}
}

.button-with-loader[data-loader="true"] {
	& .button-with-loader__text {
		opacity: 0;
	}
}

</style>
