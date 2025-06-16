// Green Fresh Harvests - JavaScript functionality

// Product data
function getProductsData() {
    return [
        {
            id: 1,
            name: 'Premium Bananas',
            price: 3000,
            unit: 'bunch',
            image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'John Mukasa',
            sellerLocation: 'Banana Specialist • Wakiso',
            description: 'Sweet, ripe bananas perfect for breakfast or snacking. Locally grown with care in the fertile soils of Wakiso. These premium bananas are hand-picked at the perfect ripeness to ensure maximum sweetness and nutritional value.'
        },
        {
            id: 2,
            name: 'Juicy Mangoes',
            price: 2500,
            unit: 'kg',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1605027990121-3b2c6c4e8d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Sarah Nambi',
            sellerLocation: 'Mango Farmer • Mukono',
            description: 'Tropical mangoes bursting with flavor. Hand-picked at perfect ripeness from our organic orchards in Mukono. These mangoes are known for their exceptional sweetness and rich, tropical flavor that will transport you to paradise.'
        },
        {
            id: 3,
            name: 'Sweet Pineapples',
            price: 8000,
            unit: 'each',
            image: 'https://images.unsplash.com/photo-1589217157232-464b505b197f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'David Ssali',
            sellerLocation: 'Pineapple Grower • Luwero',
            description: 'Golden pineapples with the perfect balance of sweet and tangy flavors. Grown in the rich volcanic soils of Luwero, these pineapples are naturally sweet and incredibly juicy. Perfect for fresh eating or making tropical smoothies.'
        },
        {
            id: 4,
            name: 'Citrus Oranges',
            price: 4000,
            unit: 'kg',
            image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Grace Nakato',
            sellerLocation: 'Citrus Expert • Jinja',
            description: 'Vitamin C packed oranges, perfect for fresh juice or healthy snacking. These premium citrus fruits are grown in the sunny climate of Jinja, ensuring maximum vitamin content and refreshing taste. Ideal for boosting your immune system.'
        },
        {
            id: 5,
            name: 'Creamy Avocados',
            price: 1500,
            unit: 'each',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Peter Kato',
            sellerLocation: 'Avocado Farmer • Masaka',
            description: 'Rich, buttery avocados perfect for salads, toast, or smoothies. Grown in the highlands of Masaka, these avocados have the perfect creamy texture and rich flavor. Packed with healthy fats and nutrients for a balanced diet.'
        },
        {
            id: 6,
            name: 'Passion Fruits',
            price: 500,
            unit: 'each',
            image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Mary Namusoke',
            sellerLocation: 'Passion Fruit Grower • Mbarara',
            description: 'Aromatic passion fruits with intense tropical flavor. Great for juices and desserts. These exotic fruits are grown in the perfect climate of Mbarara, resulting in an intense, aromatic flavor that adds a tropical touch to any dish or drink.'
        },
        {
            id: 7,
            name: 'Fresh Watermelons',
            price: 12000,
            unit: 'each',
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Robert Ssemakula',
            sellerLocation: 'Watermelon Specialist • Iganga',
            description: 'Large, juicy watermelons perfect for hot days. Sweet, refreshing flesh with minimal seeds. Grown in the fertile soils of Iganga, these watermelons are known for their exceptional sweetness and high water content.'
        },
        {
            id: 8,
            name: 'Sweet Papayas',
            price: 6000,
            unit: 'each',
            image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1609501676725-7186f0a1b4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Agnes Nakimuli',
            sellerLocation: 'Papaya Farmer • Entebbe',
            description: 'Ripe, sweet papayas with vibrant orange flesh. Rich in vitamins and enzymes, perfect for breakfast or desserts. Our papayas are tree-ripened in the tropical climate of Entebbe for maximum flavor and nutrition.'
        },
        {
            id: 9,
            name: 'Fresh Tomatoes',
            price: 3500,
            unit: 'kg',
            image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'James Okello',
            sellerLocation: 'Vegetable Farmer • Mbale',
            description: 'Fresh, vine-ripened tomatoes perfect for cooking and salads. Grown organically in the highland climate of Mbale, these tomatoes have excellent flavor and firm texture. Ideal for sauces, stews, and fresh preparations.'
        },
        {
            id: 10,
            name: 'Green Peppers',
            price: 4500,
            unit: 'kg',
            image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Florence Namugga',
            sellerLocation: 'Pepper Grower • Kasese',
            description: 'Crisp, fresh green peppers with excellent crunch and mild flavor. Perfect for stir-fries, salads, and cooking. Grown in the fertile valleys of Kasese, these peppers are harvested at peak freshness for maximum nutrition.'
        },
        {
            id: 11,
            name: 'Fresh Lemons',
            price: 2000,
            unit: 'kg',
            image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Paul Mugisha',
            sellerLocation: 'Citrus Farmer • Fort Portal',
            description: 'Juicy, aromatic lemons perfect for cooking, drinks, and natural remedies. High in vitamin C and natural oils. Grown in the cool climate of Fort Portal, these lemons have exceptional flavor and long shelf life.'
        },
        {
            id: 12,
            name: 'Sweet Carrots',
            price: 2800,
            unit: 'kg',
            image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image2: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            image3: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            seller: 'Ruth Nakabugo',
            sellerLocation: 'Root Vegetable Farmer • Kabale',
            description: 'Sweet, crunchy carrots rich in beta-carotene and vitamins. Perfect for cooking, juicing, or eating raw. Grown in the cool highlands of Kabale, these carrots develop exceptional sweetness and vibrant color.'
        }
    ];
}

