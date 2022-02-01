function onLoad (){
	const slider = document.querySelector(".slider");
	const slides = document.querySelectorAll(".slider-img");
	const majorContainer = document.querySelector(".slider-container");
	const sliderContainer = document.querySelectorAll(".case-slide");

	function slide(slides, slider){
		let width = 0;
		let canSlide = true;

		window.onresize = ()=>{
			window.location.reload();
		}

		slides.forEach(function(slide, index){
		 	width = slide.getBoundingClientRect().width;
			slide.style.left = `${width*(index-1)}px`;
		});

		slides.forEach(function(slide, index){
			slide.ontransitionend = function(){
				let currentLeft = slide.offsetLeft;
				if(slide.id === "last-first" && currentLeft < width && currentLeft >= 0) {
					slides.forEach(function(slid, i){
						slid.style.transition = "none";
						slid.style.left = `${width*(i)}px`;
					});
					
				}

				if(slide.id === "first-last" && currentLeft < width && currentLeft >= 0) {
					slides.forEach(function(slid, i){
						slid.style.transition = "none";
						slid.style.left = `${width*(i-(slides.length-2))}px`;
					});
					
				}

				canSlide = true;
			}
		});

		function slideEvent(to){
			slides.forEach(function(slide, index){
				slide.style.transition = "0.5s linear 0s";
				let currentLeft = slide.offsetLeft;
 
				if (!canSlide) return;

				switch (to){
					case "left":
						slide.style.left = `${currentLeft-(width)}px`;
						break;
					case "right":
						slide.style.left = `${currentLeft+(width)}px`;
						break;
					default: 
						slide.style.left = `${currentLeft-(width)}px`;
				}
			});

			canSlide = false;
				
		}
		let interval = setInterval(function(){
			slideEvent("right");
		}, 7500);

		slider.onclick = ()=>{ 
			if(!canSlide) return;
			slideEvent("left");
		}
	}

	slider && slide(slides, slider);
	majorContainer && slide(sliderContainer, majorContainer);




// services page javascript for hover



	let cards = document.querySelectorAll(".content");

    cards.forEach(card => {
        let hoverDiv = card.querySelector(".content_description");
        card.onmouseenter = () => {
            hoverDiv.style.display = "block";
        }

        card.onmouseleave = () => {
            hoverDiv.style.display = "none";
        }
    })



}



window.onload = onLoad;


// header scroll style

$(window).scroll(function(){
	if(this.scrollY > 500){
		$('.navbar').addClass("sticky");
		$('.navlink').addClass("color-switch")
		$('.nav-btn').removeClass("color-switch")
	}else{
		$('.navbar').removeClass("sticky");
		$('.navlink').removeClass("color-switch")
	} })





	let cards = document.querySelectorAll(".cards");

    cards.forEach(card => {
        let hoverDiv = card.querySelector(".onhover_div");
        card.onmouseenter = () => {
            hoverDiv.style.display = "flex";
        }

        card.onmouseleave = () => {
            hoverDiv.style.display = "none";
        }
    })
