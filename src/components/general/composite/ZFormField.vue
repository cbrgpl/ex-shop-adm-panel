<template>
  <label class="form-field__wrapper">
    <label class="form-field__label">
      <slot
        name="label"
        :label="label"
      >
        {{ label }}
      </slot>
    </label>

    <slot
      name="input"
      v-bind="{attrs: $attrs, props: $props}"
    />

    <Transition name="form-field__error-anim">
      <label
        v-show="errorState"
        class="form-field__error-label"
      > {{ onError }} </label>
    </Transition>
  </label>
</template>

<script>
export default {
  name: 'ZFormField',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    onError: {
      type: String,
      default: ''
    },
    errorState: {
      type: [Boolean, null],
      default: false
    }
  }
}
</script>

<style lang="scss">
.form-field {
	&__input {
		padding: rem(10px) rem(16px);
		border: 1px solid transparent;
		border-radius: 4px;
		background: $surface;
		color: $black;
		box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
		font-size: rem(16px);
		font-family: $font;

		&[data-error="true"] {
			border-color: $danger;
		}

		&::placeholder {
			color: $placeholder;
			font-weight: 400;
		}
	}

	&__wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-bottom: rem(15px);
		padding-bottom: rem(18px);
	}

	&__label {
		margin-bottom: rem(5px);
		color: #49485e;
		font-weight: 400;
		font-size: rem(16px);
	}

	&__error-label {
		position: absolute;
		bottom: 0;
		left: 0;
		color: $danger;
		font-weight: 400;
		font-size: rem(15px);
	}
}

.form-field__error-anim {
	&-enter-from {
		opacity: 0;
		transform: translateY(-15px);
	}

	&-enter-to {
		opacity: 1;
		transform: translateY(0);
	}

	&-enter-active {
		transition: all 140ms;
	}
}

</style>
