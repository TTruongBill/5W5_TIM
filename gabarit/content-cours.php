<?php 
    $catPost = get_posts(array('category_name' => $args['data'][0], "numberposts" => -1)) ;
    foreach ($catPost as $post) : setup_postdata($post); 
    $content = get_the_content();   
    ?> 
    <section class='cours'> 
        <section>
            <h1><?php the_title(); ?></h1>
            <p>icone</p>
        </section>
        <p><?php echo wp_trim_words($content, 30, "...<button class='cours_ouvrir'> Lire la suite </button>"); ?></p>
    </section>
<?php endforeach;?>