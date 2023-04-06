/**
 * Import dependencies from node_modules
 * see commented examples below
 */


import Isotope from 'isotope-layout';
import fslightbox from 'fslightbox';
import SuperMarquee from 'sp-supermarquee';

/**
 * Write any other JavaScript below
 */


// init isotope gallery;

+( function() {
	var iso = new Isotope( '.grid', {
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
			gutter: 10
		},
		getSortData: {
			category: '[data-category]'
		}
	});

	window.addEventListener('load', (event) => {
		iso.arrange({ filter: '.tab-triangle' });
		iso.arrange({ sortBy: 'random' });
	});

	let filtersElem = document.querySelectorAll('.filter-button-group .button');

	filtersElem.forEach(function(filterElem) {
		filterElem.addEventListener( 'click', function() {
			let filterValue = this.getAttribute('data-filter');
			iso.arrange({ filter: filterValue });
		});
	});
} )();


// set class in active buttons isotope gallery

+( function() {
	let buttonGroup = document.querySelectorAll('.button-group .button');

	buttonGroup.forEach(function(button) {
		button.addEventListener('click', function(e) {
			document.querySelector('.is-checked').classList.remove('is-checked');
			button.classList.add('is-checked');
		});
	});
} )();


// set animation marquee

const speedMapping = [ "superfast",  "slow",  "medium",  "fast", "medium", "slow", "fast" ];
let separators = document.querySelectorAll('.separator-text-custom');
let i = 0;

separators.forEach( ( scrollContainer ) => {
	new SuperMarquee( scrollContainer,
		{
			"content": "Muro de Berlín Muro de Berlín Muro de Berlín",
			"speed" : speedMapping[ i % 6 ]
		}
	);

	if (separators[1]) {
		new SuperMarquee( separators[1],
			{
				"content": "Muro de Berlín Muro de Berlín Muro de Berlín",
				"speed" : speedMapping[ i % 6 ],
				"direction" : "rtl"
			}
		);
	} 
	i++;
});


+(function () {
    
    // aspect-ratio

    let aspectRatio = document.querySelectorAll('.js-set-aspect-ratio');

	window.addEventListener('DOMContentLoaded', (event) => {
		aspectRatio.forEach(function(r) {
			let width = r.getAttribute('width');
			let height = r.getAttribute('height');
			r.style.aspectRatio = `${width} / ${height}`;
			r.style.width = '100%';
			r.style.height = '100%';
			// console.log(`${width} / ${height}`);
		})
	});

})();


+(function () {
    
    // accordion

    let containers = document.querySelectorAll('.accordion-panel');
	let buttons = document.querySelectorAll('.js-accordion-button');
	let buttons_mobile = document.querySelectorAll('.js-accordion-button-mobile');

	function show_content(elem) {
		clear_panel();
		elem.classList.add('active');
	}

	buttons.forEach(function(button, index){
		button.addEventListener('click', function() {
			if (hasClass(button, 'active') != true) {
				show_content(containers[index])
				this.classList.add('active');
			} else {
				clear_panel();
			}
		});
	});

	buttons_mobile.forEach(function(button_mobile, index){
		button_mobile.addEventListener('click', function() {
			if (hasClass(button_mobile, 'active') != true) {
				show_content(containers[index])
				this.classList.add('active');
			} else {
				clear_panel();
			}
		});
	});

	function clear_panel() {
		containers.forEach(function(container){
			container.classList.remove('active');
		});
		buttons.forEach(function(button){
			button.classList.remove('active');
		});
		buttons_mobile.forEach(function(button_mobile){
			button_mobile.classList.remove('active');
		});
	}

	function hasClass(element, className) {
		return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
	}

})();



