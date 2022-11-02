<?php 
    //prendre les posts dans la catégorie à définir(dans le html/php), avec un nombre de postes illimité qui peut être affiché
    $catPost = get_posts(array('category_name' => $args['data'][0], "numberposts" => -1)) ;
    foreach ($catPost as $post) : setup_postdata($post); //Loop permettant de rajouter le code suivant
    $content = get_the_content();  //Mettre le contenu dans une variable
    ?> 
    <section class='cours'> 
        <section>
            <h1><?php the_title(); ?></h1>
            <p>icone</p>
        </section>
        <p><?php echo wp_trim_words($content, 30, "...<button class='cours_ouvrir'> Lire la suite </button>");//Montrer la variable et rajouter un bouton qui va permettre de montrer plus de contenu(dans le futur) ?></p>
    </section>
<?php endforeach;?>