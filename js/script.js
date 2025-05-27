// Main JavaScript file for Shri Chattrapati Shivaji Maharaj Hospital
// Developed by: Poonam Jundre

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Department Tabs
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the tab content to show
            const tabContentId = this.getAttribute('data-tab');
            
            // Create tab content for demonstration
            createTabContent(tabContentId);
        });
    });
    
    // Function to create tab content dynamically
    function createTabContent(departmentName) {
        const departments = {
            cardiology: {
                title: "Cardiology Department",
                image: "images/cardiology.jpg",
                description: "Our Cardiology Department provides comprehensive care for heart and cardiovascular system conditions. With state-of-the-art equipment and expert cardiologists, we offer diagnostics, treatment, and preventive care for various heart conditions.",
                features: [
                    "Advanced Cardiac Imaging",
                    "Interventional Cardiology",
                    "Heart Rhythm Disorders Treatment",
                    "Cardiac Rehabilitation"
                ]
            },
            neurology: {
                title: "Neurology Department",
                image: "images/neurology.jpg",
                description: "The Neurology Department specializes in the diagnosis and treatment of disorders of the nervous system. Our neurologists have expertise in treating conditions affecting the brain, spinal cord, and nerves.",
                features: [
                    "Neurological Diagnostics",
                    "Stroke Management",
                    "Movement Disorders Treatment",
                    "Headache and Pain Management"
                ]
            },
            orthopedics: {
                title: "Orthopedics Department",
                image: "images/orthopedics.jpg",
                description: "Our Orthopedics Department provides specialized care for musculoskeletal system - bones, joints, ligaments, tendons, and muscles. We offer both surgical and non-surgical treatments for orthopedic conditions.",
                features: [
                    "Joint Replacement Surgery",
                    "Sports Injury Treatment",
                    "Spine Surgery",
                    "Physiotherapy Services"
                ]
            },
            gynecology: {
                title: "Gynecology Department",
                image: "images/gynecology.jpg",
                description: "The Gynecology Department offers comprehensive care for women's reproductive health. Our gynecologists provide expert care for all stages of a woman's life, from adolescence through menopause and beyond.",
                features: [
                    "Obstetric Care",
                    "Gynecological Surgery",
                    "Fertility Services",
                    "Menopause Management"
                ]
            },
            pediatrics: {
                title: "Pediatrics Department",
                image: "images/pediatrics.jpg",
                description: "Our Pediatrics Department is dedicated to the health and well-being of children from birth through adolescence. Our pediatricians provide preventive care, diagnose and treat illnesses, and offer guidance on children's health and development.",
                features: [
                    "Newborn Care",
                    "Childhood Immunizations",
                    "Developmental Assessments",
                    "Pediatric Specialty Care"
                ]
            },
            dermatology: {
                title: "Dermatology Department",
                image: "images/dermatology.jpg",
                description: "The Dermatology Department specializes in the diagnosis and treatment of skin, hair, and nail conditions. Our dermatologists offer medical, surgical, and cosmetic services for patients of all ages.",
                features: [
                    "Skin Disease Treatment",
                    "Dermatological Surgery",
                    "Cosmetic Dermatology",
                    "Skin Cancer Screening"
                ]
            }
        };
        
        // Get the department data
        const deptData = departments[departmentName];
        
        // Find the container
        const deptContent = document.querySelector('.department-content');
        
        // Remove active class from all tab contents
        const allTabContents = document.querySelectorAll('.tab-content');
        allTabContents.forEach(content => content.classList.remove('active'));
        
        // Check if tab content already exists
        let tabContent = document.getElementById(departmentName);
        
        if(!tabContent) {
            // Create new tab content
            tabContent = document.createElement('div');
            tabContent.id = departmentName;
            tabContent.className = 'tab-content';
            
            // Create the HTML content
            tabContent.innerHTML = `
                <div class="dept-image">
                    <img src="${deptData.image}" alt="${deptData.title}">
                </div>
                <div class="dept-info">
                    <h3>${deptData.title}</h3>
                    <p>${deptData.description}</p>
                    <ul class="dept-features">
                        ${deptData.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            // Append to the container
            deptContent.appendChild(tabContent);
        }
        
        // Show this tab content
        tabContent.classList.add('active');
    }
    
    // Form Validation for Appointment Form
    const appointmentForm = document.getElementById('appointmentForm');
    
    if(appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            let isValid = true;
            const formElements = this.elements;
            
            for(let i = 0; i < formElements.length; i++) {
                if(formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else if(formElements[i].hasAttribute('required')) {
                    formElements[i].classList.remove('error');
                }
            }
            
            if(isValid) {
                // Show success message
                alert('Appointment request submitted successfully! We will contact you shortly to confirm your appointment.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Form Validation for Contact Form
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            let isValid = true;
            const formElements = this.elements;
            
            for(let i = 0; i < formElements.length; i++) {
                if(formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else if(formElements[i].hasAttribute('required')) {
                    formElements[i].classList.remove('error');
                }
            }
            
            if(isValid) {
                // Get form values
                const name = document.getElementById('contactName').value;
                const email = document.getElementById('contactEmail').value;
                const subject = document.getElementById('contactSubject').value;
                const message = document.getElementById('contactMessage').value;
                
                // Prepare mailto link
                const mailtoLink = `mailto:poonamjundre725@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                
                // Open default email client
                window.location.href = mailtoLink;
                
                // Show success message
                alert('Thank you for your message! Your email client should open now to send the message.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Form Validation for Login Form
    const loginForm = document.getElementById('loginForm');
    
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            let isValid = true;
            const formElements = this.elements;
            
            for(let i = 0; i < formElements.length; i++) {
                if(formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else if(formElements[i].hasAttribute('required')) {
                    formElements[i].classList.remove('error');
                }
            }
            
            if(isValid) {
                // Show mock login message (in a real app, this would authenticate with a server)
                alert('Login functionality would connect to a secure server in a real implementation.');
            } else {
                alert('Please enter both username and password.');
            }
        });
    }
    
    // Header scroll effect
    function headerScroll() {
        const header = document.querySelector('header');
        if(window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', headerScroll);
    
    // Initialize the first department tab
    document.querySelector('.tab.active').click();
}); 