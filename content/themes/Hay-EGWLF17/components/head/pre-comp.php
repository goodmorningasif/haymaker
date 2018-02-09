<?php
  /*
  * Section =>  Pre-Comp
  */
$home_id = get_option( 'page_on_front' );
$head = get_field('head', $home_id);
$assets = get_field('assets', $home_id); 
$image = $assets['image']; ?>

<div class="pre-comp" id="on-home">
	<div class="text-block">
		<?php echo get_field('text', $home_id); ?>
	</div>
	<div class="assets" 
	  style="background-image: url('<?php echo $image['url']; ?>'); 
		max-width: <?php echo $image['width']; ?>px;
		height: <?php echo $image['height'] ?>px;">
	</div>
</div>