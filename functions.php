<?php
function cidw_5W5_enqueue(){
    //wp_enqueue_style('style_css', get_template_directory_uri());
    wp_enqueue_style('style_css', 
                    get_template_directory_uri() . '/style.css', 
                    array(), 
                    filemtime(get_template_directory() . '/style.css'), 
                    false);
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap",
    false);

    wp_enqueue_style('Font');

    // Combinaison 1 (Open Sans + Cooper Hewitt + PT Sans)
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap",
    false);
    wp_register_style('Font', 'http://fonts.cdnfonts.com/css/cooper-hewitt?styles=34277');
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=PT+Sans&display=swap",
    false);

    // Combinaison 2 (Julius Sans One + Archivo Narrow + Source Sans Pro)
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap",
    false);
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&display=swap",
    false);
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
    false);

    // Combinaison 3 (Bodoni "Bold" + Bodoni "Regular Italic" + Monserrat)
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,800&display=swap",
    false);
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&display=swap",
    false);
    wp_enqueue_style('cidw_5w5_police_google',
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap",
    false);

    // Combinaison 4 (Futura + proxima-nova)
    wp_register_style('Font', 'https://use.typekit.net/ted7ipj.css');
    wp_register_style('Font', 'https://use.typekit.net/ted7ipj.css');

    //Javascript carrousel
    wp_register_script('Carrousel',
    get_template_directory_uri() . '/javascript/caroussel.js',
    array(),
    filemtime(get_template_directory() . '/javascript/caroussel.js'),
    true);

     //Javascript menuBurger
     wp_register_script('Burger',
     get_template_directory_uri() . '/javascript/menuBurger.js',
     array(),
     filemtime(get_template_directory() . '/javascript/menuBurger.js'),
     true);

     if(is_page()){
        wp_enqueue_script("Burger");
     }

     if(is_front_page()){
        wp_enqueue_script("Carrousel");
     }
   
}

add_action("wp_enqueue_scripts", "cidw_5W5_enqueue");

/*--------------------------Enregistrer le menu*/

Function cidw_5w5_enregistre_mon_menu() {
    register_nav_menus(
        array(
            'navPages' => esc_html__('Navigation des pages', 'cidw_5w5'),
            'ListeCours' => esc_html__('Liste des cours', 'cidw_5w5'),
            'ListeProfs' => esc_html__('Liste des profs', 'cidw_5w5'),
            )
    );
}

add_action('after_setup_theme', 'cidw_5w5_enregistre_mon_menu');


?>