<?php
/**
 *
 * Template Name: Press
 *
 */

$main = get_field( "image" );
$count = 0;

get_header();

include( locate_template( "components/press/press-roll.php" ) );

get_footer();