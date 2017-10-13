	window.onload = function () {
		const picSlide = document.getElementsByClassName('pic-slide');
		const picNum = picSlide.length;
		const picLen = 9.1 - 0.48 * (picNum - 1);
		document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth/11 + 'px';
		Array.prototype.forEach.call(picSlide,function (el,i) {
			el.style.width = picLen +'rem';
			el.style.zIndex = i;
			el.index = i;
			el.addEventListener('click',turn);
			i!== 0 && (el.style.transform = `translate3d(${picLen + 0.48*(i - 1)}rem,0rem,0rem)` );
		});
		const node1 = document.getElementsByClassName('bedroom-item-bg')[0],
			node2 = document.getElementsByClassName('study-item-roll')[0];
		let bedroll = new BindSwiperNode(node1,{
			direction:{
				x:true,
				y:false
			},
			loop:true,
			pagination:'.pagination',
			paginationSelectedClassName:'pagination-active',
		}),
		studyroll = new BindSwiperNode(node2,{
			direction:{
				x:true,
				y:false
			},
			loop:true,
			bounce:{
				x:node2.offsetWidth/3,
				y:node2.offsetHeight
			},
			onceNum:3,
		});



		function turn(e) {
			const index = this.index ;
			e.stopPropagation();
			Array.prototype.forEach.call(picSlide,function(pi){
				pi.index <= index && ( pi.style.transform = `translate3d(${0.48*(pi.index)}rem,0rem,0rem)`) || pi.index!==0 &&( pi.style.transform = `translate3d(${picLen + 0.48*(pi.index - 1)}rem,0rem,0rem)`);

			});
		}

	}