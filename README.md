# Rock Paper Scissors

A classic Rock Paper Scissors game developed as part of The Odin Project's foundation course. It features a user-versus-computer gameplay where the first to reach a score of 5 wins.

## Features

*   **User vs. Computer Gameplay**: Play against an AI opponent.
*   **Interactive Choice Selection**: Users can pick Rock, Paper, or Scissors by clicking on respective icons.
*   **Score Tracking**: Keeps track of the current scores for both the user and the computer.
*   **First to Five Wins**: The game concludes when either the user or the computer reaches a score of 5 points.
*   **Clear Game Rules**: Implements standard Rock Paper Scissors rules (Paper beats rock, rock beats scissors, scissors beats paper).
*   **Web-Based Interface**: Accessible and playable directly in a web browser.

## Tech Stack

*   **HTML5**: For structuring the game's user interface.
*   **CSS3**: For styling the game elements and layout.
*   **JavaScript**: For implementing the core game logic, user interaction, and score management.

## Prerequisites

To run this project locally, you will need:

*   A modern web browser (e.g., Chrome, Firefox, Edge, Safari).
*   Git (for cloning the repository).

## Installation & Quick Start

Follow these steps to get a local copy of the project up and running:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/manueldezman/Rock-Paper-Scissors.git
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd Rock-Paper-Scissors
    ```

3.  **Open the game in your web browser:**
    Simply open the `index.html` file in your browser. You can usually do this by double-clicking the file, or by using a command like `open index.html` (macOS/Linux) or `start index.html` (Windows) in your terminal.
    
    Alternatively, if you have a live server extension in your IDE (like VS Code's Live Server), you can use that to serve the `index.html` file.

## Repository Structure

```
.
├── README.md
├── index.html
├── index.js
└── styles.css
```

## Architecture Overview

This project follows a standard client-side web application architecture:

*   `index.html`: Provides the structural markup for the game interface, including buttons, score displays, and game messages.
*   `styles.css`: Defines the visual presentation and styling of all game elements, ensuring an appealing and responsive layout.
*   `index.js`: Contains the core game logic, handling user input, the computer's random choice generation, determining round winners, updating scores, and managing the overall game flow until a final winner is declared.

## Example Usage

Once the game is launched (by opening `index.html` or visiting the deployed link), the user can start playing by clicking on one of the three icons under the "pick your choice" heading, representing Rock, Paper, or Scissors. The game proceeds round by round, updating scores, until either the user or the computer achieves a score of 5, at which point a winner is declared.

## Testing Instructions

To test the game:

1.  Open `index.html` in your preferred web browser.
2.  Click the "Play Game" button to begin.
3.  Interact with the game by clicking on the Rock, Paper, or Scissors icons to make your choice for each round.
4.  Verify that the game correctly tracks scores, determines round winners, and declares an overall winner when a score of 5 is reached by either player.
5.  Check that the game resets correctly after a winner is declared, allowing for a new game to start.

## License

N/A
