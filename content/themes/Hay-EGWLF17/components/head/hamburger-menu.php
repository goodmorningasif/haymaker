<?php
  /*
  * Section =>  Hamburger Menu
  */ 
  ?>

<div class="nav hamburger-menu" id="ham-menu">
  <ul class="menu-links">
    <?php if(have_rows( "menu", "options" )):
      while(have_rows( "menu", "options" )) :
        the_row();  
        $link = get_sub_field( "link" ); ?>
        <li class="list-link">
          <span class="link">
            <a href="<?php echo $link["url"]; ?>">
              <?php echo $link["title"]; ?>
            </a>
        </span>
        </li>
    <?php endwhile; 
    endif; ?>
  </ul>
</div>


