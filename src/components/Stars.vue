<template>
	<div id="stars">
		<div 
			v-for="star in stars"
			:key="star.id"
			class="star"
			ref="star"
			:style="{
				animationDelay: star.animationDelay + 's',
				animationDuration: star.animationDuration + 's',
				top: star.top + 'vh',
				left: star.left + 'vw',
				width: star.size + 'px',
				height: star.size + 'px'
			}"
		>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			stars: []
		}
	},
	mounted () {
		this.generateStars(175);
	},
	methods: {
		generateStars(count) {
			for (let i = 0; i < count; i++) {
				const duration = Math.random() * 10 + 10;
				const size = Math.floor(Math.random() * 3) + 1;
				this.stars.push({
					id: i,
					animationDelay: Math.random() * duration,
					animationDuration: duration,
					top: Math.random() * 100,
					left: Math.random() * 100,
					size: size
				});
			}
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