// Shopping cart functionality
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function addToCart(id, name, price, unit, image, seller) {
    const cart = getCart();
    const item = {
        id: id,
        name: name,
        price: price,
        unit: unit,
        image: image,
        seller: seller,
        timestamp: Date.now()
    };

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${name} added to cart!`, 'success');
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();

    // Mobile menu toggle (if needed in future)
    const navLinks = document.querySelector('.nav-links');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create WhatsApp message
            const whatsappMessage = `Hello Green Fresh Harvests!

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message: ${message}

I look forward to hearing from you!`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp with the message
            const whatsappURL = `https://wa.me/256742455040?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Show success message
            showNotification('Message prepared! WhatsApp will open with your message.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });

    // Add click-to-call functionality for phone numbers
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            showNotification('Calling Green Fresh Harvests...', 'info');
        });
    });

    // Add notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--accent-green)' : type === 'error' ? '#e74c3c' : 'var(--primary-green)'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            max-width: 300px;
            font-weight: 500;
            animation: slideIn 0.3s ease-out;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--accent-green);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effect to scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--primary-green)';
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--accent-green)';
        this.style.transform = 'scale(1)';
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for smooth loading
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Add WhatsApp floating button
    const whatsappFloat = document.createElement('a');
    whatsappFloat.href = 'https://wa.me/256742455040?text=Hello%20Green%20Fresh%20Harvests!%20I%20need%20some%20fresh%20fruits.';
    whatsappFloat.target = '_blank';
    whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #25d366;
        color: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-decoration: none;
        box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
        transition: all 0.3s ease;
        z-index: 998;
        animation: pulse 2s infinite;
    `;
    
    document.body.appendChild(whatsappFloat);
    
    // Add pulse animation for WhatsApp button
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% {
                box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
            }
            50% {
                box-shadow: 0 5px 25px rgba(37, 211, 102, 0.6);
                transform: scale(1.05);
            }
            100% {
                box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
            }
        }
    `;
    document.head.appendChild(pulseStyle);
    
    whatsappFloat.addEventListener('mouseenter', function() {
        this.style.background = '#128c7e';
        this.style.transform = 'scale(1.1)';
    });
    
    whatsappFloat.addEventListener('mouseleave', function() {
        this.style.background = '#25d366';
        this.style.transform = 'scale(1)';
    });
});
