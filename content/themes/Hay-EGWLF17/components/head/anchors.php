<?php
  /*
  * Section =>  Anchors
  */

	$seal_logo = file_get_contents($GLOBALS['url']."/assets/svg/svg_seal.svg");
	$main_logo = file_get_contents($GLOBALS['url']."/assets/svg/svg_haymaker-logo.svg");
	$hamburger_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_hamburger.svg");
	$menu_repeater = get_field('menu', 'options');
	$reserve = $menu_repeater[2]['link']; ?>


<header class="head-anchors">
  <div class="nav top-left">
    <a href=""><?php echo $seal_logo; ?></a>
  </div>
  <div class="nav top-middle" id="main-logo">
    <a href=""><?php echo $main_logo;  ?></a>
  </div>
  <div class="nav top-right">
    <a id="view-menu" href=""><?php echo $hamburger_icon; ?></a>
  </div>
  <div class="nav bottom-left">
    <a id="view-contact" href="#">Contact</a>
  </div>
  <div class="nav bottom-right">
    <a href="<?php echo $reserve['url']; ?>" target="_blank">Reserve</a>
  </div>
</header>
