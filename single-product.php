<?php
	get_header();
	$fruit = strtolower(get_the_title());
?>

			<section id="product-mast" class="<?php echo $fruit; ?> hero">
				<div class="wrap">
					<h1><?php the_title(); ?><br />yoghurt</h1>
					<img src="<?php the_field('stencil_graphic'); ?>" alt="<?php echo $fruit; ?>" />
					<ul class="navigation">
						<li class="previous"><a href="#"><span>Previous Flavor</span></a>
						<li class="more"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/rings.png" alt="" /><span>More Flavors</span></a>
						<li class="next"><a href="#"><span>Next Flavor</span></a>
					</ul>
				</div>
			</section><!-- // #product-mast -->
			<section id="product-description">
				<div class="wrap">
					<div class="product-image">
						<img src="<?php the_field('product_photo'); ?>" alt="<?php the_title(); ?> Noosa yoghurt" />
					</div>
					<div class="block">
						<h1><?php the_field('product_headline'); ?></h1>
						<p><?php the_field('product_description'); ?></p>
						<form class="locate-product">
							<span>find a tab (or two) near you!</span>
							<input type="text" placeholder="zipcode" name="zipcode" />
							<div class="submit-button <?php echo $fruit; ?>">
								<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow-mask.png" alt="Submit" />
								<input type="submit" name="submit" class="submit" />
							</div>
						</form>
						<ul class="product-sizes">
<?php
if( in_array( '8oz', get_field('available_sizes') ) ) { sizes('oz-8', $fruit, '8oz'); }
if( in_array( '16oz', get_field('available_sizes') ) ) { sizes('oz-16', $fruit, '16oz'); }
if( in_array( '4-pack', get_field('available_sizes') ) ) { sizes('pack-4', $fruit, '4oz<br />4-pack'); }
if( in_array( 'v-pack', get_field('available_sizes') ) ) { sizes('pack-v', $fruit, '4oz<br />variety pack'); }
?>
						</ul>
					</div>
				</div>
			</section><!-- // #product-description -->
			<section id="product-social">
				<div class="wrap">
					<div class="left">
						<article id="instagram">
							<a href="#" class="mask" style="background-image:url(<?php echo get_stylesheet_directory_uri(); ?>/img/sample-instagram.jpg)"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/social-wavvy.png" alt="Noosa Instagram" /></a>
							<div class="icon">
								<a href="#"><span>Follow us on Instagram</span></a>
								<div class="<?php echo $fruit; ?>"></div>
							</div>
						</article>
						<article id="twitter">
							<div class="tweet">
								<p>Just inhaled a raspberry @NoosaYoghurt. Consistently my favorite flavor and yogurt.</p>
								<div class="meta">
									<a href="#">@PB_and_Jaleh</a>
									<a href="#">Dec. 6</a>
								</div>
							</div>
							<div class="icon">
								<a href="#"><span>Follow us on Twitter</span></a>
							</div>
							<img class="<?php echo $fruit; ?>" src="<?php echo get_stylesheet_directory_uri(); ?>/img/social-wavvy.png" alt="Noosa Instagram" />
						</article>
					</div>
					<article class="recipe">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/sample-recipe.jpg" alt="raspberry cocount chia pudding" />
						<div class="blurb <?php echo $fruit; ?>">
							<a href="#">view recipe</a>
							<h1>raspberry coconut chia pudding</h1>
							<p>Every day should start with a heart, healthy, and completely delicious brekkie. Which is why we love Uproot from Oregon's super simple recipe so much</p>
						</div>
					</article>
				</div>
			</section><!-- // #product-social -->
			<section id="product-details">
				<div class="wrap">
					<h1>details, details, details</h1>
					<p><?php the_field('details'); ?></p>
					<ul>
						<?php details($fruit); ?>
					</ul>
				</div>
			</section><!-- // #product-details -->
			<section id="product-nutrition">
				<div class="wrap">
					<h1>Nutrition Facts</h1>
					<ul class="tabs">
						<li class="<?php echo $fruit; ?>"><a href="#">4oz</a></li>
						<li class="<?php echo $fruit; ?> inactive"><a href="#">8oz</a></li>
						<li class="<?php echo $fruit; ?> inactive"><a href="#">16oz</a></li>
					</ul>
					<div class="facts <?php echo $fruit; ?>">
						<div class="left">
							<h2>Amount Per Serving &nbsp; % Daily Values*</h2>
							<div class="facts-wrap">
								<div data-id="4oz" class="facts-block">
									<ul class="items">
										<li><strong>Calories</strong> 280</li>
										<li class="break"><strong>Fat Cal.</strong> 100</li>
										<li><strong>Total Fat</strong> 11g <span>17%</span></li>
										<li><strong>Saturated Fat</strong> 5g <span>25%</span></li>
										<li><strong>Trans Fat</strong> 0g</li>
										<li><strong>Cholesterol</strong> 30mg <span>10%</span></li>
										<li class="break"><strong>Sodium</strong> 110mg <span>5%</span></li>
										<li><em>* Percent daily values are based on a 2000 calorie diet</em></li>
									</ul>
									<ul class="items">
										<li><strong>Total Carb.</strong> 29g <span>10%</span></li>
										<li><strong>Fiber</strong> 1g <span>4%</span></li>
										<li><strong>Sugars</strong> 27g</li>
										<li><strong>Protein</strong> 14g <span>28%</span></li>
										<li class="break"><strong>Trans Fat</strong> 0g</li>
										<li><strong>Vitamin A</strong> <span>8%</span></li>
										<li><strong>Vitamin C</strong> <span>2%</span></li>
										<li><strong>Calcium</strong> <span>38%</span></li>
										<li><strong>Iron</strong> <span>3%</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="right">
							<h2>Ingredients</h2>
							<p>Grade A Pasteurized Milk, Fruit Purée (Raspberries, Sugar, Pectin, Locust Bean Gum, Lemon Juice Concentrate, Fruit and Vegetable Juice), Grade A Cream, Grade A Skim Milk, Cane Sugar, Honey, Grade A Milk Protein, Kosher Gelatin, Organic Agar, Pectin, Live Active Cultures: S. Thermophilus, L. Bulgaricus, L. Acidophilus, Bifidus, and L. Casei.</p>
						</div>
					</div>
				</div>
			</section><!-- // #product-nutrition -->
			<section id="product-more">
				<div class="wrap">
					<h1>hungry for more? you might like</h1>
					<ul class="lid-list">
						<li>
							<a href="#">
								<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/lid-blueberry.png" alt="Blueberry Noosa" />
								blueberry noosa
							</a>
						</li>
						<li>
							<a href="#">
								<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/lid-peach.png" alt="Peach Noosa" />
								peach noosa
							</a>
						</li>
						<li>
							<a href="#">
								<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/lid-coconut.png" alt="Coconut Noosa" />
								coconut noosa
							</a>
						</li>
						<li>
							<a href="#">
								<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/lid-pineapple.png" alt="Pineapple Noosa" />
								pineapple noosa
							</a>
						</li>
					</ul>
					<a href="#">see all flavors</a>
				</div>
			</section><!-- // #product-more -->

<?php get_footer(); ?>
