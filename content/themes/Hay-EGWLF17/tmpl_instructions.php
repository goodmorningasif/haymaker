<?php
/**
 *
 * Template Name: Instructions
 *
 */

get_header(); ?>

<div class="instructions">

<?php if ( have_rows( "instructions" ) ) :
	while( have_rows( "instructions" ) ) :
		the_row(); 
		$image = get_sub_field( "image" );
		$text = get_sub_field( "text" ); ?>
		<div class="inst-row <?php echo $image ? "has-img" : "no-img"; ?>">
			<?php if ( $image ) : ?>
				<div class="assets">
					<a href="<?php echo $image['url']; ?>">
						<img src="<?php echo $image['url']; ?>">
					</a>
				</div>
			<?php endif; ?>
			<div class="text">
				<?php echo $text; ?>
			</div>
		</div>

<?php endwhile; 
endif; ?>

</div><!-- end instructions -->


<?php get_footer();