// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.classList.add(savedTheme);

themeToggle.addEventListener('click', () => {
html.classList.toggle('dark');
const isDark = html.classList.contains('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuButton.addEventListener('click', () => {
mobileMenu.classList.toggle('open');

// Toggle 
if (mobileMenu.classList.contains('open')) {
menuIcon.classList.remove('fa-bars');
menuIcon.classList.add('fa-times');
} else {
menuIcon.classList.remove('fa-times');
menuIcon.classList.add('fa-bars');
}
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.remove('open');
menuIcon.classList.remove('fa-times');
menuIcon.classList.add('fa-bars');
});
});


// Highlight current page in navigation
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('text-primary-500', 'dark:text-primary-400');
      // Add underline for desktop
      const underline = link.querySelector('span');
      if (underline) {
        underline.classList.add('w-full');
      }
    }
  });



//MENU AND THEME TOOGLE ENDS HERE!!!
//MENU AND THEME TOOGLE ENDS HERE!!!


//TYPING EFFECT
//TYPING EFFECT
const text = "LEVVIE-LIVVIE";
const typingElement = document.getElementById('typing-text');
let i = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
  const currentText = typingElement.innerHTML;
  
  if (!isDeleting && i < text.length) {
    // Typing phase
    typingElement.innerHTML = text.substring(0, i + 1);
    i++;
    typingSpeed = 150;
  } else if (isDeleting && i > 0) {
    // Deleting phase
    typingElement.innerHTML = text.substring(0, i - 1);
    i--;
    typingSpeed = 75; // Faster when deleting
  }
  
  // Change direction
  if (!isDeleting && i === text.length) {
    isDeleting = true;
    typingSpeed = 1000; // Pause at end
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    typingSpeed = 500; // Pause at start
  }
  
  setTimeout(typeWriter, typingSpeed);
}

// Start the typing effect immediately
typeWriter();



// Handling the form using emailjs

// Initialize EmailJS
(function() {
  emailjs.init('gGGa9rCkIEx94nKT6'); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  // Change button text to show loading state
  submitBtn.innerHTML = '<span class="animate-pulse">Sending...</span>';
  submitBtn.disabled = true;

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

// Send email using EmailJS
emailjs.send('service_0v2o1b7', 'template_tbl72fg', formData)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    
    // Show success message
    const successMsg = document.getElementById('success-message');
    successMsg.classList.remove('hidden');
    successMsg.classList.add('animate-fade-in');
    
    // Hide success message after 3 seconds
    setTimeout(function() {
      successMsg.classList.add('animate-fade-out');
      setTimeout(() => successMsg.classList.add('hidden'), 500);
    }, 3000);
    
    // Reset form
    document.getElementById('contactForm').reset();
  })
  .catch(function(error) {
    console.log('FAILED...', error);
    alert('Oops! Something went wrong. Please try again later.');
  })
  .finally(function() {
    // Reset button state
    submitBtn.innerHTML = originalBtnText;
    submitBtn.disabled = false;
  });
});



  // View More functionality for all blog cards
  document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const container = button.closest('.blog-card');
      container.classList.toggle('show-full');
      button.textContent = container.classList.contains('show-full') ? 'View Less' : 'View More';
    });
  });
