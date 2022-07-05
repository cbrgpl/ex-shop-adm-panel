<template>
  <div class="select">
    <div
      class="select__placeholder"
      @click="toggleList"
    >
      <span class="select__placeholder-text">
        {{ displayPlaceholder }}
      </span>
    </div>

    <Transition name="select-list-anim">
      <ul
        v-if="listVisible"
        class="select__list"
      >
        <li
          v-for="(option, i) of options"
          :key="i"
          @click="emitSelect(option)"
        >
          <component
            :is="optionComponent"
            :item="option"
            :value-getter="valueGetter"
          />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script>
import ZSelectOption from './ZSelectOption.vue'

export default {
  name: 'ZSelect',
  props: {
    placeholder: {
      type: String,
      default: 'Выберите значение'
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Object],
      required: true,
    },
    valueGetter: {
      type: Function,
      default: (val) => val
    },
    returnObject: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      listVisible: false,
    }
  },
  computed: {
    optionComponent() {
      return this.$slots.option ? this.$slots.option : ZSelectOption
    },
    displayPlaceholder() {
      return this.modelValue ? this.valueGetter(this.modelValue) : this.placeholder
    }
  },
  methods: {
    emitSelect(option) {
      this.toggleList()
      const emitValue = this.returnObject ? option : this.valueGetter(option)
      this.$emit('update:modelValue', emitValue)
    },
    toggleList() {
      this.listVisible = !this.listVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
	position: relative;
	user-select: none;

	&__placeholder {
		display: flex;
		align-items: center;
		padding: rem(10px) 16px;
		border-radius: 4px;
		background: $surface;
		box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
		cursor: pointer;

		&::after {
			content: "";
			display: block;
			width: 5px;
			height: 5px;
			margin-left: rem(5px);
			border-width: 0;
			border-style: solid;
			border-color: $placeholder;
			border-right-width: 1px;
			border-bottom-width: 1px;
			transform: rotate(45deg);
		}
	}

	&__placeholder-text {
		color: $placeholder;
		font-weight: 400;
		font-size: rem(12px);
	}

	&__list {
		position: absolute;
		top: calc(100% + 8px);
		z-index: 20;
		width: 100%;
		border-radius: 4px;
		background: $surface;
		box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
	}
}

.select-list-anim {
	&-enter-from {
		opacity: 0;
		transform: translateY(-16px);
	}

	&-enter-active {
		transition: all 110ms ease-in;
	}

	&-leave-to {
		opacity: 0;
		transform: translateX(24px);
	}

	&-leave-active {
		transition: all 80ms ease-out;
	}
}
</style>
