<?php
/**
 *
 * Template Name: Single Menu
 *
 */
get_header(); 
$note = get_field( "warnings" );
$assets = get_field( "assets" );
$icon = $assets["icon"]; ?>

<div class="menu">
  <?php include(locate_template('components/menu/items.php')); ?>
</div><!-- end menu -->

<?php get_footer();