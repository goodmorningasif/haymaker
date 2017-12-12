<?php
  /*
  * Section =>  Anchors
  */

$head = get_field('head');
$seal_logo = file_get_contents($GLOBALS['url']."/assets/svg/svg_seal.svg");
$main_logo = file_get_contents($GLOBALS['url']."/assets/svg/svg_haymaker-logo.svg");
$ham_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_hamburger.svg");
$close_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_close.svg");
$menu_repeater = get_field('menu', 'options');
$reserve = $menu_repeater[2]['link']; ?>


<header class="head-anchors">
    <div class="nav top-left" id="left-logo">
        <a href=""><?php echo $seal_logo; ?></a>
    </div> 
<?php if($head && $head[0] === 'Enable'): ?>
    <div class="nav top-middle pinned" id="main-logo">
<?php else : ?>
    <div class="nav top-middle" id="main-logo">
<?php endif; ?>
        <a href=""><?php echo $main_logo; ?></a>
    </div>
    <div class="nav top-right" id="ham-close">
        <a id="view-menu" href=""><?php echo $ham_icon; ?></a>
    </div>
    <div class="nav bottom-left" id="contact-link">
        <span class="link">
            <a id="view-contact" href="#">Contact</a>
        </span>
    </div>
    <div class="nav close" id="contact-close">
        <?php echo $close_icon; ?>
    </div>
    <div class="nav bottom-right">
        <span class="link">
            <a href="<?php echo $reserve['url']; ?>" target="_blank">Reserve</a>
        </span>
    </div>
</header>
