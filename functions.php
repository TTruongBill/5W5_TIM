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
?>