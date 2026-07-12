const masterHolder = document.getElementById('master-tooltip-container');
const regions = document.querySelectorAll('.map-region');

regions.forEach(region => {
    region.addEventListener('mouseenter', (e) => {
        // 1. Get the target ID linked to this path (e.g., 'info-up')
        const targetId = region.getAttribute('data-target');
        
        // 2. Find that exact HTML box inside your container and make it active
        document.getElementById(targetId).classList.add('active');
        
        // 3. Show the master floating holder
        masterHolder.style.display = 'block';
        masterHolder.style.opacity = '1';
    });

    region.addEventListener('mousemove', (e) => {
        // Track mouse movement smoothly
        masterHolder.style.left = (e.pageX + 15) + 'px';
        masterHolder.style.top = (e.pageY + 15) + 'px';
    });

    region.addEventListener('mouseleave', () => {
        // Hide the master holder and turn off all active cards
        masterHolder.style.display = 'none';
        masterHolder.style.opacity = '0';
        document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
    });
});