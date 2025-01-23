document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get the target section
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Calculate the offset (navbar height)
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const offsetPosition = targetSection.offsetTop - navbarHeight;
    
    // Scroll smoothly to the target section
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // Highlight the active link
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    });
    });