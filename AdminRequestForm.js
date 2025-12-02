document.addEventListener('DOMContentLoaded', () => {
    const trackNowBtn = document.getElementById('trackNowBtn');
    if (trackNowBtn) {
        trackNowBtn.addEventListener('click', () => {
            window.location.href = "homepage.html#tracking-form";
        });
    }

    document.querySelectorAll('.footer-column-nav a, .footer-policy-links-bottom a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            if (targetHref === '#') {
                e.preventDefault();
                console.log("Placeholder link clicked. No action taken.");
            }
        });
    });

    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent;
            const row = this.closest('tr');
            const statusCell = row.querySelector('.status-tag');
            
            console.log(`Action: ${action} on Request ID: ${row.children[0].textContent}`);

            if (action === 'Accept') {
                statusCell.className = 'status-tag status-accepted';
                statusCell.textContent = 'Accepted';
            } else if (action === 'Reject') {
                statusCell.className = 'status-tag status-rejected';
                statusCell.textContent = 'Rejected';
            } else if (action === 'Delete') {
                console.log('Delete action simulated');
            }
        });
    });
});