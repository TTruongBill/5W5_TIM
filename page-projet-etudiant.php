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
        <div class="top_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <defs>
                    <linearGradient id="topGradient">
                        <stop offset="0%" stop-color="#3800B7" />
                        <stop offset="10%" stop-color="#4E00B7" />
                        <stop offset="50%" stop-color="#7D00B7" />
                    </linearGradient>
                </defs>
                <path d="M 0 1 C 10 214 93 260 214 157 C 317 94 444 39 596 -1 L 799 0 L 401 0" style="width : 100vw;" fill="url('#topGradient')"></path>
            </svg>
        </div>
        <div class="bottom_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <defs>
                    <linearGradient id="bottomGradient">
                    <stop offset="0%" stop-color="#7D00B7" />
                        <stop offset="70%" stop-color="#4E00B7" />
                        <stop offset="100%" stop-color="#3800B7" />
                    </linearGradient>
                </defs>
                <path d="M 0 537 C 36 420 190 394 282 389 C 420 396 658 474 799 596  L 674 600 L 0 600" style="width : 100vw;" fill="url('#bottomGradient')"></path>
            </svg>
        </div>
    </main>
<?php get_footer(); ?>