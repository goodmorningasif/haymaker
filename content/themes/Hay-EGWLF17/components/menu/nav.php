<?php
  /*
  * Section =>  Nav
  */ 

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
			<span class="link" id="pg-<?php echo strtolower($menu->post_title); ?>">
		  		<a href="<?php echo $link; ?>">
		  			<?php echo $menu->post_title; ?>
		  		</a>
			<span>
  		</div>
	<?php endforeach; ?>

</div>