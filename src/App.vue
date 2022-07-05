<template>
  <router-view @viewInited="removeTemplatePreloader" />
</template>

<script>


export default {
  name: 'App',
  methods: {
    removeTemplatePreloader() {
      setTimeout(() => {
        const $templatePreloader = document.querySelector('#template-preloader')

        // Из-за hot-reload вылетает ошибка, которой не будет в обычной ситуации
        if($templatePreloader) {
          document.body.removeChild($templatePreloader)
        }
      }, 0);
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
