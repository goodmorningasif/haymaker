<?php
/**
 *
 * Template Name: Main
 *
 */

get_header(); ?>

<div class="blocks">

<?php if(have_rows('blocks')):
	while(have_rows('blocks')) :
		the_row();

        /* BLOCK: ARGYLE */
        if (get_row_layout() === 'argyle') :    
            include(locate_template('components/blocks/argyle.php'));

        /* BLOCK: BERWYN */
        elseif (get_row_layout() === 'berwyn') : 
            include(locate_template('components/blocks/berwyn.php'));	

        /* BLOCK: CYNTHIA */
        elseif (get_row_layout() === 'cynthia') :
            include(locate_template('components/blocks/cynthia.php')); 

        /* BLOCK: DANNY */
        elseif (get_row_layout() === 'danny') :
            include(locate_template('components/blocks/danny.php')); 

        /* BLOCK: EDGAR */
        elseif (get_row_layout() === 'edgar') :
            include(locate_template('components/blocks/edgar.php')); 

        /* BLOCK: FEINGOLD */
        elseif (get_row_layout() === 'feingold') :
            include(locate_template('components/blocks/feingold.php')); 

        /* BLOCK: GARGOYLE */
        elseif (get_row_layout() === 'gargoyle') :
            include(locate_template('components/blocks/gargoyle.php')); 
        endif;

	endwhile;
endif; ?>
</div> <!-- end blocks -->

<?php
if( get_the_title() === "About" ) :
    $team_args = array(
        "post_type" => "team",
        "posts_per_page" => "-1",
        "order" => "ASC",
        "orderby" => "ID"
    );
    $teams = new WP_Query( $team_args );

    if( $teams->have_posts() ): ?>
    <div class="teams">
        <?php  while( $teams->have_posts() ):
            $teams->the_post();
            if( have_rows('blocks') ):
                while( have_rows('blocks') ):
                    the_row();

                    include(locate_template('components/teams/teams.php')); 

                endwhile;
            endif;
        endwhile; ?>
    </div>
    <?php endif;
endif; ?>

<?php get_footer();