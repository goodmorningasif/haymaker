<?php
  /*
  * Section =>  Pre-Comp
  */

	$assets = get_field('assets'); 
  $image = $assets['image']; ?>

<div class="pre-comp" id="on-home">
	<div class="text-block">
		<?php echo get_field('text'); ?>
	</div>
	<div class="assets" 
	  style="background-image: url('<?php echo $image['url']; ?>'); 
		max-width: <?php echo $image['width']; ?>px;
		height: <?php echo $image['height'] ?>px;">
	</div>
</div>