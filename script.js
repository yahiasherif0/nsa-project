document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('info-button');
    const tooltip = document.getElementById('tooltip');

    infoButton.addEventListener('mouseover', function() {
        tooltip.style.display = 'block';
    });

    infoButton.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
});
