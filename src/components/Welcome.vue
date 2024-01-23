<template>
	<div class="content-wrapper">
		<Stars 
			v-if="darkMode"
		/>
		<div class="text-content">
			<header>
				<h1 class="headline">Colleen O'Reilly</h1>
				<hr class="border"/>
			</header>
			<section class="copy">
				<p>
					Welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet
					suspendisse interdum consectetur libero id. Neque vitae tempus quam
					pellentesque. Penatibus et magnis dis parturient montes nascetur ridiculus
					mus. Ipsum dolor sit amet consectetur. Id aliquet risus feugiat in. Nunc
					pulvinar sapien et ligula ullamcorper malesuada. Venenatis lectus magna
					fringilla urna porttitor rhoncus dolor purus. Rhoncus est pellentesque elit
					ullamcorper dignissim cras. Libero volutpat sed cras ornare arcu. Malesuada
					fames ac turpis egestas. Id porta nibh venenatis cras. Vulputate ut pharetra
					sit amet aliquam id diam maecenas. Ligula ullamcorper malesuada proin libero
					nunc consequat interdum. Eu augue ut lectus arcu bibendum at varius vel.
					Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Viverra
					tellus in hac habitasse platea dictumst. Blandit cursus risus at ultrices mi
					tempus imperdiet. Amet mauris commodo quis imperdiet massa tincidunt nunc.
					Nisl suscipit adipiscing bibendum est ultricies integer.
				</p>
				<p>
					Quam viverra orci sagittis eu volutpat odio facilisis. Amet massa vitae
					tortor condimentum lacinia. Nisi vitae suscipit tellus mauris a diam. Amet
					justo donec enim diam vulputate. Morbi leo urna molestie at. Risus feugiat
					in ante metus dictum. Pulvinar etiam non quam lacus suspendisse faucibus
					interdum posuere. Hendrerit gravida rutrum quisque non tellus orci ac
					auctor. Nulla at volutpat diam ut. Nullam vehicula ipsum a arcu cursus vitae
					congue. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
					Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
					Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Massa eget
					egestas purus viverra accumsan in. Pretium viverra suspendisse potenti
					nullam ac tortor. Magnis dis parturient montes nascetur ridiculus. Bibendum
					at varius vel pharetra vel.
				</p>
				<p>
					Ultrices eros in cursus turpis massa tincidunt dui ut. Adipiscing bibendum
					est ultricies integer quis auctor elit sed vulputate. Sem fringilla ut morbi
					tincidunt augue interdum. Sit amet consectetur adipiscing elit. Enim sed
					faucibus turpis in eu mi bibendum. Adipiscing enim eu turpis egestas pretium
					aenean pharetra magna ac. Nunc eget lorem dolor sed viverra. Accumsan lacus
					vel facilisis volutpat est velit. Elementum nibh tellus molestie nunc non
					blandit. Turpis egestas maecenas pharetra convallis posuere morbi leo urna.
					Non tellus orci ac auctor augue mauris augue neque gravida.
				</p>
			</section>
			<div class="theme-toggle">
				<button @click="toggleMode">
					<!-- <i class="fa fa-moon-o" aria-hidden="true" v-if=></i> -->
					{{ oppositeMode }} mode
				</button>
			</div>
		</div>
	</div>	
</template>
<script>
import Stars from './Stars.vue'
import { animate } from '../assets/animations.js'

export default {
	components: {
		Stars
	},
	data () {
		return {
			mode: 'light'
		}
	},
	mounted () {
		this.animateContent();
		this.detectAndSetMode();	
	},
	computed: {
		toggleMode () {
			if (this.mode === 'light') {
				this.mode = 'dark';
			} else {
				this.mode = 'light';
			}
		},
		darkMode () {
			return Boolean(this.mode === 'dark');
		},
		oppositeMode () {
			if (this.mode === 'light') {
				return 'dark';
			} else {
				return 'light';
			}
		}
	},
	methods: {
		animateContent () {
			animate.header();
			animate.border();
			animate.fade('.copy p');
			animate.fade('.theme-toggle');
		},
		detectAndSetMode () {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				this.mode = 'dark';
			} else {
				this.mode = 'light';
			}
		}
	},
	watch: {
		mode (val) {
			if (val === "light" || val === "dark") {
				document.documentElement.classList.remove("light", "dark");
				document.documentElement.classList.add(val);
			}
		}
	}
}
</script>

<style lang="scss">
	.content-wrapper {
		position: relative;
	}

	.border {
		margin: 40px 0;
	}
	.text-content {
		border-radius: 16px;
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
		height: 100%;
		margin: 10% auto;
		max-width: 80%;
		padding: 2em;
		position: relative;
		z-index: 2;

		@media screen and (min-width: $lg) {
			max-width: 70%;
		}
	}

	.dark {
		.text-content {
			background: rgba(27, 39, 53, 0.7);
		}
	}

	.theme-toggle {
		position: fixed;
		right: 2%;
		top: 2%;
		z-index: 2;
	}
</style>