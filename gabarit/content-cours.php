<?php 
    //prendre les posts dans la catégorie à définir(dans le html/php), avec un nombre de postes illimité qui peut être affiché
    $catPost = get_posts(array('category_name' => $args['data'][0], "numberposts" => -1)) ;
    foreach ($catPost as $post) : setup_postdata($post); //Loop permettant de rajouter le code suivant
    $content = get_the_content();  //Mettre le contenu dans une variable
?> 
    <section class='cours'> 
        <i class="cours_fermer fa-solid fa-circle-xmark"></i>
        <section>
            <h1><?php the_title(); ?></h1>
            <p><?php the_post_thumbnail();?></p>
        </section>
        <p class="content_trim"><?php echo wp_trim_words($content, 30, "...<button class='cours_ouvrir'> Lire la suite </button>");//Montrer la variable et rajouter un bouton qui va permettre de montrer plus de contenu(dans le futur) ?></p>
        <div class="content_total"><?php echo $content; ?></div>
    </section>
<?php endforeach;?>