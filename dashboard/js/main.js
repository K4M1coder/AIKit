document.addEventListener('DOMContentLoaded', function() {
    // Check service availability
    const serviceLinks = document.querySelectorAll('a[target="_blank"]');
    
    serviceLinks.forEach(link => {
        if (link.classList.contains('btn-primary')) {
            const serviceUrl = link.getAttribute('href');
            const cardFooter = link.closest('.card').querySelector('.card-footer');
            
            // Simple ping to check if service is available
            fetch(serviceUrl, { 
                mode: 'no-cors',
                cache: 'no-cache',
                method: 'HEAD',
                timeout: 2000
            })
            .then(() => {
                cardFooter.innerHTML += ' <span class="badge bg-success">Online</span>';
            })
            .catch(() => {
                cardFooter.innerHTML += ' <span class="badge bg-danger">Offline</span>';
                link.classList.replace('btn-primary', 'btn-secondary');
                link.setAttribute('disabled', 'disabled');
            });
        }
    });
});
