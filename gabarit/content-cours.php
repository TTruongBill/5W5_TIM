<?php 
    $catPost = get_posts(array('category_name' => $args['data'][0], "numberposts" => -1)) ;
    foreach ($catPost as $post) : setup_postdata($post); ?> 
    <section class='cours'> 
        <p>icone</p>
        <section>
            <h1><?php the_title(); ?></h1>
            <p><?php the_excerpt();?></p>
        </section>
    </section>
<?php endforeach;?>