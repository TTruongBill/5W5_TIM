<footer class="site_footer">
    <section class="site_footer_info">
        <?php  
        $icone = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M10 17l5-5-5-5v10z"></path><path d="M0 24V0h24v24H0z" fill="none"></path></svg>';
        wp_nav_menu(array("menu" => "footer",
                                "container" => "nav",
                                "container_class" => "site_footer_menu_nav",
                                "menu_class" => "footer_menu_ul",

                                "link_before"=> $icone)); 
        ?>
        </div>
    </section>
</footer>		
<?php wp_footer(); ?>
</body>
</html>