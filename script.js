// COMPREHENSIVE ZOOM PREVENTION
document.addEventListener('DOMContentLoaded', function() {
    // Prevent any zoom or scaling issues
    document.documentElement.style.zoom = '1';
    document.body.style.zoom = '1';
    
    // Override any transform styles that might cause scaling
    const preventScaling = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
            if (el.style.transform && el.style.transform.includes('scale')) {
                el.style.transform = el.style.transform.replace(/scale\([^)]*\)/g, '');
            }
        });
    };
    
    // Run immediately and on any DOM changes
    preventScaling();
    
    // Create a mutation observer to prevent scaling
    const observer = new MutationObserver(preventScaling);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style']
    });
    
    // Prevent zoom on window resize
    window.addEventListener('resize', () => {
        document.documentElement.style.zoom = '1';
        document.body.style.zoom = '1';
    });
});

// Modern Website Enhancement System
class WebsiteEnhancer {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.isLoading = true;
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupThemeSystem();
        this.setupParticles();
        this.setupNavigation();
        this.setupAnimations();
        this.setupInteractions();
        this.setupCounters();
        this.setupScrollEffects();
    }

    setupLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) return;

        // Give a moment for the page to render before fading out
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500); // Small delay to ensure content is ready
        });
    }

    setupThemeSystem() {
        const themeToggle = document.querySelector('.theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon(icon);
        
        themeToggle.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.currentTheme);
            localStorage.setItem('theme', this.currentTheme);
            this.updateThemeIcon(icon);
            this.updateParticlesTheme();
        });
    }

    updateThemeIcon(icon) {
        if (this.currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    updateParticlesTheme() {
        // Update particles colors based on theme
        if (window.pJSDom && window.pJSDom[0]) {
            const particles = window.pJSDom[0].pJS.particles;
            if (this.currentTheme === 'dark') {
                particles.color.value = ['#4ecdc4', '#45b7d1', '#96ceb4', '#ff6b6b'];
            } else {
                particles.color.value = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
            }
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }

    setupParticles() {
        // Enhanced Particle.js Configuration
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4ecdc4',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    setupNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const loadingScreen = document.getElementById('loading-screen');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Handle page transitions
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const isCurrentPage = window.location.pathname.endsWith(href) || (window.location.pathname.endsWith('/') && href === 'index.html');

                if (href.startsWith('#') || isCurrentPage) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    // Allow default behavior for anchor links
                    if (href.startsWith('#')) {
                       // The smooth scroll logic will handle this
                    }
                    return;
                }

                e.preventDefault();
                loadingScreen.classList.remove('hidden');

                setTimeout(() => {
                    window.location.href = href;
                }, 400); // Match this to CSS transition time
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjusted for navbar height
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    setupAnimations() {
        // Enhanced Animation System
        this.animatedElements = new Set();
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffects();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all animatable elements
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .team-member, .stat, .value-item, .ai-video-item');
        elements.forEach(el => observer.observe(el));
    }

    animateElement(element) {
        if (this.animatedElements.has(element)) return;
        
        this.animatedElements.add(element);
        element.classList.add('fade-in-up');
        
        // Add staggered animation for grid items
        if (element.parentElement && element.parentElement.classList.contains('services-grid')) {
            const index = Array.from(element.parentElement.children).indexOf(element);
            element.style.animationDelay = `${index * 0.1}s`;
        }
    }

    setupScrollAnimations() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateScrollAnimations() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.bg-element, .floating-card');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    setupHoverEffects() {
        // Enhanced hover effects for cards
        document.querySelectorAll('.service-card, .portfolio-item, .team-member').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e, card);
            });
        });
    }

    createRippleEffect(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupParallaxEffects() {
        // Parallax scrolling effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-bg-elements .bg-element');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    setupCounters() {
        // Animated counters for statistics
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        };
        
        // Observe counters for animation
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    setupScrollEffects() {
        // Scroll indicator functionality
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const nextSection = document.querySelector('#ai-showcase');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Hide scroll indicator when scrolled down
        window.addEventListener('scroll', () => {
            if (scrollIndicator) {
                if (window.scrollY > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            }
        });
    }

    setupInteractions() {
        // Enhanced button interactions
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                this.createButtonRipple(e, btn);
            });
        });

        // Enhanced form interactions
        this.setupFormEnhancements();
    }

    createButtonRipple(event, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('button-ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupFormEnhancements() {
        // Enhanced form validation and interactions
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                // Add floating label effect
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        input.parentElement.classList.remove('focused');
                    }
                });
                
                // Add character counter for textareas
                if (input.tagName === 'TEXTAREA') {
                    const counter = document.createElement('div');
                    counter.className = 'char-counter';
                    input.parentElement.appendChild(counter);
                    
                    input.addEventListener('input', () => {
                        const remaining = 500 - input.value.length;
                        counter.textContent = `${remaining} characters remaining`;
                        counter.style.color = remaining < 50 ? '#ef4444' : '#6b7280';
                    });
                }
            });
        });
    }
}

// Initialize the website enhancer
const websiteEnhancer = new WebsiteEnhancer();

// Enhanced Animation Controller
class AnimationController {
    constructor() {
        this.animatedElements = new Set();
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffects();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all animatable elements
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .team-member, .stat, .value-item, .ai-video-item');
        elements.forEach(el => observer.observe(el));
    }

