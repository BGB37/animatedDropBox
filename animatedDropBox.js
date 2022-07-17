// Initializing variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {
modalContainer.style.display = 'block'; // changing display: none; to display:block; when clicked.
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

// When close button on screen, if you click anywhere on the window, close button will be display: none;
window.addEventListener('click', function(e) {
    if(e.target === modalContainer) { // First time seeing e.target
        modalContainer.style.display = 'none';
    }
})
