class Timer {
  // HTML properties
  #buttonsContainer = document.querySelector(".timer-buttons-container"); // The timer's container from the HTML file
  #display = document.querySelector(".timer-output"); // The timer output HTML element

  // Timer properties
  #initialMinutes; // Initial minutes
  #initialSeconds; // Initial seconds
  #minutes; // Current minutes
  #seconds; // Current seconds
  #interval; // Current timer interval
  #timerIsActive; // Boolean that tells if the timer is currently running

  // Create new timer with some initial minutes and seconds.
  constructor(initialMinutes, initialSeconds) {
    // Initialize minutes and seconds
    this.#minutes = initialMinutes;
    this.#seconds = initialSeconds;
    // Keep track of the initial minutes and seconds separately
    this.#initialMinutes = initialMinutes;
    this.#initialSeconds = initialSeconds;
    // Update the display according to the provided minutes and seconds
    this.updateDisplay();
    // Timer is not active
    this.#timerIsActive = false;
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
        this.stop(); // Stop timer
        break;
      case "reset":
        this.reset(); // Reset timer
        break;
    }
  }

  // Start timer
  start() {
    // If the timer is not active
    if (this.#timerIsActive === false) {
      // Set timer to active mode
      this.#timerIsActive = true;

      // Start timer interval, which decreases the time every second.
      this.#interval = setInterval(() => {
        // If the timer is done
        if (this.#minutes === 0 && this.#seconds === 0) {
          clearInterval(this.#interval); // Clear current timer interval
          this.#timerIsActive = false; // Set timer to inactive
        } else if (this.#seconds === 0) {
          // If seconds is zero ^
          this.#seconds--; // Decrement seconds
          this.#seconds = 59; // Start seconds at 59
          this.#minutes--; // Decrement minutes
        } else {
          // ^ Else just decrement seconds.
          this.#seconds--;
        }
        // Update the display with the new time.
        this.updateDisplay();
      }, 1000);
    }
  }

  // Stop timer
  stop() {
    clearInterval(this.#interval); // Clear timer interval
    this.#timerIsActive = false; // Set timer to inactive
  }

  // Reset timer
  reset() {
    // First stop the timer
    this.stop();
    // Then reset minutes and seconds
    this.#minutes = this.#initialMinutes;
    this.#seconds = this.#initialSeconds;
    // Update display to default
    this.updateDisplay();
  }

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
const timer = new Timer(30, 0);
