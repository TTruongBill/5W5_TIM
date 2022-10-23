<?php get_header(); ?>
    <main class="site_main_cours_page">
        <h3>Cours</h3>
        <section class="left-right">
            <h2><</h2>
            <h1>SESSION 1</h1>
            <h2>></h2>
        </section>
        <section class="cours">
            <p>aadawd</p>
        <section>
                <h1>Titre du cours</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque eligendi porro possimus quibusdam magnam, consequuntur sed corrupti culpa illum consequatur nemo veritatis ut iusto illo unde repudiandae aliquid numquam!</p>
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