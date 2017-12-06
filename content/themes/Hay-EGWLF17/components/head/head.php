<?php
  /*
  * Section =>  Head
  */

  $head = get_field('head');

  if($head && $head[0] === 'Enable'):
    include(locate_template('components/head/pre-comp.php'));  
  endif;

  include(locate_template('components/head/anchors.php'));

  ?>



