/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


import Isotope from 'isotope-layout';
var fslightbox = require("fslightbox");


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
	
	iso.arrange({ filter: '.tab-triangle' });
	
	let filtersElem = document.querySelectorAll('.filter-button-group .button');
	
	filtersElem.forEach(function(filterElem) {
		filterElem.addEventListener( 'click', function() {
			var filterValue = this.getAttribute('data-filter');
			iso.arrange({ filter: filterValue });
			iso.arrange({ sortBy: 'random' });
		});
	});
} )();

// SORTING -> https://isotope.metafizzy.co/sorting.html


// set class in active buttons isotope gallery;

+( function() {
	let buttonGroup = document.querySelectorAll('.button-group .button');

	buttonGroup.forEach(function(button) {
		button.addEventListener('click', function(e) {
			document.querySelector('.is-checked').classList.remove('is-checked');
			button.classList.add('is-checked');
		});
	});
} )();


+(function () {
    
    // aspect-ratio

    let aspectRatio = document.querySelectorAll('.js-set-aspect-ratio');
    let width,
        height;

    aspectRatio.forEach(function(r) {
        width = r.getAttribute('width');
        height = r.getAttribute('height');
        r.style.aspectRatio = `${width} / ${height}`;
		r.style.width = '100%';
		r.style.height = '100%';
    })

})();




