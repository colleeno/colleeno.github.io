<template>
	<div class="theme-toggle">
		<button @click="toggleMode">
			<span v-if="darkMode">
				<i class="fa-solid fa-mug-saucer fa-sm nav-icon" aria-hidden="true"></i>
				{{ oppositeMode }} mode
			</span>
			<span v-else>
				<i class="fa-solid fa-moon fa-sm nav-icon" aria-hidden="true"></i>
				{{ oppositeMode }} mode
			</span>
		</button>
	</div>
</template>
<script>
export default {
	props: {
		mode: {
			type: String,
			required: true
		}
	},
	computed: {
		oppositeMode () {
			if (this.mode === 'light') {
				return 'dark';
			} else {
				return 'light';
			}
		},
		darkMode () {
			return Boolean(this.mode === 'dark');
		}
	},
	methods: {
		toggleMode () {
			if (this.mode === 'light') {
				this.$emit("setMode", "dark");
			} else {
				this.$emit("setMode", "light")
			}
		},
	},
}
</script>

<style lang="scss">
	.theme-toggle {
		position: fixed;
		right: 2%;
		top: 2%;
		z-index: 2;
	}

	.nav-icon {
		margin-right: 0.5em;
	}
</style>