<?php 
  /*
  * Section =>  Foot
  */

$tagline = get_field('tagline','options');
$contact = get_field('contact','options');
$address = $contact['address'];
$tel = $contact['telephone'];
$email = $contact['email'];
$hours = get_field('hours','options'); 
?>

<footer class="foot" id="feet">
	<div class="first-row">
		<h3>local &amp; seasonal fare</h3>
		<h3>7 days a week</h3>
	</div>
	<div class="content">
		<div class="left-wrapper">
  		<div class="booking-comp">
  			<div class="booking button">
  				<a href="http://www.opentable.com/single.aspx?rid=988627&restref=988627" target="_blank">book a table</a>
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
          <a href="" id="popup-newsletter-bttn">Newsletter Sign Up</a>
        </div>
    		<div class="gift button">
    			<a href="" id="popup-giftcard-bttn">Gift Cards</a>
    		</div>
      </div>
  	</div> 		
	</div>
  <div class="biz-row">
    <p><a target="_blank" href="http://www.kmssa.com/">SERVICE SYSTEMS ASSOCIATES</a></p>
    <p><a target="_blank" href="http://www.nczoo.org/">THE NORTH CAROLINA ZOOLOGICAL PARK</a></p>
    <p><a target="_blank" href="http://marketplace-restaurant.com">THE MARKET PLACE RESTAURANT</a></p>
    <p><a target="_blank" href="http://billydschicken.com">BILLY D'S FRIED CHICKEN</a></p>
  </div>
	<div class="last-row">
		<p>copyright haymaker <?php echo date('Y'); ?></p>
		<p>site by <a href="https://sdcopartners.com" target="_blank">sdco partners</a></p>
	</div>
</foot>
