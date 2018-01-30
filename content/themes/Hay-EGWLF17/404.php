<?php
/**
 * 404
 *
 * 404 Template
 *
 * @link Hay-EGWLF17
 *
 * @package Hay-EGWLF17
 * @subpackage Wordpress
 * @since 1.0
 * @version 1.0
 */

get_header(); 
$main = get_field( "image", 11 ); ?>

<div class="press">
	<div class="main-image"
        style="background-image: url('<?php echo $main[ "url" ]; ?>');
        max-width: <?php echo $main[ "width" ]; ?>px;
        height: <?php echo $main[ "height" ]; ?>px">
    </div>
    <div class="press-clipping">
    	<h2>Opps! We ran into an error and can't seem to find the content you were looking for...</h2>
    </div>
</div>

<?php get_footer();
