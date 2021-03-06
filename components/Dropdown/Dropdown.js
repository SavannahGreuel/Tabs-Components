class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = this.dropdown;
    
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');

  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

TweenMax.to(".header", 2, {x:450, ease:Bounce.easeOut});
TweenMax.to(".dropdown-button", 2, {x:75, ease:Bounce.easeOut});
TweenMax.to(".dropdown-content", 2, {x:75, ease:Bounce.easeOut});