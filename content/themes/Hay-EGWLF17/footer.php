<?php
/**
 * Footer
 *
 * Contans footer assets.
 *
 * @link Hay-EGWLF17
 *
 * @package Hay-EGWLF17
 * @subpackage Wordpress
 * @since 1.0
 * @version 1.0
 */

?>




<?php wp_footer(); ?>

    <?php 

      /* SMART */
      $tagline = get_field('tagline','options');
      $contact = get_field('contact','options');
      $address = $contact['address'];
      $tel = $contact['telephone'];
      $email = $contact['email'];
      $hours = get_field('hours','options');
    ?>

    <section class="foot">
    	<div class="first-row">
    		<h3>local &amp; seasonal fare</h3>
    		<h3>7 days a week</h3>
    	</div>
    	<div class="content">
    		<div class="left-wrapper">
	    		<div class="booking-comp">
	    			<div class="booking button">
	    				<a href="">book a table</a>
	    			</div>
	    			<h2><?php echo $tagline; ?></h2>
    		  </div>
    		  <div class="directions-comp">
    		  	<h2>Directions</h2>
    		  	<?php echo $address; ?>
    		  	<div class="map-link">
    		  		<span class="link">
    		  			<a href="">
    		  			  Open in Maps
    		  		  </a>
    		  		</span>
    		  	</div>
    		  </div>
    		  <div class="hours-comp">
    		  	<h2>Hours</h2>
    		  	<?php echo $hours; ?>
    		  </div>
      	</div> 
      	<div class="right-wrapper">
      		<h2>Contact</h2>
      		<p class="title">Email us</p>
      		<p>
      			<span class="link">
	      			<a href="mailto:<?php echo $email; ?>">
		      			<?php echo $email; ?>
	      		  </a>
	      	  </span>
	      	</p>
      		<p class="title">Give us a call</p>
      		<p>
      			<span class="link">
      				<a href="tel:<?php echo $tel; ?>">
		      			<?php echo $tel; ?>
	      	   	</a>
      	   </span>
      	  </p>
      		<div class="social-row">
      			<?php if(have_rows('social_media', 'options')) :
      			  while(have_rows('social_media', 'options')) :
      			    the_row(); 
      			    $social_icon = get_sub_field('icon');
      			    $social_url = get_sub_field('url'); ?>
      			    <div class="social">
      			    	<a href="<?php echo $social_url; ?>">
      			    	  <?php echo file_get_contents($social_icon['url']); ?>
      			      </a>
      			    </div>
            <?php endwhile; endif; ?>
      		</div>
      		<div class="gift button">
      			<a href="">Gift Cards</a>
      		</div>
      	</div> 		
    	</div>
    	<div class="last-row">
    		<p>copyright haymaker <?php echo date('Y'); ?></p>
    		<p>site by <a href="https://sdcopartners.com">sdco partners</a></p>
    	</div>
    </section>


		</div>
	</div>
</body><!-- end -->
</html>
