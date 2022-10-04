<?php get_header(); ?>
    <main class="site_main_front_page">
        <div class="boite_carrousel">
            <section class="boite_carrousel_img"></section>
            <section class="boite_carrousel_nav"></section>
        </div>
    
        <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <?php the_content();?> 
        <?php endwhile;?>
        <?php endif;?>
        
    </main>
<?php get_footer(); ?>