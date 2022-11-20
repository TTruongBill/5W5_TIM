<?php 
    get_header(); 
?>
    <main class="site_main_prof_page">
         <section class="left-right">
            <button type="button"><i class="fa-solid fa-circle-chevron-left"></i></button>
            <?php 
                $catPost = get_posts(array('category_name' => 'enseignants', "numberposts" => 14));
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
                    $catPost = get_posts(array('category_name' => 'enseignants', "numberposts" => 14));
                    foreach ($catPost as $post) : setup_postdata($post); 
                ?> 
                <section class='enseignants'> 
                    <section class="titreProf">
                        <h3>ENSEIGNANTS</h3>
                        <h1><?php the_title(); ?></h1>
                    </section>
                    <section class="contenuProf">
                        <?php the_post_thumbnail(); ?>
                        <div class="elmsProf">
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
                        <stop offset="60%" stop-color="#4E00B7" />
                        <stop offset="100%" stop-color="#7D00B7" />
                    </linearGradient>
                </defs>
                <path d="M 401 -1 C 400 60 443 116 517 94 C 562 88 596 98 615 150 C 634 246 685 284 799 203 L 799 0 L 401 0" style="width : 100vw;" fill="url('#topGradient')"></path>
            </svg>
        </div>
        <div class="bottom_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <defs>
                    <linearGradient id="bottomGradient">
                        <stop offset="0%" stop-color="#3800B7" />
                        <stop offset="30%" stop-color="#4E00B7" />
                        <stop offset="80%" stop-color="#7D00B7" />
                    </linearGradient>
                </defs>
                <path d="M 0 107 C 215 -1 500 292 517 599 L 674 600 L 0 600" style="width : 100vw;" fill="url('#bottomGradient')"></path>
            </svg>
        </div>
    </main>
<?php get_footer(); ?>