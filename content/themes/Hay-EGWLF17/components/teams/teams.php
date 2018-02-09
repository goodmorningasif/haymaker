<?php
    /*
    * Section =>  Teams
    */ 
$id = get_the_ID();
$assets = get_sub_field('assets'); 
$image = $assets['image']; 
$options = get_sub_field('options'); 
$name = ( $options ) ? get_sub_field('name') : false; 
$title = ( $options ) ? get_sub_field('title') : false; 
$link = get_permalink( $id ); ?>
  
<div class="team-member" id="<?php echo str_replace(" ", "", $name); ?>">
    <a href="<?php echo $link; ?>">
        <div class="profile toggle"
            style="background-image: url('<?php echo $image['url']; ?>'); 
            max-width: <?php echo $image['width']; ?>px;
            height: <?php echo $image['height'] ?>px;">
        </div>
        <?php if ( $options ): ?>
            <h2 class="toggle"><?php echo $name; ?></h2>
            <h3 class="toggle"><?php echo $title; ?></h3>
        <?php endif; ?>
    </a>
</div>