<?php 
    $titre = get_the_title();
    get_header(); 
?>
    <main class="site_main_prof_page">
        <?php 
            $catPost = get_posts(array('category_name' => 'enseignants', "numberposts" => 14));
            foreach ($catPost as $post) : setup_postdata($post); 
        ?> 
        <section id="imgProf">
            <?php the_post_thumbnail(); ?>
        </section>
        <?php endforeach;?>
        <section id="right">
            <h3><?= $titre; ?></h3>
            <section class="left-right">
                <button type="button"><</button>
                <h1>LES PROFS DU TIM</h1>
                <button type="button">></button>
            </section>
            <section id="listeProfs">
                <?php 
                $catPost = get_posts(array('category_name' => 'enseignants', "numberposts" => 14));
                foreach ($catPost as $post) : setup_postdata($post); 
                ?> 
                    <section class='enseignants'> 
                        <section>
                            <h1><?php the_title(); ?></h1>
                            <?php the_post_thumbnail(); ?>
                            <p><?php the_excerpt();?></p>
                        </section>
                    </section>
        <?php endforeach;?>
            </section>
        </section>
    </main>
<?php get_footer(); ?>