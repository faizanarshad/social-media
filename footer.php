    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php bloginfo('name'); ?></h3>
                    <p><?php bloginfo('description'); ?></p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>AI Services</h4>
                    <ul>
                        <li><a href="<?php echo home_url('/services/'); ?>">Machine Learning</a></li>
                        <li><a href="<?php echo home_url('/services/'); ?>">Deep Learning</a></li>
                        <li><a href="<?php echo home_url('/services/'); ?>">Data Analytics</a></li>
                        <li><a href="<?php echo home_url('/services/'); ?>">Computer Vision</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Solutions</h4>
                    <ul>
                        <li><a href="<?php echo home_url('/portfolio/'); ?>">AI E-commerce</a></li>
                        <li><a href="<?php echo home_url('/portfolio/'); ?>">Predictive Analytics</a></li>
                        <li><a href="<?php echo home_url('/portfolio/'); ?>">Data Visualization</a></li>
                        <li><a href="<?php echo home_url('/portfolio/'); ?>">ML Models</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>AI Newsletter</h4>
                    <p>Stay updated with the latest AI trends, ML insights, and data science innovations.</p>
                    <?php echo do_shortcode('[contact-form-7 id="NEWSLETTER_FORM_ID" title="Newsletter"]'); ?>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?> - AI & Data Science Specialists. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html> 