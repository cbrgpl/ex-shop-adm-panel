<template>
  <button class="button">
    <span class="button__inner">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'ZButton',
}
</script>
<style lang="scss" scoped>
.button {
	$bg-color: #7bae73;

	padding: rem(10px) rem(20px);
	border-radius: 10px;
	background: $bg-color;
	color: #fff;
	box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
	transition: all 120ms ease;

	&:hover {
		background: darken($bg-color, 5%);
	}

	&:active {
		background: darken($bg-color, 15%);
	}
}

.button__inner {
	font-weight: 600;
	font-size: rem(12px);
}

.button:disabled {
	background: #eee;
	box-shadow: none;
	pointer-events: none;

	& > .button__inner {
		color: #b4b4b4;
	}
}
</style>
