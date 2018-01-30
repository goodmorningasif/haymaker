<?php 
  /*
  * Section =>  Head
  */

$tagline = get_field('tagline','options');
$contact = get_field('contact','options');
$address = $contact['address'];
$tel = $contact['telephone'];
$email = $contact['email'];
$hours = get_field('hours','options'); 
$close_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_close.svg");?>

<div class="popup-container">

  <div class="giftcard popup">
    <h3 class="close-height toggle">
        <?php echo $close_icon; ?>
    </h3>
    <h2>Purchase a Gift Card</h2>
    <h3>Select amount below</h3>
    <div class="giftcard-link wrapper">
      <div id="twentyfive" class="button">$25.00</div>
      <div id="sixty" class="button">$60.00</div>
      <div id="hundred" class="button">$100.00</div>
    </div>
  </div>

  <div class="newsletter popup">
    <h3 class="close-height toggle">
        <?php echo $close_icon; ?>
    </h3>
    <h2>Sign Up for our Newsletter</h2>
    <h3>Stay in the know</h3>
    <div class="newsletter-content forms">
      <?php echo do_shortcode('[contact-form-7 id="381" title="Newsletter Signup"]'); ?>
    </div>
  </div>

  <div class="overlay" id="pop"></div>
</div>

<footer class="foot" id="feet">
	<div class="first-row">
		<h3>local &amp; seasonal fare</h3>
		<h3>7 days a week</h3>
	</div>
	<div class="content">
		<div class="left-wrapper">
  		<div class="booking-comp">
  			<div class="booking button">
  				<a href="https://www.opentable.com/restaurant/profile/988627/reserve?restref=988627&lang=en-US" target="_blank">book a table</a>
  			</div>
  			<h2><?php echo $tagline; ?></h2>
		  </div>
		  <div class="directions-comp">
		  	<h2>Directions</h2>
        <p>
		  	  <?php echo $address; ?>
        </p>
		  	<div class="map-link">
		  		<span class="link">
		  			<a href="https://www.google.com/maps/place/<?php echo str_replace(" ", "+", $address); ?>" target="_blank">
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
      <div class="half">
    		<h2>Contact</h2>
    		<p>
    			<span class="link">
      			<a href="mailto:<?php echo $email; ?>">
        			<?php echo $email; ?>
      		  </a>
          </span>
          <span class="link">
            <a href="tel:<?php echo $tel; ?>">
              <?php echo print_tel($tel); ?>
            </a>
          </span>
      	</p>
      </div>
      <div class="half">
    		<div class="social-row">
    			<?php if(have_rows('social_media', 'options')) :
    			  while(have_rows('social_media', 'options')) :
    			    the_row(); 
    			    $social_icon = get_sub_field('icon');
    			    $social_url = get_sub_field('url'); ?>
    			    <div class="social">
    			    	<a href="<?php echo $social_url; ?>" target="_blank">
    			    	  <?php echo file_get_contents($social_icon['url']); ?>
    			      </a>
    			    </div>
          <?php endwhile; endif; ?>
    		</div>
        <div class="newsletter button">
          <a href="">Newsletter Sign Up</a>
        </div>
    		<div class="gift button">
    			<a href="">Gift Cards</a>
    		</div>
      </div>
  	</div> 		
	</div>
	<div class="last-row">
		<p>copyright haymaker <?php echo date('Y'); ?></p>
		<p>site by <a href="https://sdcopartners.com" target="_blank">sdco partners</a></p>
	</div>
</foot>
