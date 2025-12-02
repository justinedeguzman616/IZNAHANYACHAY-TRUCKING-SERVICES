document.addEventListener('DOMContentLoaded', () => {
        
    document.getElementById('footerTrackBtn').addEventListener('click', () => {
        alert('Redirecting to the tracking function on the main page.');
        window.location.href = 'homepage.html#home'; 
    });

    function alert(message) {
        const alertBox = document.createElement('div');
        alertBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #004d40;
            color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            text-align: center;
            font-family: 'Inter', sans-serif;
            max-width: 90%;
            animation: fadeIn 0.3s;
        `;

        alertBox.innerHTML = `<p>${message}</p><button onclick="this.parentNode.remove()" style="margin-top: 15px; padding: 5px 15px; border: none; border-radius: 5px; background-color: white; color: #004d40; cursor: pointer; font-weight: bold;">Close</button>`;
        document.body.appendChild(alertBox);

        const style = document.createElement('style');
        style.innerHTML = `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`;
        document.head.appendChild(style);
    }

    const loginForm = document.getElementById('adminLoginForm');
    
    loginForm.addEventListener('submit', (event) => {
    
        event.preventDefault(); 
        
        window.location.href = 'TrackingList.html';
    });

});