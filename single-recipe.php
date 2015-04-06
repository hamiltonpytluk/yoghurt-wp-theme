<?php
	get_header();
	$author = get_field('author');
	$thumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail-size', true);
	$category = get_the_category();
	$fruit = strtolower($category[0]->cat_name);
?>

			<section class="picture-mast" style="background-image: url(<?php echo $thumb[0]; ?>)">
				<div class="wrap">
					<h1><?php the_title(); ?></h1>
					<img src="<?php the_field('little_picture', $author->ID); ?>" alt="" />
					<span>from <?php echo $author->post_title; ?></span>
				</div>
				<div class="background"></div>
			</section>

			<section id="recipe-details">
				<div class="wrap">

					<div class="timing">
						<div class="cell">
							<span>prep time</span>
							<strong><?php the_field('prep_time'); ?> min</strong>
						</div>
						<div class="cell">
							<span>total time</span>
							<strong><?php the_field('total_time'); ?> min</strong>
						</div>
						<div class="cell">
							<span>servings</span>
							<strong><?php the_field('servings'); ?></strong>
						</div>
					</div>

					<ul class="social">
						<li>
							<a href="#">
								<img class="mask flip-h" src="<?php echo get_stylesheet_directory_uri(); ?>/img/blob-mask.svg" />
								<img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-facebook.svg" alt="Facebook" />
								<div class="fill <?php echo $fruit; ?>"></div>
							</a>
						</li>
						<li>
							<a href="#">
								<img class="mask flip-v" src="<?php echo get_stylesheet_directory_uri(); ?>/img/blob-mask.svg" />
								<img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-instagram.svg" alt="Instagram" />
								<div class="fill <?php echo $fruit; ?>"></div>
							</a>
						</li>
						<li>
							<a href="#">
								<img class="mask flip-v flip-h" src="<?php echo get_stylesheet_directory_uri(); ?>/img/blob-mask.svg" />
								<img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-pinterest.svg" alt="Pinterest" />
								<div class="fill <?php echo $fruit; ?>"></div>
							</a>
						</li>
						<li>
							<a href="#">
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 90 89.3" enable-background="new 0 0 90 89.3" xml:space="preserve"><path class="<?php echo $fruit; ?>" d="M78.7 31.8v-8.6c0-1.2-0.4-2.1-1.1-2.8L58.3 1.1C57.5 0.5 56.7 0 55.4 0h-40c-2.2 0-3.9 1.8-3.9 4v27.8H4c-2.2 0-4 1.9-4 4.2v37c0 2.1 1.8 3.9 4 3.9h7.4v8.4c0 2.2 1.8 4 3.9 4h59.2c2.3 0 4.1-1.8 4.1-4v-8.4H86c2.3 0 4-1.8 4-3.9V36c0-2.3-1.7-4.2-4-4.2L78.7 31.8zM19.5 80.9V55h51.2v25.9H19.5zM19.5 31.8V8.1h31.8v15.1c0 2.3 1.9 4.1 4.1 4.1h15.3v4.6L19.5 31.8 19.5 31.8zM78.7 47.4c-2.3 0-4-1.9-4-4.3 0-2.2 1.8-4.1 4-4.1 2.3 0 4.1 1.9 4.1 4.1C82.8 45.5 81 47.4 78.7 47.4L78.7 47.4zM25.5 59.6v6h38.8v-6H25.5zM25.5 69.3v5.9h38.8v-5.9H25.5z"/></svg>
							</a>
						</li>
					</ul>

				</div>
			</section><!-- // #recipe-details-->

			<hr class="<?php echo $fruit; ?>" />

			<section id="recipe-description">
				<div class="wrap">
					<div class="lid">
						<a href="#">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/lid-<?php echo $fruit; ?>.png" alt="Noosa Yoghurt" />
							<?php echo $fruit; ?> yoghurt
						</a>
					</div>
					<h1><?php the_title(); ?></h1>
					<p><?php the_field('recipe_description'); ?></p>
				</div>
			</section><!-- // #recipe-description -->

			<section id="recipe-instructions">
				<div class="wrap">
					<ul>
						<li><h2>Ingredients</h2></li>
<?php
							$ingredient = array();
							$i=0;
							foreach(preg_split("/((\r?\n)|(\r\n?))/", get_field('ingredients')) as $entry ){
								preg_match("/(.*?)( ?):( ?)(.*)/", $entry, $matches);
								if($matches[1]=='n/a') $matches[1] = ' ';
echo '						<li>
							<strong class="'.$fruit.' portion">'.$matches[1].'</strong>
							'.$matches[4].'
						</li>
';
								$i++;
							}

?>
					</ul>
					<ol>
						<li><h2>Directions</h2></li>
<?php
	if( have_rows('directions') ):
		$n = 1;
		while ( have_rows('directions') ) : the_row();
			$step = get_sub_field('step');
			$r = rand(1,4);
			if($r==1) $flip = 'flip-v';
			if($r==2) $flip = 'flip-h';
			if($r==3) $flip = 'flip-v flip-h';
			if($r==4) $flip = '';
echo '						<li>
							<img class="mask '.$flip.' '.$fruit.'" src="'.get_stylesheet_directory_uri().'/img/blob-mask.svg" />
							<span>'.$n.'.</span>
							<p>'.$step.'</p>
						</li>
';
			$n++;
		endwhile;
	endif;
?>
					</ol>
				</div>
			</section><!-- // #recipe-instructions -->

<?php
	$images = get_field('photos');
	if($images):
?>
			<section id="recipe-photos">
				<div class="wrap">
					<ul>
<?php
	foreach( $images as $image ):
echo '						<li>
							<a href="#">
								<img src="'.$image['url'].'" alt="'.$image['alt'].'" />
							</a>
						</li>
';
	endforeach;
?>
					</ul>
				</div>
			</section><!-- // #recipe-photos -->
			<?php endif; ?>

			<hr class="<?php echo $fruit; ?>" />

			<section id="recipe-blogger">
				<div class="wrap">
					<img src="<?php the_field('big_picture', $author->ID); ?>" alt="" />
					<span>recipe by:</span>
					<h1><?php echo $author->post_title; ?></h1>
					<p><?php the_field('author_bio', $author->ID); ?></p>
					<a href="<?php the_field('website_url', $author->ID); ?>" class="<?php echo $fruit; ?>">visit blog</a>
				</div>
			</section><!-- // #recipe-blogger -->

			<hr class="<?php echo $fruit; ?>" />

			<section class="recipe-more">
				<h1>Other recipes you may like</h1>
				<div class="wrap">
					<ul>
						<?php getrecipes(3); ?>
					</ul>
				</div>
			</section><!-- // .recipe-more -->

<?php get_footer(); ?>