    animateElement(element) {
        if (this.animatedElements.has(element)) return;
        
        this.animatedElements.add(element);
        element.classList.add('fade-in-up');
        
        // Add staggered animation for grid items
        if (element.parentElement && element.parentElement.classList.contains('services-grid')) {
            const index = Array.from(element.parentElement.children).indexOf(element);
            element.style.animationDelay = `${index * 0.1}s`;
        }
    }

    setupScrollAnimations() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateScrollAnimations() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.bg-element, .floating-card');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    setupHoverEffects() {
        // Enhanced hover effects for cards
        document.querySelectorAll('.service-card, .portfolio-item, .team-member').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e, card);
            });
        });
    }

    createRippleEffect(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupParallaxEffects() {
        // Parallax scrolling effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-bg-elements .bg-element');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Enhanced Counter Animation
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat h3');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }
}

// AI Video Interactions
class AIVideoController {
    constructor() {
        this.init();
    }

    init() {
        this.setupVideoHoverEffects();
        this.setupNeuralNetworkAnimation();
        this.setupDataStreamAnimation();
    }

    setupVideoHoverEffects() {
        const videoItems = document.querySelectorAll('.ai-video-item');
        
        videoItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const animation = item.querySelector('.ai-animation-circle, .ai-animation-data, .ai-animation-robot');
                if (animation) {
                    animation.style.animationPlayState = 'running';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const animation = item.querySelector('.ai-animation-circle, .ai-animation-data, .ai-animation-robot');
                if (animation) {
                    animation.style.animationPlayState = 'paused';
                }
            });
        });
    }

    setupNeuralNetworkAnimation() {
        const nodes = document.querySelectorAll('.node');
        const connections = document.querySelectorAll('.connection');
        
        // Add pulsing effect to nodes without scaling
        nodes.forEach((node, index) => {
            node.addEventListener('mouseenter', () => {
                node.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.8)';
            });
            
            node.addEventListener('mouseleave', () => {
                node.style.boxShadow = 'none';
            });
        });
    }

    setupDataStreamAnimation() {
        const dataStream = document.querySelector('.data-stream');
        if (dataStream) {
            // Add new data elements periodically
            setInterval(() => {
                const newData = document.createElement('span');
                newData.textContent = Math.random().toString(2).substring(2, 4);
                newData.style.opacity = '0';
                newData.style.transform = 'translateY(-20px)';
                
                dataStream.appendChild(newData);
                
                // Animate in
                setTimeout(() => {
                    newData.style.transition = 'all 0.5s ease';
                    newData.style.opacity = '1';
                    newData.style.transform = 'translateY(0)';
                }, 100);
                
                // Remove after animation
                setTimeout(() => {
                    newData.style.opacity = '0';
                    newData.style.transform = 'translateY(20px)';
                    setTimeout(() => newData.remove(), 500);
                }, 3000);
            }, 2000);
        }
    }
}

// Enhanced Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupFormValidation();
            this.setupFormAnimations();
        }
    }

    setupFormValidation() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        if (!name || !email || !subject || !message) {
                this.showNotification('Please fill in all fields', 'error');
            return;
        }
        
            if (!this.isValidEmail(email)) {
                this.showNotification('Please enter a valid email address', 'error');
            return;
        }
        
            this.showNotification('Sending message...', 'info');
            
            // Simulate API call with enhanced animation
            this.animateFormSubmission();
            
        setTimeout(() => {
                this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                this.form.reset();
                this.resetFormAnimations();
        }, 2000);
    });
}

    setupFormAnimations() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }

    animateFormSubmission() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Add loading animation without scaling
        this.form.style.opacity = '0.7';
    }

    resetFormAnimations() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
        
        this.form.style.opacity = '1';
    }

    isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
        // Create notification element with enhanced styling
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
                <i class="fas ${this.getNotificationIcon(type)}"></i>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
        // Enhanced styles
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6'
        };
        
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
            background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
            border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
            transform: translateX(400px);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 400px;
            backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
            notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

    getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        return icons[type] || 'fa-info-circle';
    }
}

// Newsletter Form Enhancement
class NewsletterForm {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupFormHandling();
        }
    }

    setupFormHandling() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = this.form.querySelector('input[type="email"]').value;
            
            if (!email || !this.isValidEmail(email)) {
                this.showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            this.showNotification('Subscribing to newsletter...', 'info');
            
            setTimeout(() => {
                this.showNotification('Successfully subscribed to newsletter!', 'success');
                this.form.reset();
            }, 1500);
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type) {
        // Reuse the notification system from ContactForm
        const contactForm = new ContactForm();
        contactForm.showNotification(message, type);
    }
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
    new CounterAnimation();
    new AIVideoController();
    new ContactForm();
    new NewsletterForm();
    
    // Add floating cards back to hero section
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });

    // Scroll-based animations
    const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(el => {
        fadeInObserver.observe(el);
    });
});

// Enhanced scroll animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg-elements .bg-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.02}deg)`;
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .floating-card {
        animation: float 6s ease-in-out infinite;
    }
    
    .form-group.focused input,
    .form-group.focused textarea {
        border-color: #4ecdc4;
        box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: auto;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);