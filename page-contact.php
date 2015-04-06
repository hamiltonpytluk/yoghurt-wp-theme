<?php
/*
Template Name: Contact
*/

get_header(); ?>

<div class="wrap" id="page">
	<section class="header">
		<h1>Let's Chat</h1>
		<p>We're always happy to have a chinwag with mates new and old. <br />Simply fill out the fields below, and we'll get back to you as soon as we can.</p>
		<hr />
		<p>We may have already answered your question on our <a href="<?php echo get_site_url(); ?>/about#faq">FAQ page</a>. Head over there for info on donation requests, packaging, our ingredients, and so much more.</p>
		<img class="cow" src="<?php echo get_stylesheet_directory_uri(); ?>/img/contact-cow.jpg" />
	</section>

	<section class="form row">
		<div class="col-6">
			<h2 class="card-header">g'day &amp; hooroo!</h2>
		</div>

		<div class="col-6 form-col">
			<h3 class="form-header">to: Noosa! <br />from:</h3>

			<?php echo do_shortcode('[contact-form-7 id="6" title="Contact form 1"]'); ?>
			<a class="yoghurt-button" href="javascript:void(0)" id="contact-submit">submit</a>
		</div>

		<div class="card-mountains">
			<img class="mountains" src="<?php echo get_stylesheet_directory_uri(); ?>/img/about-animation/mountain.svg" />
			<img class="wheel" src="<?php echo get_stylesheet_directory_uri(); ?>/img/about-animation/windmill-wheel.svg" /> 
		</div>
	</section>

	<section class="info row">
		<div class="col-6">
			<h2 class="info-header">We Love Snail Mail</h2>
			<h3 class="info-subheader">noosa yoghurt</h3>
			<p>po box 403 <br />bellvue, co 80512
		</div>
		<div class="col-6">
			<h2 class="info-header">...and email, too</h2>
			<h3 class="info-subheader"><a target="_blank" title="Email Noosa" href="mailto:info@noosayoghurt.com">info@noosayoghurt.com</a></h3>
		</div>
		<div class="col-12">
			<h2 class="info-header">give us a ring</h2>
			<h3 class="info-subheader"><a class="phone-link" href="tel:9704930949">970.493.0949</a></h3>
		</div>
	</section>

	<section class="press">
		<h2>Press Inquiries</h2>
		<p>Interested in featuring Noosa? Need more info for a piece? <br />Email us or check out our media resources below.</p>
		<h3><a target="_blank" title="Email Noosa" href="mailto:press@noosayoghurt.com">press@noosayoghurt.com</a></h3>
		<a class="yoghurt-button" href="<?php echo get_site_url(); ?>/press">media resources</a>
	</section>
</div>

<?php get_footer(); ?>