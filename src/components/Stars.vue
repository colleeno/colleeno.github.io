<template>
	<div id="stars">
		<div v-for="i in 150" :key="i" class="star"></div>
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
		position: fixed;
		width: 100%;
		height: 100vh;
		overflow: hidden;

		.star {
			position: absolute;
			width: 2px;
			height: 2px;
			background: white;
			opacity: 0;
			animation: moveStar linear infinite;
		}
	}


	@keyframes moveStar {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		50% {
			transform: translateY(-50vh);
			opacity: 0;
		}
		51% {
			transform: translateY(-100vh);
			opacity: 0;
		}
		80%, 100% {
			transform: translateY(0);
			opacity: 0;
		}
	}
</style>