<footer class="site_footer">
    <section class="site_footer_info">
        <section class="adresse footer_section">
            <h4>ADRESSE</h4>
            <?php get_sidebar("pied_page_colonne_1") //Prendre le sidebar choisi?>
        </section>
        <section class="joindre footer_section">
            <h4>NOUS JOINDRE</h4>
            <?php get_sidebar("pied_page_colonne_2") //Prendre le sidebar choisi ?>
        </section>
        <section class="media footer_section">
            <h4>SUIVEZ-NOUS</h4>
            <section class="media_social_liste">
            <?php get_sidebar("pied_page_ligne")  //Prendre le sidebar choisi?>
            </section>
        </section>
    </section>
</footer>		
<?php wp_footer(); ?>
</body>
</html>