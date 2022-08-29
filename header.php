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
        <?php the_custom_logo(); ?>
        <h1>
            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                <?php echo get_bloginfo('name'); ?>
            </a>
        </h1>
    </section>

</header>

