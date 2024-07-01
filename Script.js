class Timer {
  // HTML properties
  #buttonsContainer = document.querySelector(".timer-buttons-container"); // The timer's container from the HTML file
  #display = document.querySelector(".timer-output"); // The timer output HTML element

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
        this.start(); // Start timer
        break;
      case "stop":
        console.log("stop");
        break;
      case "reset":
        console.log("reset");
        break;
    }
  }

  // Start timer on button press
  //   start() {
  //     // Start timer interval, which decreases the time every second.
  //     let interval = setInterval(() => {
  //       this.#seconds--;
  //       this.updateDisplay();
  //     }, 1000);
  //   }

  // Update timer display
  updateDisplay() {
    // If the minutes and seconds (or either one) are less than ten,
    // Display an extra zero to the left of the corresponding value.
    // Otherwise, if none are less than ten, display them as is.
    if (this.#minutes < 10 && this.#seconds < 10) {
      this.#display.textContent = `0${this.#minutes}:0${this.#seconds}`;
    } else if (this.#minutes < 10) {
      this.#display.textContent = `0${this.#minutes}:${this.#seconds}`;
    } else if (this.#seconds < 10) {
      this.#display.textContent = `${this.#minutes}:0${this.#seconds}`;
    } else {
      this.#display.textContent = `${this.#minutes}:${this.#seconds}`;
    }
  }
}

// Create main 30 minute timer
const timer = new Timer(18, 58);
