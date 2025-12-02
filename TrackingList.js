document.getElementById('trackNowBtn').addEventListener('click', () => {
    window.location.href = "homepage.html#tracking-form";
});

document.querySelectorAll('.footer-column-nav a, .footer-policy-links-bottom a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetHref = this.getAttribute('href');
        if (targetHref === '#' || targetHref === '') {
             e.preventDefault();
             console.log("Placeholder link clicked. No action taken.");
        }
    });
});