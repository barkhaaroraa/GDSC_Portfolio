document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.navbar_about a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = link.getAttribute('href');
            navigateTo(page);
        });
    });

    function navigateTo(page) {
        // Redirect to the specified page
        window.location.href = page;
    }

    // Set initial state for card flip (back side visible)
    document.querySelectorAll('.card').forEach(card => {
        card.style.transform = 'rotateY(180deg)';
    });

    // Add event listeners for card flip effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', function () {
            card.style.transform = 'rotateY(0deg)';
        });

        card.addEventListener('mouseout', function () {
            card.style.transform = 'rotateY(180deg)';
        });

        
    });
});
