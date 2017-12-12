<?php
/**
 *
 * Template Name: Single Menu
 *
 */
get_header(); 
$note = get_field( "warnings" );
$assets = get_field( "assets" );
$icon = $assets["icon"];

$args = array(
	'post_type' => 'menu',
	'posts_per_page' => -1,
	'order' => 'ASC'
);

$menu_query = new WP_Query( $args );
$menus = $menu_query->posts; ?>
<div class="menu-nav">
	<?php foreach( $menus as $menu ) : 
		$link = get_permalink( $menu ); ?>
		<div class="menu-link">
			<span class="link">
		  		<a href="<?php echo $link; ?>">
		  			<?php echo $menu->post_title; ?>
		  		</a>
			<span>
  		</div>
	<?php endforeach; ?>

</div>

<div class="menu">
	<?php if ( have_rows( "menu_repeater" ) ) :
		while ( have_rows( "menu_repeater" ) ) : 
			the_row(); 
			$cat_head = get_sub_field( "category_header" ); ?>

			<h3	class="cat-head">
				<?php echo $cat_head; ?>
			</h3>
            
            <div class="item">
			<?php if ( have_rows( "items") ) :
				while ( have_rows( "items" ) ) :
					the_row();
					$title = get_sub_field( "title" );
					$desc = get_sub_field( "description" );
					$cost = get_sub_field( "cost" );
					$has_note = get_sub_field( "note" ); ?>

					<p class="descriptor <?php echo ( $desc ) ? "desc" : "no-desc"; ?>">
						<span class="title">
							<?php echo $title; ?>
						</span>
						<?php if ( $desc ) : ?>
							<span class="desc">
								<?php echo $desc; ?>
							</span>
					    <?php endif; ?>
						<span class="cost">
							<?php echo $cost; ?>
						</span>
						<?php if ( $has_note ) : ?>
							<span class="note">*</span>
					    <?php endif; ?>
					</p>

				<?php endwhile;
			endif; ?>
		    </div>

		<?php endwhile;
	endif; ?>
</div>
<?php get_footer();