document.getElementById('trackShipmentsBtn').addEventListener('click', () => {
    window.location.href = "homepage.html#tracking-form"; 
});

document.getElementById('trackNowBtn').addEventListener('click', () => {
    window.location.href = "homepage.html#tracking-form";
});

document.querySelectorAll('.main-nav a, .footer-column-nav a, .footer-policy-links-bottom a').forEach(link => {
    link.addEventListener('click', function(e) {
        
        const targetHref = this.getAttribute('href');
        
        if (targetHref === '#') {
             e.preventDefault();
             console.log("Placeholder link clicked. No action taken.");
        }
    });
});