<?php
/**
 *
 * Template Name: Press
 *
 */

$main = get_field( "image" );
$count = 0;

get_header(); ?>

<div class="press">
    <?php if( "main" ) : ?>
        <div class="main-image"
            style="background-image: url('<?php echo $main[ "url" ]; ?>');
            max-width: <?php echo $main[ "width" ]; ?>px;
            height: <?php echo $main[ "height" ]; ?>px">
        </div>
    <?php endif; 

    if ( have_rows( "press" ) ) : 
        while ( have_rows( "press" ) ) : 
            the_row(); 
            $headline = get_sub_field( "headline" );
            $quote = get_sub_field( "quote" );
            $link = get_sub_field( "link" ); ?>
        
        <?php if ( $count === 0 ) : ?> 
            <div class="press-clipping">
                <?php if ( $quote ) : ?>
                    <h2>
                        <?php echo $quote; ?>
                    </h2>
                <?php else : ?>
                    <h3>
                        <?php echo $headline; ?>
                    </h3>
                <?php endif; ?>
                <div class="publication">
                    <span class="link">
                        <a href="<?php echo $link[ "url" ]; ?>">
                            <?php echo $link[ "title" ]; ?>
                        </a>
                    </span>
                </div>
            </div>
        <?php else : ?>
            <div class="press-clipping">
                <h3>
                    <?php echo $headline; ?>
                </h3>
                <div class="publication">
                    <span class="link">
                        <a href="<?php echo $link[ "url" ]; ?>">
                            <?php echo $link[ "title" ]; ?>
                        </a>
                    </span>
                </div>
            </div>
        <?php endif; ?>
    <?php $count++;endwhile; 
    endif; ?>
</div>


<?php get_footer();