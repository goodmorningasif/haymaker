<?php
  /*
  * Section =>  Cynthia
  */ 

  $options = get_sub_field('options');
  $assets = get_sub_field('assets'); 
  $image = $assets['image']; 
  $icon = $assets['icon']; ?>

  <div class="block cynthia">
    <div class="assets" 
      style="background-image: url('<?php echo $image['url']; ?>');
          max-width: <?php echo $image['width']; ?>px;
          height: <?php echo $image['height']; ?>px;">
    </div>
    <?php if($icon && $options && $options[0] === 'Add Icon'): ?>
      <div class="icon"
        style="background-image: url('<?php echo $icon['url']; ?>');
          max-width: <?php echo $icon['width']; ?>px;
          height: <?php echo $icon['height']; ?>px;">
      </div>
    <?php endif; ?>
  </div>
