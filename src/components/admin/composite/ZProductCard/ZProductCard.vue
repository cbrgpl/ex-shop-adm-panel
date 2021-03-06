<template >
  <ZCard
    ref="card"
    class="product-card" >
    <DeleteButton
      :disabled="deleteButtonDisabled"
      class="product-card__delete-button"
      @click="emitDelete" />

    <img
      class="product-card__media"
      :src="media" >

    <div class="product-card__content" >
      <h5 class="product-card__title" >
        {{ title }}
      </h5>
      <p class="product-card__description" >
        {{ description }}
      </p>
      <strong class="product-card__price" >
        {{ splittedPrice }} руб.
      </strong>
    </div>
  </ZCard>
</template>

<script>
import ZCard from '@general_components/atomic/ZCard.vue'

import DeleteButton from './partials/DeleteButton.vue'

import { splitPrice } from '@functions/splitPrice.js'

export default {
  name: 'ZProductCard',
  components: {
    ZCard,
    DeleteButton
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    media: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      required: true,
    }
  },
  emits: [ 'delete' ],
  data() {
    return {
      deleteButtonDisabled: false,
    }
  },
  computed: {
    splittedPrice() {
      return splitPrice( this.price )
    }
  },
  beforeUnmount() {
    this.hardcoreCardWidth()
  },
  methods: {
    emitDelete() {
      this.$refs.card.setLoaderStateTo( true )
      this.deleteButtonDisabled = true
      this.$emit( 'delete', {
        id: this.id,
        unfreezeCard: this.unfreezeCard
      } )
    },
    unfreezeCard() {
      this.$refs.card.setLoaderStateTo( false )
      this.deleteButtonDisabled = false
    },
    hardcoreCardWidth() {
      console.log( 'hard' )
      const cardWidth = this.$refs.card.$el.getBoundingClientRect().width
      this.$refs.card.$el.style.width = `${ cardWidth }px`
    }
  }

}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;

  &__delete-button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    transform: translate(8px, -8px);
  }

  &__media {
    object-fit: cover;
    width: 100%;
    height: rem(200px);
    background: #eee;
  }

  &__content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: rem(24px);
  }

  &__title {
    margin-bottom: rem(16px);
    display: -webkit-box;
    overflow: hidden;
    word-wrap: anywhere;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-weight: 600;
    font-size: rem(20px);
  }

  &__description {
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;
    flex-grow: 1;
    overflow: hidden;
    margin-bottom: rem(32px);
    font-weight: 400;
    font-size: rem(16px);
    word-wrap: anywhere;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &__price {
    font-weight: 600;
    font-size: rem(24px);
  }
}
</style>
