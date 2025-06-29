<?php
// Qbrik AI Solutions WordPress Theme Functions

// Theme setup
function qbrik_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'qbrik'),
        'footer' => __('Footer Menu', 'qbrik'),
    ));
}
add_action('after_setup_theme', 'qbrik_theme_setup');

// Enqueue scripts and styles
function qbrik_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('qbrik-style', get_stylesheet_uri());
    wp_enqueue_style('qbrik-main-style', get_template_directory_uri() . '/styles.css');
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    // Enqueue Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    
    // Enqueue Particles.js
    wp_enqueue_script('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), '2.0.0', true);
    
    // Enqueue main JavaScript
    wp_enqueue_script('qbrik-script', get_template_directory_uri() . '/script.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'qbrik_scripts');

// Custom post types for AI Solutions
function qbrik_custom_post_types() {
    // AI Solutions Post Type
    register_post_type('ai_solutions', array(
        'labels' => array(
            'name' => 'AI Solutions',
            'singular_name' => 'AI Solution',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-generic',
    ));
    
    // Portfolio Post Type
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => 'Portfolio',
            'singular_name' => 'Portfolio Item',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
    ));
    
    // Team Members Post Type
    register_post_type('team_members', array(
        'labels' => array(
            'name' => 'Team Members',
            'singular_name' => 'Team Member',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-groups',
    ));
}
add_action('init', 'qbrik_custom_post_types');

// Add custom meta boxes
function qbrik_add_meta_boxes() {
    add_meta_box(
        'team_member_info',
        'Team Member Information',
        'qbrik_team_member_meta_box',
        'team_members',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'qbrik_add_meta_boxes');

function qbrik_team_member_meta_box($post) {
    wp_nonce_field('qbrik_team_member_meta_box', 'qbrik_team_member_meta_box_nonce');
    
    $position = get_post_meta($post->ID, '_team_member_position', true);
    $linkedin = get_post_meta($post->ID, '_team_member_linkedin', true);
    $github = get_post_meta($post->ID, '_team_member_github', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="team_member_position">Position</label></th>';
    echo '<td><input type="text" id="team_member_position" name="team_member_position" value="' . esc_attr($position) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="team_member_linkedin">LinkedIn</label></th>';
    echo '<td><input type="url" id="team_member_linkedin" name="team_member_linkedin" value="' . esc_attr($linkedin) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="team_member_github">GitHub</label></th>';
    echo '<td><input type="url" id="team_member_github" name="team_member_github" value="' . esc_attr($github) . '" class="regular-text" /></td></tr>';
    echo '</table>';
}

function qbrik_save_meta_boxes($post_id) {
    if (!isset($_POST['qbrik_team_member_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['qbrik_team_member_meta_box_nonce'], 'qbrik_team_member_meta_box')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['team_member_position'])) {
        update_post_meta($post_id, '_team_member_position', sanitize_text_field($_POST['team_member_position']));
    }
    if (isset($_POST['team_member_linkedin'])) {
        update_post_meta($post_id, '_team_member_linkedin', esc_url_raw($_POST['team_member_linkedin']));
    }
    if (isset($_POST['team_member_github'])) {
        update_post_meta($post_id, '_team_member_github', esc_url_raw($_POST['team_member_github']));
    }
}
add_action('save_post', 'qbrik_save_meta_boxes');
?> 