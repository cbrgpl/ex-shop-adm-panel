<template>
  <div class="loader__wrapper">
    <div
      ref="loader"
      class="loader"
    >
      <span class="loader__service-item" />
    </div>
    <h4
      v-show="titled"
      class="loader__title"
    >
      Loading...
    </h4>
  </div>
</template>
<script>
export default {
  name: 'ZLoader',
  props: {
    size: {
      type: String,
      default: 'sm',
      validate: ( val ) => ['sm', 'lg'].includes(val)
    },
    titled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'white',
      validate: ( val ) => ['white', 'black'].includes(val)
    }
  },
  mounted() {
    this.setSize()
    this.setColor()
  },
  methods: {
    setSize() {
      switch(this.size) {
      case 'lg':
        this.changeSizeCSSVars(196, 24)
        return
      default:
        return
      }
    },
    changeSizeCSSVars(loaderSize, loaderCircleSize) {
      this.$refs.loader.style.setProperty('--loader-size', loaderSize + 'px')
      this.$refs.loader.style.setProperty('--loader-circle-size', loaderCircleSize + 'px')
    },
    setColor() {
      switch( this.color ) {
      case 'white':
        this.$refs.loader.style.setProperty('--loader-color', '#fffefb')
        return
      default:
        return
      }
    },
  },

}
</script>
<style lang="scss" scoped>
@keyframes loader-1 {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes loader-2 {
	0% {
		transform: translate3d(0, 0, 0) scale(1);
	}

	50% {
		transform: translate3d(300%, 0, 0) scale(0.5);
	}

	100% {
		transform: translate3d(0, 0, 0) scale(1);
	}
}

@keyframes loader-3 {
	0% {
		transform: translate3d(0, 0, 0) scale(1);
	}

	50% {
		transform: translate3d(-300%, 0, 0) scale(0.5);
	}

	100% {
		transform: translate3d(0, 0, 0) scale(1);
	}
}

@keyframes loader-4 {
	0% {
		transform: translate3d(0, 0, 0) scale(1);
	}

	50% {
		transform: translate3d(0, 300%, 0) scale(0.5);
	}

	100% {
		transform: translate3d(0, 0, 0) scale(1);
	}
}

@keyframes loader-5 {
	0% {
		transform: translate3d(0, 0, 0) scale(1);
	}

	50% {
		transform: translate3d(0, -300%, 0) scale(0.5);
	}

	100% {
		transform: translate3d(0, 0, 0) scale(1);
	}
}

@mixin loader-circle {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: block;
	width: var(--loader-circle-size);
	height: var(--loader-circle-size);
	margin: auto;
	border-radius: 50%;
	background: var(--loader-color);
}

.loader__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.loader__title {
	margin-top: rem(16px);
}

.loader {
	--loader-size: 32px;
	--loader-circle-size: 8px;
	--loader-color: $black;

	position: relative;
	width: var(--loader-size);
	height: var(--loader-size);
	animation: loader-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.loader::before {
	@include loader-circle;

	right: auto;
	animation: loader-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.loader::after {
	@include loader-circle;

	left: auto;
	animation: loader-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.loader .loader__service-item {
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
}

.loader .loader__service-item::before {
	@include loader-circle;

	bottom: auto;
	animation: loader-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.loader .loader__service-item::after {
	@include loader-circle;

	top: auto;
	animation: loader-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

</style>
