<?php get_header(); ?>
    <main class="site_main_cours_page">
        <h3><?= strtoupper(get_the_title()); ?></h3>
        <section class="left-right" id="left-right">
            <button type="button"><i class="fa-solid fa-circle-chevron-left"></i></button>
            <h1 id="sessions">SESSION 1</h1>
            <button type="button"><i class="fa-solid fa-circle-chevron-right"></i></button>
        </section>
            <section id="listeSession">
                <!--Prend le template et donne comme valeur à la variable data la session-->
                <div class="session" id="session1">
                    <?php get_template_part("gabarit/content", "cours",array('data' => array('session-1')));?>
                </div>
                <div class="session" id="session2">
                    <?php get_template_part("gabarit/content", "cours",array('data' => array('session-2')));?>
                </div>
                <div class="session" id="session3">
                    <?php get_template_part("gabarit/content", "cours",array('data' => array('session-3')));?>
                </div>
                <div class="session" id="session4">
                    <?php get_template_part("gabarit/content", "cours",array('data' => array('session-4')));?>
                </div>
                <div class="session" id="session5">
                    <?php get_template_part("gabarit/content", "cours",array('data' => array('session-5')));?>
                </div>
                <div class="session" id="session6">
                    <?php get_template_part("gabarit/content", "cours",array('data' => array('session-6')));?>
                </div>
            </section>
        </section>
    </main>
<?php get_footer(); ?>