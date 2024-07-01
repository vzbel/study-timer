class Timer {
  // HTML properties
  #buttonsContainer = document.querySelector(".timer-buttons-container"); // The timer's container from the HTML file

  // Timer properties
  #minutes; // Current minutes
  #seconds; // Current seconds

  // Create new timer with some initial minutes and seconds.
  constructor(initialMinutes, initialSeconds) {
    // Initialize minutes and seconds
    this.#minutes = initialMinutes;
    this.#seconds = initialSeconds;
    // Button press event listener
    this.initializeEventListeners();
  }

  // Start event listeners for start, stop, and reset button presses
  initializeEventListeners() {
    this.#buttonsContainer.addEventListener("click", (event) => {
      // Pass into handleButtonPress function with data action
      this.handleButtonPress(event.target.dataset.action);
    });
  }

  // Process button press based on its data action
  handleButtonPress(dataAction) {
    switch (dataAction) {
      case "start":
        console.log("start");
        break;
      case "stop":
        console.log("stop");
        break;
      case "reset":
        console.log("reset");
        break;
    }
  }
}

// Create main 30 minute timer
const timer = new Timer(30, 0);
