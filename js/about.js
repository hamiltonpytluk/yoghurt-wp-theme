jQuery(function($) {
$(document).ready(function() {

	// Redefine button-making script

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

	// ======================================================================================================
	// ======================================= START ABOUT PAGE =============================================
	// ======================================================================================================

	if ( $('.about-section').length > 0 ) {

		// Initialize skrollr
		var skrollrInstance = skrollr.init({
			forceHeight: false
		});

		// Select cloud SVGs
		var cloud1SVG = Snap('#cloud1');
		var cloud2SVG = Snap('#cloud2');
		var cloud3SVG = Snap('#cloud3');

		// Define initial blob paths
		var cloud1Path1 = 'M37.6,5C48,4.6,57.9-1.7,67.9,0.5c6.4,1.4,11.1,6,17.6,7.1c7,1.2,17-2.5,20.5,2.8c6.8,10.2-3.1,16-9.9,17.3 c-7.1,1.3-14.4-1.5-21.6-0.9c-6.3,0.5-11.8,3.5-17.6,5.7c-9.1,3.3-18.9,3.2-28.5,2.5c-7-0.5-16.7-1.7-19.9-8.6 C7.8,25,7,23.9,5.9,22.9c-1.1-1.1-2.5-1.4-3.8-2.3c-0.9-0.6-1.7-1.5-2-2.5C-1,14,5.2,9.6,8.3,7.7c4.3-2.5,9.3-3.8,14.3-3.8 C27.6,3.9,32.6,5.2,37.6,5z';
		var cloud2Path1 = 'M70.7,30.3c-10.4,0.4-20.2,6.7-30.3,4.5c-6.4-1.4-11.1-6-17.6-7.1c-7-1.2-17,2.5-20.5-2.8 c-6.8-10.2,3.1-16,9.9-17.3c7.1-1.3,14.4,1.5,21.6,0.9C40.2,8.1,45.7,5,51.5,2.9C60.6-0.4,70.4-0.3,80,0.4C86.9,0.9,96.7,2,99.9,9 c0.6,1.3,1.4,2.4,2.5,3.5c1.1,1.1,2.5,1.4,3.8,2.3c0.9,0.6,1.7,1.5,2,2.5c1.2,4.1-5,8.6-8.1,10.4c-4.3,2.5-9.3,3.8-14.3,3.8 C80.7,31.4,75.7,30.1,70.7,30.3z';
		var cloud3Path1 = 'M107.5,2.3c7.2-0.5,14.4,0.6,21.1,3c4.1,1.5,8.3,3.8,9.9,7.9c2.1,5.2-0.5,12.4-5.7,14.3 c-9.6,3.5-26.2,2.8-31.2,2c-2.8-0.5-5.7-1.1-8.4-0.4c-3.9,1-6.7,4.3-10,6.6c-8.6,6.1-20.3,4.9-30.4,1.8s-19.8-7.8-30.3-8.2 c-5.1-0.2-10.4,0.6-15.2-1s-8.6-6.9-6.9-11.7c2.5-7.3,15.1-4.4,18.5-4.4C32.7,12.2,44.3,0.5,58,0c8.8-0.3,17.1,3.9,25.8,4.6 C91.8,5.2,99.6,2.8,107.5,2.3z';

		// Create blobs
		var cloud1 = cloud1SVG.path(cloud1Path1).attr({
			fill: '#FFFFFF',
			stroke: '#FFFFFF',
			strokeWidth: 0,
			class: 'cloud-path',
			id: 'cloud-path-1'
		});

		var cloud2 = cloud2SVG.path(cloud2Path1).attr({
			fill: '#FFFFFF',
			stroke: '#FFFFFF',
			strokeWidth: 0,
			class: 'cloud-path',
			id: 'cloud-path-2'
		});

		var cloud3 = cloud3SVG.path(cloud3Path1).attr({
			fill: '#FFFFFF',
			stroke: '#FFFFFF',
			strokeWidth: 0,
			class: 'cloud-path',
			id: 'cloud-path-3'
		});

		// Define destination paths for ambient animation
		
		var cloud1Path2 = 'M96.9,26.8c-4.6,0.2-7.8,2.9-11.6,4.8c-11.2,5.6-22.3,5.5-28.2,4.6c-12.1-2-13.8-8.7-26.2-6.8 c-9.2,1.4-18.6,5.7-27.7,0.2c-4.1-2.5-3.9-7-0.9-10.3c1.7-1.9,3.9-3.3,5.1-5.5c1.6-2.9,2.5-5.6,5.2-7.9c9.3-8,21.9-6.5,33.5-3.6 c7.6,1.9,15.3,1.8,29.5-1.9c6.1-1.6,14.1,1.6,17.7,4.9c3.6,3.3,8.9,1.9,12.4,4.9c2.2,1.9,3.3,8.1,2.3,10.8c-1.7,4.4-5.8,6-9.7,5.7 C97.7,26.9,97.3,26.9,96.9,26.8z';
		var cloud2Path2 = 'M95.7,26.9c-4.5,0.2-7.7,2.9-11.5,4.7c-11.1,5.6-22,5.5-27.8,4.6c-11.9-2-13.6-8.7-25.9-6.8 C21.4,30.7,12,35,3.1,29.6c-4.1-2.5-3.8-7-0.9-10.3c1.7-1.9,3.9-3.3,5.1-5.5c1.6-2.9,2.5-5.6,5.1-7.9c9.2-8,21.7-6.5,33.1-3.5 C53,4.3,60.6,4.1,74.6,0.5c6-1.6,13.9,1.6,17.5,4.9c3.6,3.3,8.8,1.9,12.3,4.9c2.2,1.9,3.3,8.1,2.3,10.8c-1.6,4.4-5.7,6-9.6,5.7 C96.6,26.9,96.2,26.9,95.7,26.9z';
		var cloud3Path2 = 'M11.3,9.8C15.8,9.6,19,7,22.8,5.1c11.1-5.6,22-5.5,27.8-4.6c11.9,2,13.6,8.7,25.9,6.8 c9.1-1.4,18.4-5.7,27.4-0.2c4.1,2.5,3.8,7,0.9,10.3c-1.7,1.9-3.9,3.3-5.1,5.5c-1.6,2.9-2.5,5.6-5.1,7.9c-9.2,8-21.7,6.5-33.1,3.5 c-7.5-1.9-15.1-1.8-29.1,1.8c-6,1.6-13.9-1.6-17.5-4.9c-3.6-3.3-8.8-1.9-12.3-4.9c-2.2-1.9-3.3-8.1-2.3-10.8c1.6-4.4,5.7-6,9.6-5.7 C10.4,9.8,10.8,9.8,11.3,9.8z';


		function resetClouds() {
			cloud1.animate({ d: cloud1Path1 }, 500, mina.easeinout);
			cloud2.animate({ d: cloud2Path1 }, 500, mina.easeinout);
			cloud3.animate({ d: cloud3Path1 }, 500, mina.easeinout);
		}

		function cloudHovers() {

			// Assign hover animations
			$('#cloud1').unbind('mouseenter mouseleave');
			cloud1.hover(function() {
				cloud1.animate({ d: cloud3Path1 }, 500, mina.backout);
			}, function() {
				cloud1.animate({ d: cloud1Path1 }, 500, mina.backout);
			});

			$('#cloud2').unbind('mouseenter mouseleave');
			cloud2.hover(function() {
				cloud2.animate({ d: cloud1Path2 }, 500, mina.backout);
			}, function() {
				cloud2.animate({ d: cloud2Path1 }, 500, mina.backout);
			});

			$('#cloud3').unbind('mouseenter mouseleave');
			cloud3.hover(function() {
				cloud3.animate({ d: cloud3Path2 }, 500, mina.backout);
			}, function() {
				cloud3.animate({ d: cloud3Path1 }, 500, mina.backout);
			});
		}

		// Define fruit timeouts
		var fruitGroup1 = $('.element.ingredient.group-1'),
			fruitGroup2 = $('.element.ingredient.group-2'),
			fruitGroup1Timeout,
			fruitGroup2Timeout;

		function toggleAboutSection( section ) {

			// Only toggle if not already selected
			if ( $('.about-section[name="' + section + '"]').hasClass('selected') == false && animating == false ) {

				animating = true;
				console.log( 'Toggling ' + section + ' section');

				// Scroll to top (if toggle is not initial page load)
				if ( $('.about-section.selected').attr('name') != undefined ) $('html, body').animate({ scrollTop: '0' }, 500);

				// Animate out previously selected button and hero text
				$('.selected').not('.about-section').removeClass('selected');
				$('.about-nav-link[name="' + section + '"]').addClass('selected');

				// Reset clouds
				resetClouds();

				// Animate hero bg color
				$('section.hero').attr('id', section);

				// Revert to default animation state (default state not visible unless delay is set)
				$('#about-animation').attr('class', '');

				// Remove selected hero styles
				$('.hero-wrap.selected').removeClass('selected');

				// Create missing buttons
				$.each( $('.about-nav-link'), function(index, object) {
					if ( $(object).css('width') != "0px" ) makeButtonSVG( object );
				});

				// Reset cloud hovers
				cloudHovers();

				// Reset kangaroo
				if ( section != 'story' ) {
					$('.element.kangaroo').removeClass('grounded').attr('style', 'scale(0) translate(250px, 100px)');
				}

				// Reset fruit animation
				$('.element.ingredient').removeClass('animating');

				// Animate out previously selected content (if it exists, otherwise show selected section immediately)
				var fadeInterval = 500;
				if ( $('.about-section.selected').attr('name') == undefined ) fadeInterval = 0;

				$('.about-section.selected').animate({
					opacity: '0',
					top: '20px'
				}, fadeInterval);

				setTimeout(function() {

					// Add selected hero styles
					$('.hero-wrap[name="' + section + '"]').addClass('selected');
					makeButtonSVG( $('.about-nav-link.selected') );

					// Remove selected section styles
					$('.about-section.selected').removeClass('selected');

					// Add selected section styles
					$('.about-section[name="' + section + '"]').css('opacity', '0').addClass('selected');

					// Refresh skrollr
					skrollrInstance.refresh();

					// Rewrite URL
					window.location.hash = section;

					// Configure buttons if necessary
					$.each( $('.about-section.selected .yoghurt-button, .about-nav-link'), function(index, object) {
						if ( $(object).css('width') != "0px" ) makeButtonSVG( object );
					});

					// Animate in new section
					$('.about-section[name="' + section + '"]').animate({
						opacity: '1',
						top: '0px'
					}, fadeInterval, 'easeOutCubic');

				}, fadeInterval );


				// ======================= START HERO ANIMATION TRIGGERS ===========================

				// Only delay animation if page was scrolled past hero, or if going between story and aussie
				var interval = 0;
				if ( $('.about-nav').hasClass('fixed') 
					|| $('.about-section.selected').attr('name') == 'story' && section == 'aussie'
					|| $('.about-section.selected').attr('name') == 'aussie' && section == 'story' ) interval = 600;

				setTimeout(function() {

					// Trigger section hero animation
					$('#about-animation').attr('class', section);

					// Section specific JS

					if ( section == 'overview' ) {

						// Toggle g'day hover on bubble hover
						$('.element.speech-bubble, .element.cow').hover( function() { $('.gday').addClass('hover'); }, function() { $('.gday').removeClass('hover'); });

						// Ready for next toggle
						animating = false;

					} else if ( section == 'story' ) {

						var cloud1PathAustralia = 'M8.8,140.2l9,7.3h9l9.3-5.6l14.9-1.7l10.7-4.4l11.7-5.4h7.1l13.1-4.9h11.2l11.4,5.1l5.4,5.8l4.9,9l13.6-11 l1.5,3.4l-7.1,9.5h4.4l2.4-4.4l2.4,4.4v4.9h4.9l2.9,8l5.8,8.5l10,2.4l5.8,1.2l7.5-6.3l7.5,8l5.1-2.4l3.7-4.9l11.9-1l4.4-16.1 l4.4-9.5l7.5-8.8l1.9-10.2l4.1-12.7l-4.9-10v-9.7l-3.9-6.3l-7.5-6.1l-0.7-7.1h-4.9L204,56.5l-14.1-6.8L186,38l-2.9-4.4l0.5-8.5 l-8-3.7L166.3,0l-3.9,8.3l-1,11.4l0.2,10l-6.3,11.9l-8.3-4.1l-12.9-6.8l-8.3-5.6l9.3-14.1l-3.4-2.2h-7.5l-14.1-6.1l0.5,4.4l-8,1 l-6.3,7.3L91.8,20l2.7,5.1l-9-1.5l-6.8-5.4l-9,2.7L66.2,27l-7.1,4.9l-1,8.3L55,32.6L50.2,38l0.7,5.6l-4.6,6.6l-11.9,4.6l-14.6,3.2 L13,62c-3.8,2.3-7.1,5.3-9.9,8.8l-1.2,1.5l-1.2,11l3.7,7.3L0,92v4.4l6.1,9l2.7,9.7l4.9,13.6l-0.2,5.4l-1.5,3.9L8.8,140.2z';

						cloud1.animate({ d: cloud1PathAustralia }, 500, mina.easeinout);
						cloud1.hover( function() { cloud1.animate({ d: cloud1PathAustralia }, 500, mina.backout); }, function() { cloud1.animate({ d: cloud1PathAustralia }, 500, mina.backout); } );

						// Jump the kangaroo
						setTimeout(function() {

							$('.element.kangaroo').addClass('jumping'); // show jumping frame
						
							var timer = 0,
								complete = 370;

							var jumpInterval = setInterval(function() {
								timer = timer + 10;
								var x = ( timer / complete ) * 300,
									y = (( timer / complete ) * 95) - (((-(((timer/complete-0.5)*(timer/complete-0.5))*4))+1) * 75);
								$('.element.kangaroo').attr('style', '-moz-transform: translate( ' + x + 'px, ' + y + 'px);-webkit-transform: translate( ' + x + 'px, ' + y + 'px);transform: translate( ' + x + 'px, ' + y + 'px);-ms-transform: translate( ' + x + 'px, ' + y + 'px);');
							}, 10);

							setTimeout(function() {
								clearInterval( jumpInterval );
								$('.element.kangaroo').addClass('grounded').removeClass('jumping').attr('style', ''); // show standing frame, reset style attribute
							}, complete + 30);

						}, 1400);

						// Ready for next toggle
						setTimeout( function() { animating = false; }, 1750 );

					} else if ( section == 'aussie' ) {

						// Ready for next toggle
						setTimeout( function() { animating = false; }, 1700 ); // spoon CSS animation length

					} else if ( section == 'ingredients' ) {

						// Make sure no hide-fruit timemouts remain from last appearance
						clearTimeout( fruitGroup1Timeout ); 
						clearTimeout( fruitGroup2Timeout );

						// Inital fruit animations
						setTimeout( function() { 
							fruitGroup1.addClass('animating');
							fruitGroup1Timeout = setTimeout( function() { fruitGroup1.removeClass('animating'); }, 4000 );
						 }, 1000);

						setTimeout( function() {
							fruitGroup2.addClass('animating');
							fruitGroup2Timeout = setTimeout( function() { fruitGroup2.removeClass('animating'); }, 4000 );
						}, 1500);

						// Initial bee animations
						setTimeout( animateBees, 800 );

						// Animate bees on hover
						cloud1.hover( function() {
							if ( animatingBees == false ) animateBees();
							cloud1.animate({ d: cloud1Path1 }, 500, mina.backout)
						}, function() {
							cloud1.animate({ d: cloud1Path1 }, 500, mina.backout);
						});

						// Animate fruit on hover
						cloud2.hover( function() {
							if ( fruitGroup2.hasClass('animating') == false ) {
								fruitGroup2.addClass('animating');
								fruitGroup2Timeout = setTimeout( function() { fruitGroup2.removeClass('animating'); }, 4000 );
							}
							cloud2.animate({ d: cloud2Path1 }, 500, mina.backout)
						}, function() {
							cloud2.animate({ d: cloud2Path1 }, 500, mina.backout);
						});

						cloud3.hover( function() {
							if ( fruitGroup1.hasClass('animating') == false ) {
								fruitGroup1.addClass('animating');
								fruitGroup1Timeout = setTimeout( function() { fruitGroup1.removeClass('animating'); }, 4000 );
							}
							cloud3.animate({ d: cloud3Path1 }, 500, mina.backout)
						}, function() {
							cloud3.animate({ d: cloud3Path1 }, 500, mina.backout);
						});

						// Ready for next toggle
						animating = false;

						/*

						// Scale clouds on hover
						var bigCloudStyle = '-webkit-transform: translate3d(5px, 5px, 0) scale(1.1);' + 
											'-moz-transform: translate3d(5px, 5px, 0) scale(1.1);' + 
											'-ms-transform: translate3d(5px, 5px, 0) scale(1.1);'+ 
											'transform: translate3d(5px, 5px, 0) scale(1.1);',
							smallCloudStyle = '-webkit-transform: translate3d(10px, 10px, 0) scale(1);' + 
											'-moz-transform: translate3d(10px, 10px, 0) scale(1);' + 
											'-ms-transform: translate3d(10px, 10px, 0) scale(1);' + 
											'transform: translate3d(10px, 10px, 0) scale(1);';*/

					} else if ( section == 'faq' ) {

						var cloud1PathBubble = 'M60.5,35.5c-1.2-4.2,1.7-7.3,1.8-11.4C62.7,9.7,54.1,4.9,49.2,2.5c-8.1-4-18-3-25.6,1.4 c-7.5,4.4-10,3.5-15.2,5.6c-3.3,1.3-6.3,4.3-7.4,7.7c-2.4,7.3-0.8,16.8,4.6,22.5c2.8,3,6.5,5,10.6,5.8c3.4,0.7,6.8-0.1,10.2-0.2 c3-0.1,5.9,1.1,8.8,1.9c9.1,2.5,15.5-0.8,17.1-3.3c2.6-3.9,6.3-0.1,8.6,0.2c2.4,0.4,5.2,0.1,5.2-1.1c0.1-1.3-2.1-2.6-3-3.3 C61.8,38.6,60.7,36.4,60.5,35.5z';
						var cloud2PathBubble = 'M5.8,35.5c1.2-4.2-1.7-7.3-1.8-11.4C3.5,9.7,12.1,4.9,17,2.5c8.1-4,18-3,25.6,1.4c7.5,4.4,10,3.5,15.2,5.6 c3.3,1.3,6.3,4.3,7.4,7.7c2.4,7.3,0.8,16.8-4.6,22.5c-2.8,3-6.5,5-10.6,5.8c-3.4,0.7-6.8-0.1-10.2-0.2c-3-0.1-5.9,1.1-8.8,1.9 c-9.1,2.5-15.5-0.8-17.1-3.3c-2.6-3.9-6.3-0.1-8.6,0.2C2.8,44.5,0.1,44.2,0,43c-0.1-1.3,2.1-2.6,3-3.3C4.5,38.6,5.5,36.4,5.8,35.5z';
						var cloud3PathBubble = 'M5.8,35.5c1.2-4.2-1.7-7.3-1.8-11.4C3.5,9.7,12.1,4.9,17,2.5c8.1-4,18-3,25.6,1.4c7.5,4.4,10,3.5,15.2,5.6 c3.3,1.3,6.3,4.3,7.4,7.7c2.4,7.3,0.8,16.8-4.6,22.5c-2.8,3-6.5,5-10.6,5.8c-3.4,0.7-6.8-0.1-10.2-0.2c-3-0.1-5.9,1.1-8.8,1.9 c-9.1,2.5-15.5-0.8-17.1-3.3c-2.6-3.9-6.3-0.1-8.6,0.2C2.8,44.5,0.1,44.2,0,43c-0.1-1.3,2.1-2.6,3-3.3C4.5,38.6,5.5,36.4,5.8,35.5z';

						// Shape clouds into bubbles, override hover functions
						cloud1.animate({ d: cloud1PathBubble }, 750, mina.backout);
						cloud1.hover( function() { cloud1.animate({ d: cloud1PathBubble }, 500, mina.backout); }, function() { cloud1.animate({ d: cloud1PathBubble }, 500, mina.backout); } );
						
						cloud2.animate({ d: cloud2PathBubble }, 1250, mina.backout);
						cloud2.hover( function() { cloud2.animate({ d: cloud2PathBubble }, 500, mina.backout); }, function() { cloud2.animate({ d: cloud2PathBubble }, 500, mina.backout); } );
						
						cloud3.animate({ d: cloud3PathBubble }, 1500, mina.backout);
						cloud3.hover( function() { cloud3.animate({ d: cloud3PathBubble }, 500, mina.backout); }, function() { cloud3.animate({ d: cloud3PathBubble }, 500, mina.backout); } );

						// Animate marks when clouds are hovered
						$('#cloud-path-1').hover( function() { $('.question-1').addClass('hover'); }, function() { $('.question-1').removeClass('hover'); });
						$('#cloud-path-2').hover( function() { $('.question-2').addClass('hover'); }, function() { $('.question-2').removeClass('hover'); });
						$('#cloud-path-3').hover( function() { $('.question-3').addClass('hover'); }, function() { $('.question-3').removeClass('hover'); });
						$('.element.speech-bubble, .element.cow').hover( function() { $('.answer').addClass('hover'); }, function() { $('.answer').removeClass('hover'); });

						// Ready for next toggle
						setTimeout( function() { animating = false; }, 1500 );

					}

				}, interval); // delay on hero animations

			}

		}

		var animating = false;

		// Assign section switcher to section buttons
		$('.about-link').click(function() { toggleAboutSection( $(this).attr('name') ); });

		// Perform section switcher on page ready if hash is used, otherwise animate in overview
		var urlAnchor = window.location.hash;
		urlAnchor = urlAnchor.replace('#', '');

		if ( urlAnchor != "" ) {
			toggleAboutSection( urlAnchor );
		} else {
			toggleAboutSection( 'overview' );
		}

		// Section switch on back/forward button press
		$(window).on('hashchange', function() {
			var urlAnchor = window.location.hash;
			urlAnchor = urlAnchor.replace('#', '');

			if ( $('.about-section[name="' + urlAnchor + '"]').hasClass('selected') == false ) {
				if ( urlAnchor !== "" ) {
					toggleAboutSection(urlAnchor);
				} else {
					toggleAboutSection('overview');
				}
			}
		});


		// ============ AUSSIE ============== 

		$('.about-section[name="aussie"] .slide#yoghurt .yoghurt-wrap').height( $(window).height() );
		$(window).resize(function() { $('.about-section[name="aussie"] .slide#yoghurt .yoghurt-wrap').height( $(window).height() ); });


		// ============ INGREDIENTS ============== 

		var animatingBees = false;

		// Save initial circle positions
		$('.bee-circle').each(function() { $(this).attr('data-cx', $(this).attr('cx')).attr('data-cy', $(this).attr('cy')); });

		function animateBees() {

			animatingBees = true;

			$('.bee-path').each(function() { 

				var canvas = '.bee-path#' + $(this).attr('id');
				var svgSnap = Snap( canvas );
				var circleInterval = 40
				if ( canvas == '.bee-path#bee-path-2' ) circleInterval = 50 // longer animation for right bee

				// Reset in case of double animation
				$(canvas + ' .bee-circle').attr('cx', $(this).attr('data-cx') ).attr('cy', $(this).attr('data-cy') );
				svgSnap.select( canvas + ' .bee-circle' ).animate({ r: 0 }, 100, mina.easeout);
				$(canvas).find('.bee').remove();

				// Animate circles

				$(this).find('.bee-circle').each(function() {

					var index = parseInt( $(this).attr('name') );
					var circle = canvas + ' .bee-circle[name="' + index + '"]';

					// Show circle
					setTimeout(function() { 

						// Reset origin
						$(circle).attr('cx', $(circle).attr('data-cx') );
						$(circle).attr('cy', $(circle).attr('data-cy') );

						svgSnap.select( circle).animate({ 
							r: 2
						}, 200, mina.easeout);
					}, circleInterval * index);

					// Hide circle
					setTimeout(function() { 

						svgSnap.select('.bee-circle[name="' + index + '"]').animate({
							r: 0,
							cx: parseInt( $( circle ).attr('cx') ) * ( ( Math.random() * 0.25 ) + 0.85 ),
							cy: parseInt( $( circle ).attr('cy') ) * ( ( Math.random() * 0.25 ) + 0.85 )
						}, 200, mina.easeout);

					}, (circleInterval * index) + 800);
				});

				// Animate bees

				queue().await(ready);

				function ready(error, xml) {

					var svg = d3.select( canvas );

					var path = svg.select('path.beepath'),
						startPoint = pathStartPoint(path);

					var beeWidth = 35,
						beeHeight = 50,
						bee = svg.append('image')
						.attr('xlink:href', 'http://noosa-walt.madwell.lan/wp-content/themes/noosa/img/about-animation/bee.svg')
						.attr('transform', 'translate(' + startPoint[0] + ',' + startPoint[1] + ')')
						.attr('width', beeWidth)
						.attr('height', beeHeight)
						.attr('class', 'bee');

					transition();

					// Get path start point for placing bee by splitting "d" attribute string
					function pathStartPoint(path) {
						var d = path.attr("d"),
						dsplitted = d.split(" ");
						return dsplitted[1].split(",");
					};

					// Define animation duration, easing, callback
					function transition() {
						bee.transition()
						.duration( circleInterval * $(canvas).find('.bee-circle').length )
						.ease('linear')
						.attrTween("transform", translateAlong(path.node()))
						.each("end", function() { 
							
							// Function on animation end
							bee.attr('style', 'translate(0,0); -webkit-translate(0,0); -moz-translate(0,0); -ms-translate(0,0);');
							bee.remove();
						});
					};

					// Define step function
					function translateAlong(path) {
						var l = path.getTotalLength();
						var t0 = 0;
						return function(i) {
							return function(t) {
								if ( canvas == '.bee-path#bee-path-1' ) t = 1 - t; 				 // reverse direction for left bee
								var p0 = path.getPointAtLength(t * l); 							 // previous point
								var p = path.getPointAtLength(t0 * l); 							 // current point
								var angle = Math.atan2(p.y - p0.y, p.x - p0.x) * 180 / Math.PI;  // angle for tangent
								t0 = t;															 // store current time for next frame
								var centerX = p.x - ( beeWidth / 2 ),							 // get center x of bee
									centerY = p.y - ( beeHeight / 2 );							 // get center y of bee

								// Fade in/out on animation beginning/end
								if ( t > 0.85 ) 
									$(canvas).find('.bee').css('opacity', ((1 - t) * 7.5) );
								else if ( t <= 0.85 && t >= 0.1 )
									$(canvas).find('.bee').css('opacity', '1' );
								else if ( t < 0.1 )
									$(canvas).find('.bee').css('opacity', t * 10);

								// Return position and rotation for frame, with magin numbers to fit the circle pattern :/
								return "translate(" + ((centerX / 2.9) + 17 ) + "," + ((centerY / 2.9) + 17 ) + ") rotate(" + angle + " " + ( beeWidth / 2 ) + " " + ( beeHeight / 2 ) + ") scale(1)";
							}
						}
					}
				}

				// Prepare for next animation
				setTimeout(function() { animatingBees = false; }, (circleInterval * $(canvas).find('.bee-circle').length ) + 1200);
			});
		};


		// ============ FAQ ============== 

		$('#faq-content .question').click(function() { 
			$(this).next('.answer').slideToggle({ duration: 400, easing: 'easeOutBack' });
			$(this).find('.arrow-blob').toggleClass('toggled');
		});

		// Back to top button
		$('.back-to-top').click(function() { $('html, body').animate({ scrollTop: 0 }, 800); });


		//  ======================= Actions on scroll =====================

		$(document).scroll(function() {

			// Aussie yoghurt
			if ( $('.about-section[name="aussie"]').hasClass('selected') ) {

				var yoghurtSlide = $('.slide#yoghurt')
				var slideHeight = $('.slide#yoghurt').height();

				// Fix tub
				if ( $(document).scrollTop() >= yoghurtSlide.offset().top && $(document).scrollTop() < ( $('.slide#recipe').offset().top - $(window).height() ) ) {
					$('.yoghurt-wrap').addClass('fixed').removeClass('bottom');
				} else {
					$('.yoghurt-wrap').removeClass('fixed');

					if ( $(document).scrollTop() >= ( $('.slide#recipe').offset().top - $(window).height() ) ) {
						$('.yoghurt-wrap').addClass('bottom');
					}
				}

				// Show details
				if ( $(document).scrollTop() >= yoghurtSlide.offset().top && $(document).scrollTop() < ( yoghurtSlide.offset().top + ( slideHeight / 5 ) ) ) {
					yoghurtSlide.attr('name', '1');
				} else if ( $(document).scrollTop() >= ( yoghurtSlide.offset().top + ( slideHeight / 5 ) ) && $(document).scrollTop() < ( yoghurtSlide.offset().top + ( ( slideHeight / 5 ) * 2 ) ) ) {
					yoghurtSlide.attr('name', '2');
				} else if ( $(document).scrollTop() >= ( yoghurtSlide.offset().top + ( ( slideHeight / 5 ) * 2 ) ) && $(document).scrollTop() < ( yoghurtSlide.offset().top + ( ( slideHeight / 5 ) * 3 ) ) ) {
					yoghurtSlide.attr('name', '3');
				} else if ( $(document).scrollTop() >= ( yoghurtSlide.offset().top + ( ( slideHeight / 5 ) * 3 ) ) ) {
					yoghurtSlide.attr('name', '4');
				}
			}

			// Ingredients
			if ( $('.about-section[name="ingredients"]').hasClass('selected') ) {

				// Show to-top
				if ( $(document).scrollTop() > ( $('#ingredients-slide').offset().top - ( $(window).height() - 200 ) ) ) {
					$('.back-to-top').addClass('visible');
				} else {
					$('.back-to-top').removeClass('visible');
				}
			}

			// Fix subnav
			if ( $(document).scrollTop() >= ( $('section.hero').height() + ( $('.about-nav').height() + parseInt( $('.about-nav').css('padding-top') ) + parseInt( $('.about-nav').css('padding-bottom') ) ) ) ) {
				$('section.hero').css('margin-bottom', ( $('.about-nav').height() + parseInt( $('.about-nav').css('padding-top') ) ) );
				$('.about-nav').addClass('fixed');
			} else {
				$('section.hero').css('margin-bottom', 0 );
				$('.about-nav').removeClass('fixed');
			}

		});
	}
});
});