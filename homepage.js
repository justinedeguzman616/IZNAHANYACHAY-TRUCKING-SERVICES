document.addEventListener('DOMContentLoaded', () => {
    

    const adminLoginIcon = document.getElementById('adminLoginIcon');
    if (adminLoginIcon) {
        adminLoginIcon.addEventListener('click', function() {
            window.location.href = 'AdminLogin.html';
        });
    }

    
    const trackingForm = document.getElementById('trackingForm');
    if (trackingForm) {
        trackingForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const trackingInput = document.getElementById('trackingInput');
            const statusMessage = document.getElementById('statusMessage');
            const trackingNumber = trackingInput.value.trim();

            
            statusMessage.className = "status-message";
            statusMessage.classList.remove('hidden', 'error-message', 'loading-message', 'success-message');

            if (trackingNumber === "") {
                statusMessage.textContent = "Please enter a tracking number.";
                statusMessage.classList.add('error-message');
            } else {
                statusMessage.textContent = `Searching for shipment: ${trackingNumber}... (This is a demo, actual API call is needed)`;
                statusMessage.classList.add('loading-message');

                
                setTimeout(() => {
                    statusMessage.classList.remove('loading-message');

                    
                    if (trackingNumber.includes('123')) {
                         statusMessage.textContent = `Tracking number ${trackingNumber} found! Status: Out for Delivery.`;
                         statusMessage.classList.add('success-message');
                    } else {
                        statusMessage.textContent = `Tracking number ${trackingNumber} not found. Please check the number and try again.`;
                         statusMessage.classList.add('error-message');
                    }
                }, 1500); 
            }
        });
    }

    
    document.querySelectorAll('.track-now-button, .track-shipments-button').forEach(button => {
        button.addEventListener('click', () => {
            
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            
                    
            setTimeout(() => {
                const trackingInput = document.getElementById('trackingInput');
                if (trackingInput) {
                    trackingInput.focus();
                }
            }, 600); 
        });
    });

});