<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Navigation Bar -->
<nav class="navbar" style="position: fixed; top: 0; width: 100%; background: rgba(24,28,42,0.98); backdrop-filter: blur(10px); z-index: 1000; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <div class="nav-container" style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; height: 70px;">
        <div class="nav-logo" style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="logo-icon" style="width: 40px; height: 40px; background: linear-gradient(135deg, #4f8cff, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-brain" style="color: #fff; font-size: 1.2rem;"></i>
            </div>
            <h2 style="background: linear-gradient(135deg, #4f8cff, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; font-size: 1.5rem; margin: 0;">
                <a href="<?php echo esc_url(home_url('/')); ?>" style="text-decoration: none; color: inherit;">
                    <?php bloginfo('name'); ?>
                </a>
            </h2>
        </div>
        
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_class' => 'nav-menu',
            'container' => false,
            'fallback_cb' => 'qbrik_fallback_menu'
        ));
        ?>
    </div>
</nav>
<div style="height: 70px;"></div>

<?php
function qbrik_fallback_menu() {
    echo '<ul class="nav-menu" style="display: flex; align-items: center; list-style: none; gap: 2rem; margin: 0;">';
    echo '<li class="nav-item"><a href="' . home_url('/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">Home</a></li>';
    echo '<li class="nav-item"><a href="' . home_url('/services/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">Services</a></li>';
    echo '<li class="nav-item"><a href="' . home_url('/ai-solutions/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">AI Solutions</a></li>';
    echo '<li class="nav-item"><a href="' . home_url('/portfolio/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">Portfolio</a></li>';
    echo '<li class="nav-item"><a href="' . home_url('/team/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">Team</a></li>';
    echo '<li class="nav-item"><a href="' . home_url('/blog/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">Blog</a></li>';
    echo '<li class="nav-item"><a href="' . home_url('/contact/') . '" class="nav-link" style="color: #fff; text-decoration: none; font-weight: 500;">Contact</a></li>';
    echo '</ul>';
}
?> 