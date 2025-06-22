from flask import Flask, render_template, request, jsonify, redirect, url_for
from datetime import datetime
import json

app = Flask(__name__)
app.secret_key = 'qbrix_ai_solution_2024'

# Sample data for services and projects
SERVICES_DATA = {
    'ai': {
        'title': 'Artificial Intelligence',
        'description': 'Transform your business with intelligent AI solutions',
        'features': ['Natural Language Processing', 'Computer Vision', 'Intelligent Automation'],
        'technologies': ['TensorFlow', 'PyTorch', 'OpenAI'],
        'icon': 'fas fa-brain'
    },
    'ml': {
        'title': 'Machine Learning',
        'description': 'Build intelligent systems that learn from data',
        'features': ['Predictive Analytics', 'Recommendation Systems', 'Pattern Recognition'],
        'technologies': ['Scikit-learn', 'XGBoost', 'LightGBM'],
        'icon': 'fas fa-cogs'
    },
    'deep_learning': {
        'title': 'Deep Learning',
        'description': 'Harness the power of neural networks',
        'features': ['Neural Networks', 'Image Recognition', 'Speech Processing'],
        'technologies': ['TensorFlow', 'PyTorch', 'Keras'],
        'icon': 'fas fa-network-wired'
    },
    'analytics': {
        'title': 'Data Analytics',
        'description': 'Transform raw data into actionable insights',
        'features': ['Business Intelligence', 'Statistical Analysis', 'Data Mining'],
        'technologies': ['Python', 'R', 'SQL'],
        'icon': 'fas fa-chart-bar'
    },
    'visualization': {
        'title': 'Data Visualization',
        'description': 'Create compelling visual stories with data',
        'features': ['Interactive Dashboards', 'Real-time Monitoring', 'Custom Visualizations'],
        'technologies': ['D3.js', 'Tableau', 'Power BI'],
        'icon': 'fas fa-chart-pie'
    },
    'ecommerce': {
        'title': 'AI-Powered E-commerce',
        'description': 'Revolutionize your online business with AI',
        'features': ['AI Recommendations', 'Smart Inventory', 'Personalized Shopping'],
        'technologies': ['React', 'Node.js', 'MongoDB'],
        'icon': 'fas fa-shopping-cart'
    }
}

PROJECTS_DATA = [
    {
        'id': 1,
        'title': 'AI-Powered E-commerce Platform',
        'description': 'Intelligent e-commerce solution with AI-driven recommendations',
        'technologies': ['TensorFlow', 'Python', 'React'],
        'category': 'E-commerce',
        'image': 'ecommerce-ai.jpg'
    },
    {
        'id': 2,
        'title': 'Predictive Analytics Dashboard',
        'description': 'Business intelligence platform with ML models for forecasting',
        'technologies': ['Scikit-learn', 'Django', 'PostgreSQL'],
        'category': 'Analytics',
        'image': 'analytics-dashboard.jpg'
    },
    {
        'id': 3,
        'title': 'Computer Vision System',
        'description': 'Deep learning-based computer vision for quality control',
        'technologies': ['OpenCV', 'PyTorch', 'Flask'],
        'category': 'Computer Vision',
        'image': 'computer-vision.jpg'
    }
]

TEAM_DATA = [
    {
        'name': 'Dr. Ahmed Khan',
        'role': 'Chief AI Officer',
        'bio': 'PhD in Machine Learning with 10+ years experience in deep learning and computer vision.',
        'expertise': ['Deep Learning', 'Computer Vision', 'AI Strategy'],
        'avatar': 'ahmed-khan.jpg'
    },
    {
        'name': 'Sarah Johnson',
        'role': 'Lead Data Scientist',
        'bio': 'Expert in predictive analytics, statistical modeling, and scalable ML pipelines.',
        'expertise': ['Predictive Analytics', 'Statistical Modeling', 'ML Pipelines'],
        'avatar': 'sarah-johnson.jpg'
    },
    {
        'name': 'Michael Chen',
        'role': 'ML Engineer',
        'bio': 'Specialized in deploying machine learning models and production AI systems.',
        'expertise': ['MLOps', 'Model Deployment', 'Production Systems'],
        'avatar': 'michael-chen.jpg'
    }
]

@app.route('/')
def home():
    """Home page with AI hero section and overview"""
    return render_template('home.html', 
                         services=SERVICES_DATA,
                         projects=PROJECTS_DATA[:3],
                         team=TEAM_DATA[:3])

@app.route('/services')
def services():
    """Services page with detailed AI service offerings"""
    return render_template('services.html', services=SERVICES_DATA)

@app.route('/ai-solutions')
def ai_solutions():
    """AI Solutions page with solution categories"""
    return render_template('ai_solutions.html')

@app.route('/portfolio')
def portfolio():
    """Portfolio page with project showcase"""
    return render_template('portfolio.html', projects=PROJECTS_DATA)

@app.route('/team')
def team():
    """Team page with team members"""
    return render_template('team.html', team=TEAM_DATA)

@app.route('/contact')
def contact():
    """Contact page with contact form"""
    return render_template('contact.html')

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """API endpoint for contact form submission"""
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        # Here you would typically save to database or send email
        # For now, we'll just return success
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message! We\'ll get back to you soon.'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'An error occurred. Please try again.'
        }), 500

@app.route('/api/services')
def api_services():
    """API endpoint for services data"""
    return jsonify(SERVICES_DATA)

@app.route('/api/projects')
def api_projects():
    """API endpoint for projects data"""
    return jsonify(PROJECTS_DATA)

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 