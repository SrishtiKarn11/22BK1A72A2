class name {
  constructor(parameters) {
    urltesting = document.getElementById('urlInput');
    urltesting.addEventListener('input', function() {
      const input = this.value;
      if (input.includes('@')) {
        // Assuming the input is an email, you can handle it accordingly
        console.log('Email entered:', input);
      } else {
        // Handle other types of input, e.g., URLs
        console.log('URL entered:', input);
      }
    });

    this.render();
    
    
  }
}