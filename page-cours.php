<?php get_header(); ?>
    <main class="site_main_cours_page">
        <h3>Cours</h3>
        <section class="left-right" id="left-right">
            <h2><</h2>
            <h1 id="session1">SESSION 1</h1>
            <h2>></h2>
        </section>
        <section >
            <div class="session" id="session1">
                <?php $post = array('category_name' => 'session-1', 'post_type' => 'post'); 
                $catPost = get_posts($post) ;
                foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='cours'> 
                    <p>adw</p>
                    <section>
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_excerpt();?></p>
                    </section>
                </section>
                <?php endforeach;?>
            </div>
            <div class="session" id="session2">
                <?php $post = array('category_name' => 'session-2', 'post_type' => 'post'); 
                $catPost = get_posts($post) ;
                foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='cours'> 
                    <p>adw</p>
                    <section>
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_excerpt();?></p>
                    </section>
                </section>
                <?php endforeach;?>
            </div>
            <div class="session" id="session3">
                <?php $post = array('category_name' => 'session-3', 'post_type' => 'post'); 
                $catPost = get_posts($post) ;
                foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='cours'> 
                    <p>adw</p>
                    <section>
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_excerpt();?></p>
                    </section>
                </section>
                <?php endforeach;?>
            </div>
            <div class="session" id="session4">
                <?php $post = array('category_name' => 'session-4', 'post_type' => 'post'); 
                $catPost = get_posts($post) ;
                foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='cours'> 
                    <p>adw</p>
                    <section>
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_excerpt();?></p>
                    </section>
                </section>
                <?php endforeach;?>
            </div>
            <div class="session" id="session5">
                <?php $post = array('category_name' => 'session-5', 'post_type' => 'post'); 
                $catPost = get_posts($post) ;
                foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='cours'> 
                    <p>adw</p>
                    <section>
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_excerpt();?></p>
                    </section>
                </section>
                <?php endforeach;?>
            </div>
            <div class="session" id="session6">
                <?php $post = array('category_name' => 'session-6', 'post_type' => 'post'); 
                $catPost = get_posts($post) ;
                foreach ($catPost as $post) : setup_postdata($post); ?> 
                <section class='cours'> 
                    <p>adw</p>
                    <section>
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_excerpt();?></p>
                    </section>
                </section>
                <?php endforeach;?>
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