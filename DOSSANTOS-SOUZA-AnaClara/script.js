const elementACS = document.getElementById('ACS');

elementACS.addEventListener('mouseenter', function() {
    elementACS.style.color='#0C1851' 
    elementACS.style.transition = 'color 0.5s'; 
    elementACS.style.textShadow = '#0C1851' ; 
});


elementACS.addEventListener('mouseleave', function() {
    elementACS.style.color = ''; 
    elementACS.style.transition = ''; 
    elementACS.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)'; 
});




