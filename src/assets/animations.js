import anime from 'animejs';

export const animate = {
	header () {
		return anime({
			targets: 'header h1.headline',
			opacity: [0, 1],
			translateY: ['-10%', '0%'],
			easing: 'easeInOutQuad',
			duration: 500,
			delay: 300
		});
	},
	border () {
    return anime({
      targets: '.border',
			opacity: [0, 1],
			scaleX: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: 300
    });
  },
	fade (targets) {
    return anime({
      targets,
			opacity: [0, 1],
			translateY: ['-5%', '0%'],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: 500
    });
  }
}