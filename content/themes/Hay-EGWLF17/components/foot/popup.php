<?php 
  /*
  * Section =>  Popup
  */ 

$close_icon = file_get_contents($GLOBALS['url']."/assets/svg/svg_close.svg"); ?>

  <div class="popup-container">

  <div class="giftcard popup" id="popup-giftcard-container">
    <h3 class="close-popup">
        <?php echo $close_icon; ?>
    </h3>
    <h2>Purchase a Gift Card</h2>
    <h3>Select amount below</h3>
    <div class="giftcard-link wrapper">
      <div id="twentyfive" class="button">
        <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FU3UM48NKLUS2">$25.00</a>
      </div>
      <div id="sixty" class="button">
        <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A286H4962SLEN">$60.00</a>
      </div>
      <div id="hundred" class="button">
        <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2368D9TE5NQV4">$100.00</a>
      </div>
    </div>
  </div>

  <div class="newsletter popup" id="popup-newsletter-container">
    <h3 class="close-popup">
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