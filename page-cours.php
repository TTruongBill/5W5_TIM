<?php get_header(); ?>
    <main class="site_main_cours_page">
        <h3><?= get_the_title(); ?></h3>
        <section class="left-right" id="left-right">
            <button type="button"><</button>
            <h1 id="sessions">SESSION 1</h1>
            <button type="button">></button>
        </section>
        <section id="listeSession">
            <div class="session" id="session1">
                <?php get_template_part("gabarit/content", "cours",array('data' => array('session-1')));?>
            </div>
            <div class="session" id="session2">
                <?php get_template_part("gabarit/content", "cours",array('data' => array('session-2')));?>
            </div>
            <div class="session" id="session3">
                <?php get_template_part("gabarit/content", "cours",array('data' => array('session-3')));?>
            </div>
            <div class="session" id="session4">
                <?php get_template_part("gabarit/content", "cours",array('data' => array('session-4')));?>
            </div>
            <div class="session" id="session5">
                <?php get_template_part("gabarit/content", "cours",array('data' => array('session-5')));?>
            </div>
            <div class="session" id="session6">
                <?php get_template_part("gabarit/content", "cours",array('data' => array('session-6')));?>
            </div>
        </section>

        </section>
        <?php /*wp_nav_menu(array('menu'=>"ListeCours",
                                "container"=>"nav"));
        ?>
        <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <?php the_post_thumbnail("thumbnail"); ?>
        <?php the_content();?> 
        <?php endwhile;?>
        <?php endif;*/?>
        
    </main>
<?php get_footer(); ?>