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
}

add_action("wp_enqueue_scripts", "cidw_5W5_enqueue");

/*--------------------------Enregistrer le menu*/

Function cidw_5w5_enregistre_mon_menu() {
    register_nav_menus(
        array(
            'navPages' => esc_html__('Navigation des pages', 'cidw_5w5'),
            'ListeCours' => esc_html__('Liste des cours', 'cidw_5w5'),
        )
    );
}

add_action('after_setup_theme', 'cidw_5w5_enregistre_mon_menu');


?>