<?php
  /*
  * Section =>  Berwyn
  */ 

  $options = get_sub_field('options');
  $assets_a = get_sub_field('assets_a');
  $image_a = $assets_a['image_a'];
  $icon_a = $assets_a['icon_a']; 
  $assets_b = get_sub_field('assets_b');
  $image_b = $assets_b['image_b']; 
  $icon_b = $assets_b['icon_b']; ?>

<div class="block berwyn">
  <div class="assets berwyn_a" 
    style="background-image: url('<?php echo $image_a['url']; ?>'); 
    max-width: <?php echo $image_a['width']; ?>px;
    height: <?php echo $image_a['height'] ?>px;">
  </div>
  <div class="text-block berwyn_a">
    <?php echo get_sub_field('text_b');
    if($icon_b && $options && $options[0] === 'Text Block B'): ?>
      <div class="icon berwyn_b" 
        style="background-image: url('<?php echo $icon_b['url']; ?>');
        max-width: <?php echo $icon_b['width']; ?>px;
        height: <?php echo $icon_b['height']; ?>px;">
      </div>
    <?php endif;?>
  </div>
  <div class="text-block berwyn_b">
    <?php echo get_sub_field('text_a');
    if($icon_a && $options && $options[0] === 'Text Block A'): ?>
      <div class="icon berwyn_a" 
        style="background-image: url('<?php echo $icon_a['url']; ?>');
        max-width: <?php echo $icon_a['width']; ?>px;
        height: <?php echo $icon_a['height']; ?>px;">
      </div>
    <?php endif;?>
  </div>
  <div class="assets berwyn_b" 
    style="background-image: url('<?php echo $image_b['url']; ?>'); 
    max-width: <?php echo $image_b['width']; ?>px;
    height: <?php echo $image_b['height'] ?>px;">
  </div>
</div>