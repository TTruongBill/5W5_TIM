<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?>
</head> 
<body <?php body_class("site"); ?>>
<header class="site_header">
    <section class="site_header_title">
        <?php the_custom_logo();?>
        <nav class="navDesktop">
        <?php wp_nav_menu(array('menu'=>"navPages",
                                "container"=>"nav",
                                "container_class"=>"navDesktopListe")); 
        ?>
        </nav>
        <nav class="navMobile">
            <section>
                <?php the_custom_logo();?>
                <label for="menuNavMobile">
                        <svg class="menuBurger" viewBox="0 0 100 80" width="40" height="40">
                        <rect id="line1" x="10" width="80" height="10" rx="7"></rect>
                        <rect id="line2" x="10" y="32" width="80" height="10" rx="7"></rect>
                        <rect id="line3" x="10" y="64" width="80" height="10" rx="7"></rect>
                        </svg>
                    </label>
            </section>
            <input type="checkbox" class="menuNavMobile" id="menuNavMobile">
            <?php wp_nav_menu(array('menu'=>"navPages",
                                    "container"=>"nav")); 
            ?>
        </nav>
       


    </section>

</header>

<?php /*wp_nav_menu(array('menu'=>"ListeCours",
                                "container"=>"nav")); */?>
