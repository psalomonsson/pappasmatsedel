document.addEventListener('DOMContentLoaded', function() {
  // Toggle Next Week Section
  const toggleButton = document.getElementById('toggleNextWeek');
  const nextWeekSection = document.getElementById('nextWeekSection');
  const showIcon = document.getElementById('showIcon');
  const hideIcon = document.getElementById('hideIcon');
  const toggleText = document.getElementById('toggleText');
  
  if (toggleButton && nextWeekSection) {
    // Initially hide the next week section
    nextWeekSection.style.display = 'none';
    
    toggleButton.addEventListener('click', function() {
      const isHidden = nextWeekSection.style.display === 'none';
      
      // Toggle visibility
      nextWeekSection.style.display = isHidden ? 'block' : 'none';
      
      // Toggle icons
      showIcon.classList.toggle('hidden');
      hideIcon.classList.toggle('hidden');
      
      // Update text
      toggleText.textContent = isHidden ? 'Hide Next Week\'s Menu' : 'Show Next Week\'s Menu';
    });
  }
  
  console.log('Weekly Grub Guide loaded successfully');
});