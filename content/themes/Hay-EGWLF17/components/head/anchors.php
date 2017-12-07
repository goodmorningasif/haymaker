<?php
  /*
  * Section =>  Anchors
  */
  $head = get_field('head');
	$seal_logo = file_get_contents($GLOBALS['url']."/assets/svg/svg_seal.svg");
	$main_logo = file_get_contents($GLOBALS['url']."/assets/svg/svg_haymaker-logo.svg");
	$hamburger_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_hamburger.svg");
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
    <a href=""><?php echo $main_logo;  ?></a>
  </div>
  <div class="nav top-right" id="open-close">
    <a id="view-menu" href=""><?php echo $hamburger_icon; ?></a>
  </div>
  <div class="nav bottom-left">
    <a id="view-contact" href="#">Contact</a>
  </div>
  <div class="nav bottom-right">
    <a href="<?php echo $reserve['url']; ?>" target="_blank">Reserve</a>
  </div>
</header>
