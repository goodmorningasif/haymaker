<?php
  /*
  * Section =>  Feingold
  */ 
$count = 0; ?>

<div class="block feingold">

<?php if ( have_rows( "content" ) ) :
	while ( have_rows( "content" ) ) :
		the_row();
		$head = get_sub_field( "headline" );
		$content = get_sub_field( "content" ); ?>

		<div class="section" id="sec-<?php echo $count; ?>">
			<h3 class="head" id="head-<?php echo $count; ?>">
				<span class="link"><?php echo $head; ?></span>
			</h3>
			<div class="content">
				<?php echo $content; ?>
			</div>
	    </div>

	<?php $count++; 
	endwhile;
endif; 
$count = 0; ?>

</div>