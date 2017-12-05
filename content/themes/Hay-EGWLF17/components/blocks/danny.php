<?php
  /*
  * Section =>  Danny
  */ 
  
  $options = get_sub_field('options');
  $assets = get_sub_field('assets');
  $icon = $assets['icon']; ?>

<div class="block danny">
  <div class="text-block">
    <?php echo get_sub_field('text');
    if($icon && $options && $options[0] === 'Add Icon'): ?>
      <div class="icon"
        style="background-image: url('<?php echo $icon['url']; ?>');
          max-width: <?php echo $icon['width']; ?>px;
          height: <?php echo $icon['height']; ?>px;">
      </div>
    <?php endif; ?>
  </div>
</div>