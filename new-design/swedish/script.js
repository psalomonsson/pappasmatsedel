document.addEventListener('DOMContentLoaded', function() {
  // Add any JavaScript here
  console.log('Weekly Grub Guide loaded successfully');
  
  // Example: Animation for the buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseout', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});