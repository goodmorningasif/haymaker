<?php
  /*
  * Section =>  Edgar
  */ 

  $image = get_sub_field('image'); 
  $name = get_sub_field('name'); 
  $title = get_sub_field('title'); 
  $bio = get_sub_field('bio'); ?>
  
<div class="team-member">
  <div class="profile"
    style="background-image: url('<?php echo $image['url']; ?>'); 
    max-width: <?php echo $image['width']; ?>px;
    height: <?php echo $image['height'] ?>px;">
  </div>
  <h2><?php echo $name; ?></h2>
  <h2><?php echo $title; ?></h2>
  <?php echo $bio; ?>
</div>