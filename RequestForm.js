document.querySelectorAll('.input-with-button button').forEach(button => {
    button.addEventListener('click', function() {
        const inputElement = this.previousElementSibling;
        if (inputElement) {
            if (inputElement.tagName === 'SELECT') {
                inputElement.selectedIndex = 0;
            } else if (inputElement.tagName === 'TEXTAREA') {
                inputElement.value = '';
            } else {
                inputElement.value = '';
            }
        }
    });
});

document.getElementById('trackShipmentsBtn').addEventListener('click', () => {
    window.location.href = "homepage.html#tracking-form"; 
});

document.getElementById('trackNowBtn').addEventListener('click', () => {
    window.location.href = "homepage.html#tracking-form";
});

const requestForm = document.getElementById('requestForm');
const successPopup = document.getElementById('successPopup');
const continueBtn = document.getElementById('popupContinueBtn');

requestForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    successPopup.style.display = 'flex';
});

continueBtn.addEventListener('click', function() {
    window.location.reload(); 
});