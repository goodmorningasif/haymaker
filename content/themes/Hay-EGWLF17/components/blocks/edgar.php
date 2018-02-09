<?php
  /*
  * Section =>  Edgar
  */ 

$assets = get_sub_field('assets'); 
$image = $assets['image']; 
$options = get_sub_field('options'); ?>

<div class="block edgar">
	<div class="assets" 
		style="background-image: url('<?php echo $image['url']; ?>'); 
	  	max-width: <?php echo $image['width']; ?>px;
	  	height: <?php echo $image['height'] ?>px;">
	</div>
	<div class="text-block">
		<?php if ($options) : 
			$name = get_sub_field('name'); 
			$title = get_sub_field('title'); ?>
			<h2 class="name"><?php echo $name; ?></h2>
			<h3 class="title"><?php echo $title; ?></h3>
		<?php endif; ?>
		<?php echo get_sub_field('text'); ?>
	</div>
</div>