<?php
  /*
  * Section =>  Items
  */ 

$assets = get_field( "assets" );
$icon = $assets[ "icon" ];

if ( have_rows( "menu_repeater" ) ) :

	$count = 0;
	$menu_obj = get_field_object( "menu_repeater" );
	$length =  count( $menu_obj["value"] ) - 1;

	while ( have_rows( "menu_repeater" ) ) : 
		the_row(); 
		$cat_head = get_sub_field( "category_header" ); ?>
		
		<div class="cat-head">
			<h3	class="cat-head">
				<?php echo $cat_head; ?>
			</h3>
			<?php if ($count === $length && $icon ) : ?>
				<div class="icon" 
					style="background-image: url('<?php echo $icon["url"]; ?>');
					max-width: <?php echo $icon["width"]; ?>px;
					height: <?php echo $icon["height"]; ?>px; ">
				</div>
			<?php endif; ?>
	    </div>

        
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

<?php if ( $note ) : ?>
	<div class="note">
		<span class="asterix">*</span><?php echo $note; ?>
	</div>
<?php endif; ?>