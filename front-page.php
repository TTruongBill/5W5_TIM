<?php get_header(); ?>
    <main class="site_main_front_page">
        <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <h1 class="main_titre">
            <?php the_title();?>
        </h1>
        <?php the_content();?> 
        <?php endwhile;?>
        <?php endif;?>
    
    </main>
<?php get_footer(); ?>