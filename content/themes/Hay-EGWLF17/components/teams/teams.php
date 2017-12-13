<?php
    /*
    * Section =>  Edgar
    */ 

    $image = get_sub_field('image'); 
    $name = get_sub_field('name'); 
    $title = get_sub_field('title'); 
    $bio = get_sub_field('bio'); 
    $close_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_close.svg");?>
  
<div class="team-member" id="<?php echo str_replace(" ", "", $name); ?>">
    <div class="profile"
        style="background-image: url('<?php echo $image['url']; ?>'); 
        max-width: <?php echo $image['width']; ?>px;
        height: <?php echo $image['height'] ?>px;">
    </div>
    <h2><?php echo $name; ?></h2>
    <h3><?php echo $title; ?></h3>
    <div class="full-bio">
        <h2><?php echo $name; ?></h2>
        <h3><?php echo $title; ?></h3>
        <p><?php echo $bio; ?></p>
        <h3 class="close-height">
            <span class="link">
                <?php echo $close_icon; ?>
            </span>
        </h3>
    </div>
    <div class="overlay"></div>
</div>