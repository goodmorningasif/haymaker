<?php
/** 
 * Functions
 *
 * Smart functions
 *
 * @link Hay-EGWLF17
 *
 * @package Hay-EGWLF17
 * @subpackage Wordpress
 * @since 1.0
 * @version 1.0
 */

  include 'config.php';

  /* Define Variables  */
  $GLOBALS['url'] = get_template_directory_uri();

  /* Add Styles, Fonts, and Javascript */
  function my_enqueue_style() {
    wp_enqueue_style('myfonts',$GLOBALS['url']. '/assets/fonts/myfonts.css');
    wp_enqueue_style('rpfonts','http://webfonts.radimpesko.com/RP-W-5a16919d6f3e0cf08c000005.css');
    wp_enqueue_style('styles', $GLOBALS['url'].'/prod/styles.css');
    wp_enqueue_script('componentJS', $GLOBALS['url'].'/prod/component.js', array(), '1.0.0', true);
    wp_enqueue_script('loadingJS', $GLOBALS['url'].'/prod/loading.js', array(), '1.0.0', true);
    wp_localize_script('loadingJS', 'loading', array('url' => admin_url('admin-ajax.php')));
  }
  add_action( 'wp_enqueue_scripts', 'my_enqueue_style' );
  // add_theme_support( 'post-thumbnails' );


  /* Remove Admin Login */
  function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
  }
  add_action('get_header', 'remove_admin_login_header');


  /* remove auto paragraph tag from the-content */
  remove_filter('the_content', 'wpautop');

  
  /**
  * isMobile
  *
  * returns true/false if there is a match for browser. 
  */
  function isMobile() {
    return preg_match("/(android|webos|avantgo|iphone|ipad|ipod|blackbe‌​rry|iemobile|bolt|bo‌​ost|cricket|docomo|f‌​one|hiptop|mini|oper‌​a mini|kitkat|mobi|palm|phone|pie|tablet|up\.browser|up\.link|‌​webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
  }

  
  /**
  *
  * test
  *
  * shortcut to test function
  */
  function test($var, $mes){
    echo "<script>console.log('".$var.", outputs ".$mes."');</script>";
  }


  /**
  *
  * Adds option tab
  *
  */
  if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page();
    
  }


  /**
  *
  * Disables Theme Editor
  *
  */
  function remove_editor_menu() {
    remove_action('admin_menu', '_add_themes_utility_last', 101);
  }
  add_action('_admin_menu', 'remove_editor_menu', 1);

  /*
  * Print Tel
  *
  * Handles splitting up phone number with periods
  *
  */
  function print_tel($input, $gap = '-') {
    $string = array();
    $is_one = $input[0] === '1';
    $string[0] = $is_one ? mb_substr($input, 0, 4) : mb_substr($input, 0, 3);
    $string[1] = $is_one ? mb_substr($input, 3, 3) : mb_substr($input, 3, 3);
    $string[2] = $is_one ? mb_substr($input, 7) : mb_substr($input, 6);
    $output = $string[0] . $gap . $string[1] . $gap . $string[2];
    return $output;
  } 

?>