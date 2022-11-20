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
        <div class="top_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <defs>
                    <linearGradient id="topGradient">
                        <stop offset="0%" stop-color="#7D00B7" />
                        <stop offset="60%" stop-color="#4E00B7" />
                        <stop offset="100%" stop-color="#3800B7" />
                    </linearGradient>
                </defs>
                <path d="M 0 171 C 29 129 52 104 98 89 C 156 79 220 74 327 83 C 436 91 517 104 606 106 C 686 114 732 76 743 2  L 743 0 L -1 0" style="width : 100vw;" fill="url('#topGradient')"></path>
            </svg>
        </div>
        <div class="bottom_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <defs>
                    <linearGradient id="bottomGradient1" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="#7D00B7" />
                        <stop offset="60%" stop-color="#4E00B7" />
                        <stop offset="100%" stop-color="#3800B7" />
                    </linearGradient>
                </defs>
                <path d="M -1 400 C 139 610 223 500 477 320 C 594 235 702 148 800 240 L 800 600 L -1 600" style="width : 100vw;" fill="url('#bottomGradient1')"></path>
            </svg>
        </div>
        <div class="bottom_curve">
            <svg viewBox="0 0 800 600" preserveAspectRatio="none" style="width : calc(100% + 1.3px); height : 600px;">
                <defs>
                    <linearGradient id="bottomGradient2" >
                        <stop offset="0%" stop-color="#7D00B7" />
                        <stop offset="50%" stop-color="#7D00B7" />
                        <stop offset="60%" stop-color="#6D00B7" />
                        <stop offset="100%" stop-color="#3800B7" />
                    </linearGradient>
                </defs>
                <path d="M 0 500 C 67 599 233 561 345 484 C 407 442 452 399 514 395 C 624 402 690 515 727 598 L 700 600 L 0 600" style="width : 100vw;" fill="url('#bottomGradient2')"></path>
            </svg>
        </div>
    </main>
<?php get_footer(); ?>