<?php
  /*
  * Section =>  Argyle 
  */ 

$assets = get_sub_field('assets'); 
$image = $assets['image']; ?>

<div class="block argyle">
	<div class="assets" 
	    style="background-image: url('<?php echo $image['url']; ?>'); 
		max-width: <?php echo $image['width']; ?>px;
		height: <?php echo $image['height'] ?>px;">
		<?php if(get_sub_field('options')): ?>
			<div class="icon">
			</div>
		<?php endif; ?>
	</div>
	<div class="text-block">
		<?php echo get_sub_field('text'); ?>
	</div>
</div>