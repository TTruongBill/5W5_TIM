<?php 
    get_header(); 
?>
    <main class="site_main_prof_page">
         <section class="left-right">
            <button type="button"><i class="fa-solid fa-circle-chevron-left"></i></button>
            <?php 
                $catPost = get_posts(array('category_name' => 'projet', "numberposts" => 11));
                foreach ($catPost as $post) : setup_postdata($post); 
            ?> 
            <section class="imgProf">
                <?php the_post_thumbnail(); ?>
            </section>
            <?php endforeach;?>
            <button type="button"><i class="fa-solid fa-circle-chevron-right"></i></button>
        </section>
        <section id="right">
            <section id="listeProfs">
                <?php 
                    $catPost = get_posts(array('category_name' => 'projet', "numberposts" => 11));
                    foreach ($catPost as $post) : setup_postdata($post); 
                ?> 
                <section class='enseignants'> 
                    <section class="titreProf">
                        <h3>PROJETS ÉTUDIANTS</h3>
                        <h1><?php the_title(); ?></h1>
                    </section>
                    <section class="contenuProf">
                        <?php the_post_thumbnail(); ?>
                        <div class="elmProjet">
                        <?php the_content();?>
                        </div>
                    </section>
                </section>
                <?php endforeach;?>
            </section>
            <p id="counter"></p>
        </section>
    </main>
<?php get_footer(); ?>