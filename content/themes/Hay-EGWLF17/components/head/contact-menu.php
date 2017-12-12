<?php
  /*
  * Section =>  Contact Menu
  */ 
  ?>

<div class="info contact" id="contact-menu">
  <?php $contact = get_field( "contact", "options" ); 
    $address = $contact["address"]; 
    $email = $contact["email"]; 
    $phone = $contact["telephone"]; ?>
    
  <div class="wrapper">
    <div class="address">
      <span class="link">
        <a href="https://www.google.com/maps/place/<?php echo str_replace(" ", "+", $address); ?>" target="_blank">
          <?php echo $address; ?>    
        </a>
      </span>
    </div>
    <div>
      <span class="link">
        <a href="mailto:<?php echo $email; ?>">
            <?php echo $email; ?>
        </a>
      </span>
    </div>
    <div>
      <span class="link">
        <a href="tel:<?php echo $phone; ?>">
          <?php echo print_tel($phone); ?>
        </a>
      </span>
    </div>
  </div>

</div>