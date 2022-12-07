<?php /*Template Name: ProfProj */ ?>
<?php 
    get_header(); 
    $thumb_url = get_the_post_thumbnail_url();       
    $thumb_low = strtolower($thumb_url);      
    $catPost;
    $titre;
    $mainClass;
    if (strpos($thumb_low, '.gif') === false) {
        $thumb_size = 'large';
    } else {
        $thumb_size = 'full';       
    }
    if(is_page("prof")){
        $catPost = get_posts(array('category_name' => 'enseignants', "numberposts" => 14));
        $titre = "ENSEIGNANTS";
        $mainClass = "site_main_prof_page";
    } else if(is_page("projet-etudiant")) {
        $catPost = get_posts(array('category_name' => 'projet', "numberposts" => 11));
        $titre = "PROJETS ÉTUDIANTS";
        $mainClass = "site_main_proj_page";
    }
?>
    <main class=<?php echo $mainClass; ?>>
         <section class="left-right">
            <button type="button"><i class="fa-solid fa-circle-chevron-left"></i></button>
            <?php 
                foreach ($catPost as $post) : setup_postdata($post);
                the_post_thumbnail($thumb_size, array('class' => 'imgThumbnail')); 
                endforeach;
            ?>
            <button type="button"><i class="fa-solid fa-circle-chevron-right"></i></button>
        </section>
        <section id="right">
            <section id="listeProfs">
                <?php foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='contenuComplet'> 
                    <section class="titreProf">
                        <h3><?= $titre; ?></h3>
                        <h1><?php the_title(); ?></h1>
                    </section>
                    <section class="contenuProf">
                        <div class="containerProf">
                            <?php the_post_thumbnail(); ?>
                            <div class="elmsProf">
                                <?php the_content();?>
                            </div>
                        </div>
                    </section>
                </section>
                <?php endforeach;?>
            </section>
            <p class="counter"></p>
        </section>
            <div class="top_curve">
                <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <?php if(is_page("prof")){ ?>
                    <defs>
                        <linearGradient id="topGradient">
                            <stop offset="0%" stop-color="#3800B7" />
                            <stop offset="60%" stop-color="#4E00B7" />
                            <stop offset="100%" stop-color="#7D00B7" />
                        </linearGradient>
                    </defs>
                    <path d="M 401 -1 C 400 60 443 116 517 94 C 562 88 596 98 615 150 C 634 246 685 284 799 203 L 799 0 L 401 0" style="width : 100vw;" fill="url('#topGradient')"></path>
                <?php }else if(is_page("projet-etudiant")){ ?>
                    <defs>
                        <linearGradient id="topGradient">
                            <stop offset="0%" stop-color="#3800B7" />
                            <stop offset="10%" stop-color="#4E00B7" />
                            <stop offset="50%" stop-color="#7D00B7" />
                        </linearGradient>
                    </defs>
                    <path d="M 0 1 C 10 214 93 260 214 157 C 317 94 444 39 596 -1 L 799 0 L 401 0" style="width : 100vw;" fill="url('#topGradient')"></path>
                <?php } ?>
                </svg>
            </div>
            <div class="bottom_curve">
                <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <?php if(is_page("prof")){ ?>    
                    <defs>
                        <linearGradient id="bottomGradient">
                            <stop offset="0%" stop-color="#3800B7" />
                            <stop offset="30%" stop-color="#4E00B7" />
                            <stop offset="80%" stop-color="#7D00B7" />
                        </linearGradient>
                    </defs>
                    <path d="M 0 107 C 215 -1 500 292 517 599 L 674 600 L 0 600" style="width : 100vw;" fill="url('#bottomGradient')"></path>
                <?php }else if(is_page("projet-etudiant")){ ?>
                    <defs>
                    <linearGradient id="bottomGradient">
                        <stop offset="0%" stop-color="#7D00B7" />
                        <stop offset="70%" stop-color="#4E00B7" />
                        <stop offset="100%" stop-color="#3800B7" />
                    </linearGradient>
                    </defs>
                    <path d="M 0 537 C 36 420 190 394 282 389 C 420 396 658 474 799 596  L 674 600 L 0 600" style="width : 100vw;" fill="url('#bottomGradient')"></path>
                <?php } ?>
                </svg>
            </div>
    </main>
<?php get_footer(); ?>