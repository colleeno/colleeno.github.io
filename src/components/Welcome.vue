<template>
	<div class="content-wrapper">
		<Stars 
			v-if="darkMode"
		/>
		<div class="text-content">
			<header>
				<h1 class="headline">Colleen O&#39;Reilly</h1>
				<hr class="border"/>
			</header>
			<section class="copy">
				<p>
					Welcome! Nice to meet you. I&#39;m Colleen O&#39;Reilly, a software engineer living in Annapolis, MD.
					My non-traditional journey into engineering has equipped me with a unique perspective and focus on the user experience.
					I&#39;m passionate about the entire user journey - how they came to a website, what they&#39;re looking for, how they interact with the site, 
					and how to make that experience as seamless and enjoyable as possible.
				</p>
				<p>
					I graduated Cum Laude from James Madison University with a degree in Media Arts and Design. I studied basic design principles across 
					a variety of media formats, including print, web, and video. Creating interactive experiences was always my favorite, and was always drawn 
					to the idea of a career in Web development or design.
				</p>
				<p>
					My career started at CustomInk.com, where I honed my attention to detail in the art department. My curiosity to learn more about the
					full customer experience led me to an order coordination role. From there I joined the CRM marketing team, where I learned the ins and outs 
					of email marketing, segmentation, A/B testing, and got my first taste of HTML and CSS to edit email templates and landing pages.
				</p>
				<p>
					I then joined LivingSocial, a small startup at the time, where I thrived in a fast-paced environment, gained leadership experience, 
					and deepened my coding skills on the email team. Wanting to learn more about web development, I took a part time Front-End development course at General Assembly, 
					and was hooked. From there I took a full stack immersive course at General Assembly and decided to make the career switch to software engineering.
				</p>
				<p>
					I&#39;m currently working at Framebridge, where I was thrilled at the opportunitity to join several former LivingSocial colleagues. I started as a Front-End
					engineer, assigned to work with the marketing organization. After about a year working exclusively with marketing, I was asked to move to a full stack software engineering 
					role with our consumer team, focused on our core site experience. It&#39;s been great to expand my knowledge and experience, working on our Rails backend, 
					and modernizing our front end (ex: AngularJS to Vue.js). Most recently I played a pivotal role in the migration of the consumer-facing website to Shopify, 
					including a comprehensive site redesign. This encompassed the rewriting of core site flows, development of new APIs using GraphQL, 
					and implementating various enhancements for an optimized user experience. As a small team, I love having the ability to work directly with our design and product 
					teams, and provide input and suggestions on new builds and updating current features.
				</p>
				<p>
					When I&#39;m not working, I love spending time outdoors, visiting Bethany Beach, and spending with my awesome rescue dog Weezer. 
					If you&#39;d like to connect, please reach out to me on <a href="https://www.linkedin.com/in/colleen-o-reilly-a207579/" target="_blank">LinkedIn</a>,
					and you can find me on github as <a href="https://github.com/colleeno" target="_blank">colleeno</a>. 
					You can click <a href="/public/Resume_ColleenOReilly.pdf" download="Resume_Colleen O'Reilly">here</a> to download the hardcopy of my resume. 
					Thanks for stopping by!
				</p>
			</section>
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
		transform-origin: center;
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

	.nav-icon {
		margin-right: 0.5em;
	}
</style>