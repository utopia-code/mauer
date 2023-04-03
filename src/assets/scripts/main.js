/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


import Isotope from 'isotope-layout';

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
		}
	});
	
	iso.arrange({ filter: '.triangle' });
	
	let filtersElem = document.querySelectorAll('.filter-button-group .button');
	
	filtersElem.forEach(function(filterElem) {
		filterElem.addEventListener( 'click', function() {
			var filterValue = this.getAttribute('data-filter');
			iso.arrange({ filter: filterValue });
		});
	});
} )();


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







