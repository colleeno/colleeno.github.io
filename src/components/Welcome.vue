<template>
	<div class="content-wrapper">
		<Stars 
			v-if="darkMode"
		/>
		<StyleMode
			:mode="mode"
			@setMode="setMode($event)"
		/>
		<div class="text-content">
			<header>
				<h1 class="headline">Colleen O&#39;Reilly</h1>
				<hr class="border"/>
			</header>
			<section class="copy">
				<p>
					Welcome! Nice to meet you. I&#39;m Colleen O&#39;Reilly, a software engineer living in Annapolis, MD.
					With a background in design and marketing, I&#39;m passionate about the entire user journey - how they came to a website, 
					what they&#39;re looking for, how they interact with the site, 
					and how to make that experience as seamless and enjoyable as possible.
				</p>
				<p>
					I graduated Cum Laude from James Madison University with a degree in Media Arts and Design. I studied basic design principles across 
					a variety of media formats, including print, web, and video.
				</p>
				<p>
					My career started at CustomInk.com, where I worked in the art department. My curiosity to learn more about the
					full customer experience led me to an order coordination role. From there I joined the CRM marketing team, where I learned the ins and outs 
					of email marketing, and got my first taste of HTML and CSS in order to edit email templates and landing pages.
				</p>
				<p>
					I then joined LivingSocial, a small startup at the time, where I thrived in a fast-paced environment, gained leadership experience, 
					and deepened my coding skills on the email team. Wanting to learn more about web development, I took a part time Front-End development course at General Assembly, 
					and was hooked. From there I took a full stack immersive course at General Assembly and decided to make the career switch to software engineering.
				</p>
				<p>
					I&#39;m currently working at Framebridge, where I have been for the past 5 years. I started as a Front-End
					engineer, assigned to work with the marketing organization. After about a year working exclusively with marketing, I was asked to move to a full stack software engineering 
					role with our consumer team, focused on our core site experience. It&#39;s been great to expand my knowledge and experience, working on our Rails backend, 
					and modernizing our front end (ex: AngularJS to Vue.js). Most recently I played a pivotal role in the migration of the consumer-facing website to Shopify, 
					including a comprehensive site redesign. This encompassed the rewriting of core site flows, development of new APIs using GraphQL, 
					and implementating various enhancements for an optimized user experience. As a small team, I love having the ability to work directly with our design and product 
					teams, and provide input and suggestions on new builds and updating current features.
				</p>
				<p>
					When I&#39;m not working, I love spending time outdoors, visiting Bethany Beach, and playing with my awesome rescue dog Weezer. 
					If you&#39;d like to connect, please reach out to me on <a href="https://www.linkedin.com/in/colleen-o-reilly-a207579/" target="_blank">LinkedIn</a>,
					and you can find me on github as <a href="https://github.com/colleeno" target="_blank">colleeno</a>. 
					You can click <a href="/Resume_ColleenOReilly.pdf" download="Resume_Colleen O'Reilly">here</a> to download the hardcopy of my resume. 
					Thanks for stopping by!
				</p>
			</section>
		</div>
	</div>
</template>
<script>
import Stars from './Stars.vue'
import StyleMode from './StyleMode.vue'
import { animate } from '../assets/animations.js'

export default {
	components: {
		Stars,
		StyleMode
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
		darkMode () {
			return Boolean(this.mode === 'dark');
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
		},
		setMode (mode) {
			this.mode = mode;
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
		margin: 30px 0;
		transform-origin: center;

		@media screen and (min-width: $md) {
			margin: 40px 0;
		}
	}

	.text-content {
		border-radius: 16px;
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
		height: 100%;
		margin: 10% auto;
		max-width: 90%;
		padding: 2em;
		position: relative;
		z-index: 2;

		@media screen and (min-width: $md) {
			max-width: 80%;
		}

		@media screen and (min-width: $lg) {
			max-width: 70%;
		}
	}

	.dark {
		.text-content {
			background: rgba(27, 39, 53, 0.7);
		}
	}
</style>