<template>
  <div>
    <ZCard>
      <ZButtonWithLoader
        :loader="loaders.remove"
        @click="removeProduct"
      >
        Удалить
      </ZButtonWithLoader>
      <ZButtonWithLoader
        :loader="loaders.add"
        @click="addProduct"
      >
        Добавить
      </ZButtonWithLoader>
      <ZButtonWithLoader
        :loader="loaders.sort"
        @click="getProducts"
      >
        Отсортировать
      </ZButtonWithLoader>

      <div>
        <ZSelect
          v-model="sortField"
          style="width: 160px;"
          placeholder="По умолчанию"
          :options="['Цена - убывание', 'Цена - убывание', 'Наименование']"
        />
      </div>
    </ZCard>

    <ZInput
      placeholder="Input 1 holder"
      label="The input 1"
      :error-state="inputError"
      :on-error="'There is error 1'"
    />

    <ZTextarea
      v-model="text"
      placeholder="text area holder"
      label="text area"
      :error-state="inputError"
      on-error="there is error!!!"
    />


    <ZButton
      disabled
      @click="test"
    >
      Selecte i
    </ZButton>

    <ZButtonWithLoader
      :loader="false"
      @click="test"
    >
      Select an item
    </ZButtonWithLoader>
    <ZCard
      ref="card"
      style="width: 50%; margin: auto; padding: 24px;"
    >
      <ZProductForm @submitted="test" />
    </ZCard>

    <div style="width: 420px;">
      <ZRequiredInput
        v-model="text"
        label="Required input"
        placeholder="some required input"
      />

      {{ text }}
    </div>

    <ZSelect
      v-model="selected"
      style="width: 130px;"
      placeholder="По умолчанию"
      :value-getter="(option) => option.pr"
      return-object
      :options="[{pr: 'one'}, {pr: 'two'}, {pr: 'three'}, {pr: 'four'}, {pr: 'five'}]"
    />

    <!-- <ZProductCard
      style="width: 50%;"
      v-bind="product"
      @delete="deleteProduct"
    /> -->




    {{ selected }}
  </div>
</template>

<script>
import ZInput from '@general_components/composite/ZInput.vue'
import ZTextarea from '@general_components/composite/ZTextarea.vue'
import ZButton from '@general_components/atomic/ZButton.vue'
import ZButtonWithLoader from '@general_components/composite/ZButtonWithLoader.vue'
import ZProductForm from '@admin_components/composite/ZProductForm.vue'
import ZRequiredInput from '@general_components/composite/ZRequiredInput.vue'
import ZCard from '@general_components/atomic/ZCard.vue'
// import ZProductCard from '@admin_components/composite/ZProductCard/ZProductCard.vue'

import ZSelect from '@general_components/composite/ZSelect/ZSelect.vue'

import { backend } from '@modules/backend'

export default {
  name: 'TheCatalog',
  components: {
    ZInput,
    ZTextarea,
    ZButton,
    ZButtonWithLoader,
    ZProductForm,
    ZRequiredInput,
    ZCard,
    // ZProductCard,
    ZSelect,
    // ZSelectOption
  },
  data() {
    return {
      loaders: {
        add: false,
        remove: false,
        sort: false,
      },
      sortField: '',

      selected: '',
      text: 'zxc',
      inputError: null,
      loader: false,
      product: {
        media: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        title: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
      }
    }
  },
  methods: {
    toggleInputError() {
      this.inputError = !this.inputError
    },
    test(ev) {
      this.$refs.card.setLoaderStateTo(!this.loader)
      this.loader = !this.loader
      console.log('test', ev)
    },
    deleteProduct( { id, unfreezeCard } ) {
      console.log(id)

      setTimeout(() => {
        unfreezeCard()
      }, 1500);
    },
    async removeProduct() {
      this.loaders.remove = true
      const result = await backend.remove(0)
      console.log(result)
      this.loaders.remove = false
    },
    async addProduct() {
      this.loaders.add = true
      const result = await backend.add( this.product )
      console.log(result)
      this.loaders.add = false

    },
    async getProducts() {
      this.loaders.sort = true

      const products = await backend.get(this.sortField)

      this.loaders.sort = false
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
