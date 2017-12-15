<?php
  /*
  * Section =>  Items
  */ 


if ( have_rows( "menu_repeater" ) ) :

	$count = 0;
	$length =  count( get_field_object( "menu_repeater" ) );

	while ( have_rows( "menu_repeater" ) ) : 
		the_row(); 
		$cat_head = get_sub_field( "category_header" ); ?>

		<h3	class="cat-head <?php echo $count; ?>">
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

	<?php $count++;endwhile; 
endif; ?>

<div class="note">
	<span class="asterix">*</span><?php echo $note; ?>
</div>