jQuery(function($) {
$(document).ready(function() {

	// ======================================================================================================
	// ========================================= START GENERAL ==============================================
	// ======================================================================================================

	var buttonCount = 0;

	function makeButtonSVG(buttonObject) {

		button = $(buttonObject);

		if ( button.find('svg').attr('id') == undefined ) {

			console.log('Making button blob');

			// Create and select SCG
			button.prepend( '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="' + button.outerWidth() + '" height="' + button.outerHeight() + '" viewBox="0 0 410 120" preserveAspectRatio="none" id="button-' + buttonCount + '">' );

			var svg = Snap('#button-' + buttonCount);

			// Remove snap credit to prevent mislabeling
			$('#button-' + buttonCount).find('desc').remove();

			// Move label to separate div, create link if necessary
			var url = button.attr('href');
			if ( url == undefined ) url = 'javascript:void(0)';
			button.addClass('yoghurt-button').css({
				background: 'none',
				color: 'transparent'
			}).append('<a class="blob-label" style="line-height: ' + (button.outerHeight() - 8) + 'px" href="' + url + '">' + button.text() + '</a>');

			// Define blog paths
			var blobPath = 'M 377.5 103.6 c -26 9.4 -62.6 -3 -86.8 -7.5 c -41 -7.5 -81.5 8.9 -121.3 16.2 c -20.1 3.7 -40.9 5.7 -61 1.1 c -15.5 -3.5 -29.1 -12.6 -44.6 -15.9 C 47.6 94.1 29 103.7 14 96 C 5.1 91.4 0.2 81.1 0 71.2 c -0.2 -10 3.6 -19.6 8.5 -28.3 c 12.3 -21.6 24.2 -25.4 47.3 -27.1 c 27.8 -2 53.8 -13.9 81.7 -15.6 c 27.5 -1.7 53.6 7.3 80.8 8.9 c 34 2 60.7 -1.4 93.6 -6.2 c 16.2 -2.3 33.4 -2.3 48.9 3.3 c 28 10.1 54.4 44.2 41.3 73.8 C 396.6 92.6 387.9 99.8 377.5 103.6 z';
			var blobPathHover = 'M377.5, 102.8c -16.7, 6 -34.9 -0.2 -52.2 -1.6c -18.6 -1.4 -36.2, 4.3 -54.2, 7.6c -22.7, 4.2 -45.9, 2.6 -68.8, 2.1 c -29.2 -0.6 -58.7, 7.2 -87.7, 2.3c -17.4 -2.9 -34.4 -7.9 -51.9 -10.7c -15.9 -2.6 -33.9, 0.2 -48.6 -7.4C 5.1, 90.7, 0.2, 80.4, 0, 70.4 c -0.2 -10, 3.6 -19.6, 8.5 -28.3c 24 -42, 74.6 -39.4, 116.8 -41.9c 20.3 -1.2, 36.5, 3.6, 56.3, 7.5c 24.5, 4.8, 49.3 -0.5, 73.9 -0.7 c 18.8 -0.2, 37.7, 2.1, 56.5 -0.4c 15.8 -2.1, 33.3 -6.7, 48.9 -1.1c 28, 10.1, 54.4, 44.2, 41.3, 73.8C 396.6, 91.9, 387.9, 99.1, 377.5, 102.8z';

			// Create blob with path
			var blob = svg.path(blobPath).attr({
				fill: '#00a7e1',
				stroke: '#FFFFFF',
				strokeWidth: 0,
				class: 'blob'
			});

			// Assign hover path animation
			button.hover(function() {
				blob.animate({ d: blobPathHover }, 300, mina.backout);
			}, function() {
				blob.animate({ d: blobPath }, 300, mina.backout);
			});

			buttonCount++;
		}
	}

	// Check if IE and make buttons (don't make buttons on about page because they will be made once selected section is displayed)

	if ( $('html').hasClass('ie') == false && $('.page-template-page-about').length == 0 ) {

		$.each( $('.yoghurt-button'), function(index, object) {
			if ( $(object).css('width') != "0px" ) makeButtonSVG( object );
		});

	}


	// ======================================================================================================
	// ========================================== END GENERAL ===============================================
	// ======================================================================================================

	// ======================================================================================================
	// ======================================== START PRODUCTS PAGE =========================================
	// ======================================================================================================

	$('#products .lid-list li').each(function(e){
		var el = $('a img', this);
		el.attr('src', el.attr('data-src'))
		el.on({
			'mouseenter': function() { el.attr('src', el.attr('data-hover')) },
			'mouseleave': function() { el.attr('src', el.attr('data-src')) },
		});
		if(e==4 || e==6) $(this).addClass('left');
		if(e==5 || e==7) $(this).addClass('right');
	});

	// ======================================================================================================
	// ======================================== END PRODUCTS PAGE ===========================================
	// ======================================================================================================


});
});