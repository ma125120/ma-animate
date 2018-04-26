var code = {
	common: `.ma-animate {
	animation: slide 3s ease-out;
	transform-origin: 0 0;
}`
}

new Vue({
	el: "#app",
	data() {
		return {
			play: false,
			animates: [{
				title:'向上收缩',
				classes: 'slide-up',
				code: code.common+`
.slide-up {
	animation-name: slide;
	animation-direction: reverse;
}
@keyframes slide {
	0% {
		transform: scale(1,0);
	}
	100% {
		transform: scale(1,1);
	}
}`
			},{
				title:'向下展开',
				classes: 'slide-down',
				code: code.common+`
.slide-down {
	animation-name: slide;
}
@keyframes slide {
	0% {
		transform: scale(1,0);
	}
	100% {
		transform: scale(1,1);
	}
}`
			},{
				title:'从左侧向右展开',
				classes: 'slide-left-open',
				code: code.common+`
.slide-left-open {
	animation-name: slide-lr;
}
@keyframes slide-lr {
	0% {
		transform: scale(0,1);
	}
	100% {
		transform: scale(1,1);
	}
}`
			},{
				title:'从右侧向左收缩',
				classes: 'slide-left-close',
				code: code.common+`
.slide-left-close {
	animation-name: slide-lr;
	animation-direction: reverse;
}
@keyframes slide-lr {
	0% {
		transform: scale(0,1);
	}
	100% {
		transform: scale(1,1);
	}
}`
			},{
				title:'从右侧向左展开',
				classes: 'slide-right-open',
				code: code.common+`
.slide-right-open {
	animation-name: slide-rl;
	transform-origin: 100% 0;
}
@keyframes slide-rl {
	0% {
		transform: scale(0,1);
	}
	100% {
		transform: scale(1,1);
	}
}`
			},{
				title:'从左侧向右收缩',
				classes: 'slide-right-close',
				code: code.common+`
.slide-right-close {
	animation-name: slide-rl;
	transform-origin: 100% 0;
	animation-direction: reverse;
}
@keyframes slide-rl {
	0% {
		transform: scale(0,1);
	}
	100% {
		transform: scale(1,1);
	}
}`
			}]
		}
	},
	methods: {
		copy(i) {
			var range = document.createRange();
			var el = this.$refs['copy'+i][0];
			var end = el.childNodes.length;
			range.setStart(el,0);
			range.setEnd(el,end);

			var selection = window.getSelection();
			selection.addRange(range);
			document.execCommand("copy",false,null);
			selection.removeRange(range);

			this.toggleState(i,'display')
		},
		toggleState(i,state='play') {
			var animates = [...this.animates],
					obj = animates[i];

			obj[state] = !obj[state];
			animates[i] = obj;
			this.animates = animates;
		},
		togglePlay() {
			this.play = !this.play;
		}
	}
})



