<!DOCTYPE html>

<!--[if lte IE 9]>
<html class="ie" <?php language_attributes(); ?>>
<![endif]-->

<html <?php language_attributes(); ?>>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title><?php wp_title(''); ?></title>

	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<?php wp_head(); ?>

</head>
<body <?php echo body_class(); ?>>

	<header>
		
		<!--
		<svg id="nav-canvas" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1268px" height="86px" xml:space="preserve">
			<path fill="#231F20 " d="M0,38c19.4,15.2,44.9,14.1,67.9,9.1C93.4,41.5,119,32.3,145.2,37c23.7,4.3,43.8,11.5,67.1,16.2 c18,3.7,36.3,6.5,54.7,6c14.3-0.4,28.1-3.8,42.3-5.5c29.1-3.7,43.2,7.8,64.7,5.8c32.3-3,36.2-14.2,56.5-16 c18.6-1.7,37.6,4.7,55.4,8.4c38.1,7.9,77.3,3.3,115.2-3c9.6-1.6,19.3-5,27.3-10.6c6.4-4.5,11.8-10.4,18.7-14.4 c20.2-11.6,50.8-10.2,71.2,0c10,5,19,11.7,28.8,17c21,11.4,44.9,14.9,68.5,16.4c25.1,1.7,50.8,3.8,75.8,0.8 c5.1-0.6,10.2-1.5,15.2-2.6c2.6-0.6,5.2-1.3,7.7-2c19-5.8,38.3-7.2,57.9-7.1c30.6,0.1,60.2,12.4,90.8,13.3 c30.1,0.9,60.1-3.7,89.7-10.3c18.8-4.2,37.4-6.1,56.3-1.7c18.9,4.4,38.8,9.7,58.1,5.9V0H0V38z"/>
		</svg>
		-->

		<div class="wrap">
			<a class="logo-link" href="<?php echo get_site_url(); ?>"><img src="/wp-content/themes/noosa/img/noosa-logo.png" alt="Noosa Logo" title="Noosa - finest yoghurt" /></a>
			<nav>
				<ul>
					<li><a href="#">our yoghurt</a></li>
					<li><a href="<?php echo get_site_url(); ?>/about">who we are</a></li>
					<li><a href="#">recipes</a></li>
					<li><a href="#">find noosa</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main>