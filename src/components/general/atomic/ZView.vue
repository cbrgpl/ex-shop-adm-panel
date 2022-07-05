<template>
  <section class="view">
    <div class="view__header">
      <div class="view__title">
        {{ title }}
      </div>

      <slot name="header" />
    </div>

    <slot />

    <div
      v-if="loader"
      class="view__loader-wrapper"
    >
      <ZLoader
        size="lg"
        color="black"
      />
    </div>
  </section>
</template>

<script>
import ZLoader from '@general_components/atomic/ZLoader.vue'

export default {
  name: 'ZView',
  expose: ['setLoaderState'],
  components: {
    ZLoader
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loader: true
    }
  },
  methods: {
    // Public
    setLoaderState( state ) {
      this.loader = state
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
	overflow-y: auto;
	height: 100vh;
	padding: rem(8px);

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: rem(16px);
	}

	&__loader-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: rgb(0 0 0 / 0.2);
	}
}

@media screen and (min-width: $lg) {
	.view {
		padding: rem(16px);

		&__title {
			font-size: rem(24px);
		}
	}
}

@media screen and (min-width: $xl) {
	.view {
		padding: rem(32px);

		&__title {
			font-size: rem(28px);
		}
	}
}
</style>
