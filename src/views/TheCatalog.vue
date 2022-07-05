<template>
  <ZView
    ref="view"
    title="Добавление товара"
  >
    <template #header>
      <ZSelect
        v-model="selectedSortMode"
        class="catalog__sort-select"
        placeholder="По умолчанию"
        :options="sortModes"
      />
    </template>

    <template #default>
      <div class="catalog__content">
        <ZCard class="catalog__form-card">
          <ZProductForm
            ref="productForm"
            @submitted="addProduct"
          />
        </ZCard>


        <div class="catalog__grid">
          <ZProductCard
            v-for="product of products"
            :key="product.id"
            v-bind="product"
            @delete="deleteProduct"
          />
        </div>
      </div>
    </template>
  </ZView>
</template>

<script>
import ZProductForm from '@admin_components/composite/ZProductForm.vue'
import ZProductCard from '@admin_components/composite/ZProductCard/ZProductCard.vue'

import ZView from '@general_components/atomic/ZView.vue'
import ZCard from '@general_components/atomic/ZCard.vue'
import ZSelect from '@general_components/composite/ZSelect/ZSelect.vue'

import { productService } from '@modules/productService'

import { sortModes } from '@enums/sortModes.js'

import { arrayUtils } from 'js_utils'
export default {
  name: 'TheCatalog',
  components: {
    ZProductForm,
    ZCard,
    ZProductCard,
    ZSelect,
    ZView
  },
  data() {
    return {
      selectedSortMode: '',
      products: []
    }
  },
  computed: {
    sortModes() {
      return Object.keys(sortModes).map(( key ) => sortModes[key])
    }
  },
  watch: {
    async selectedSortMode( selectedSortMode ) {
      this.setProductsBySortMode(selectedSortMode)
    }
  },
  mounted() {
    this.setProductsBySortMode()
  },
  methods: {
    async setProductsBySortMode(selectedSortMode) {
      const view = this.$refs.view

      view.setLoaderState(true)
      this.products = await productService.get(selectedSortMode)
      view.setLoaderState(false)

    },
    async addProduct( product ) {
      const productForm = this.$refs.productForm

      productForm.setButtonLoadingState(true)

      const newProduct = await productService.add(product)
      this.products.push(newProduct)

      productForm.reset()
      productForm.setButtonLoadingState(false)
    },
    async deleteProduct({ id, unfreezeCard }) {
      await productService.delete(id)
      arrayUtils.remove(this.products, ( product ) => product.id === id)
    },

  },
}
</script>

<style lang="scss" scoped>
.catalog {
	&__sort-select {
		width: rem(160px);
	}

	&__form-card {
		margin-bottom: rem(20px);
		padding: rem(6px);
	}

	&__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(#{rem(300px)}, 1fr));
		gap: rem(8px) rem(10px);
	}
}

@media screen and (min-width: $lg) {
	.catalog {
		&__form-card {
			padding: rem(12px);
		}

		&__grid {
			gap: rem(16px) rem(10px);
		}
	}
}

@media screen and (min-width: $xl) {
	.catalog {
		&__content {
			display: flex;
			align-items: flex-start;
		}

		&__form-card {
			width: rem(380px);
			margin-right: rem(16px);
			margin-bottom: 0;
			padding: rem(24px);
		}

		&__grid {
			grid-template-columns: repeat(3, 1fr);
			gap: rem(16px);
		}
	}
}
</style>
