<template>
	<div id="stars">
		<div v-for="i in 175" :key="i" class="star"></div>
	</div>
</template>
<script>

export default {
	mounted () {
		this.animateStars();
	},
	methods: {
		animateStars () {
			const stars = this.$el.querySelectorAll('.star');
    	stars.forEach(star => {
				const duration = Math.random() * 10 + 10;
				star.style.animationDelay = `${Math.random() * duration}s`;
				star.style.animationDuration = `${duration}s`;
				star.style.top = `${Math.random() * 100}vh`;
				star.style.left = `${Math.random() * 100}vw`;
				const size = Math.floor(Math.random() * 3) + 1;
				star.style.width = size;
				star.style.height = size;
		});
		}
	},
}
</script>

<style lang="scss">
	#stars {
		height: 100vh;
		overflow: hidden;
		position: fixed;
		width: 100%;

		.star {
			animation: moveStar linear infinite;
			background: white;
			height: 2px;
			opacity: 0;
			position: absolute;
			width: 2px;
		}
	}


	@keyframes moveStar {
		0% {
			opacity: 0;
			transform: translateY(0);
		}
		10% {
			opacity: 1;
		}
		50% {
			opacity: 0;
			transform: translateY(-50vh);
		}
		51% {
			opacity: 0;
			transform: translateY(-100vh);
		}
		80%, 100% {
			opacity: 0;
			transform: translateY(0);
		}
	}
</style>