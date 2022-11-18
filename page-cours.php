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
        <div class="bottom_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <path d="M -1 500 C 139 610 223 631 477 504 C 594 435 732 448 800 488 L 800 600 L -1 600" style="width : 100vw;" class="shape-fill"></path>
            </svg>
        </div>
    </main>
<?php get_footer(); ?>