<?php
  /*
  * Section =>  Gargoyle
  */ ?>

<div class="block gargoyle">

<?php if ( have_rows( "content" ) ) :
	while ( have_rows( "content" ) ) :
		the_row();
		$head = get_sub_field( "head" );
		$text = get_sub_field( "text" ); 
		$assets = get_sub_field( "assets" ); 
		$image = $assets["image"]; ?>
        
        <div class="section" id="<?php echo str_replace( " ", "", $head ); ?>">
        	<div class="assets"
			    style="background-image: url('<?php echo $image['url']; ?>'); 
				max-width: <?php echo $image['width']; ?>px;
				height: <?php echo $image['height'] ?>px;">
			</div>
			<h3 class="head">
				<?php echo $head; ?>
			</h3>
			<div class="content">
				<?php echo $text; ?>
			</div>
		</div>

	<?php endwhile;
endif; ?>



</div>