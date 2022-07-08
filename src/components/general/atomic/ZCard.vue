<template >
  <div class="card" >
    <slot />

    <Transition name="card__loader-transition" >
      <div
        v-if="loader"
        class="card__loader-wrapper" >
        <ZLoader
          size="md" />
      </div>
    </Transition>
  </div>
</template>

<script>
import ZLoader from '@general_components/atomic/ZLoader.vue'

export default {
  name: 'ZCard',
  expose: [ 'setLoaderStateTo' ],
  components: {
    ZLoader
  },
  data() {
    return {
      loader: false,
    }
  },
  methods: {
    setLoaderStateTo(  loaderState ) {
      this.loader = loaderState
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 4px;
  background: $surface;
  box-shadow: 0 20px 30px rgb(0 0 0 / 4%), 0 6px 10px rgb(0 0 0 / 2%);

  &__loader-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: rgb(0 0 0 / 35%);
  }
}

.card__loader-transition {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active {
    transition: all 140ms;
  }

  &-leave-active {
    transition: all 80ms;
  }
}
</style>
