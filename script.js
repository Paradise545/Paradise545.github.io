document.addEventListener("DOMContentLoaded", function () {
    const mazeContainer = document.getElementById("maze");
    const mazeSize = 12;
    const cells = [];
    let currentPlayerPosition = 0;

    // Generate the maze grid
    for (let i = 0; i < mazeSize; i++) {
        for (let j = 0; j < mazeSize; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            mazeContainer.appendChild(cell);
            cells.push(cell);

            // Add walls at random positions
            if (Math.random() < 0.3) {
                cell.classList.add("wall");
            }
        }
    }

    // Set the start and end points
    const startCell = cells[0];
    const endCell = cells[cells.length - 1];

    startCell.classList.add("start");
    endCell.classList.add("end");

    // Set the initial player position
    cells[currentPlayerPosition].classList.add("player");

    // Event listener for maze completion
    endCell.addEventListener("mouseover", function () {
        alert("Congratulations! You made it out of the maze!");
    });

    // Event listener for keyboard controls
    document.addEventListener("keydown", function (event) {
        movePlayer(event.key);
    });

    // Function to move the player
    function movePlayer(direction) {
        const currentPosition = currentPlayerPosition;
        let newPosition;

        switch (direction) {
            case "ArrowUp":
                newPosition = currentPosition - mazeSize;
                break;
            case "ArrowDown":
                newPosition = currentPosition + mazeSize;
                break;
            case "ArrowLeft":
                newPosition = currentPosition - 1;
                break;
            case "ArrowRight":
                newPosition = currentPosition + 1;
                break;
            default:
                return; // Ignore other keys
        }

        // Check if the new position is within the maze boundaries and not a wall
        if (
            newPosition >= 0 &&
            newPosition < cells.length &&
            !cells[newPosition].classList.contains("wall")
        ) {
            // Move the player
            cells[currentPosition].classList.remove("player");
            cells[newPosition].classList.add("player");
            currentPlayerPosition = newPosition;

            // Check for reaching the end
            if (newPosition === cells.length - 1) {
                alert("Congratulations! You made it out of the maze!");
            }
        }
    }
});
