// Example final combination
const finalCombination = ['4', '3', '7', '0', '3', '9'];

// Get all number elements
const numbers = document.querySelectorAll('.number-container-child');

// Function to animate the numbers to the final combination
function animateNumbersToFinal(callback) {
    const animationDuration = 1000; // 1 second

    numbers.forEach((number, index) => {
        setTimeout(() => {
            // Determine if the current index is even or odd
            if (index % 2 === 0) {
                // Even index: Move up, fade out, and come from below
                number.style.transform = 'translateY(0)'; // Reset position
                number.style.opacity = '1'; // Ensure it is visible

                // Fade out first
                number.classList.add('fade-out');

                // Change the number after fading out
                setTimeout(() => {
                    number.textContent = finalCombination[index];
                    number.classList.remove('fade-out');
                    number.style.transform = 'translateY(200px)'; // Move down
                    number.style.opacity = '0'; // Start invisible

                    // Animate the new number from below
                    setTimeout(() => {
                        number.style.transform = 'translateY(0)'; // Move to original position
                        number.style.opacity = '1'; // Make it visible again
                    }, 0); // Start the upward animation immediately
                }, animationDuration); // Delay before changing the number
            } else {
                // Odd index: Move down, fade out, and come from above
                number.style.transform = 'translateY(0)'; // Reset position
                number.style.opacity = '1'; // Ensure it is visible

                // Fade out first
                number.classList.add('fade-out');

                // Change the number after fading out
                setTimeout(() => {
                    number.textContent = finalCombination[index];
                    number.classList.remove('fade-out');
                    number.style.transform = 'translateY(-200px)'; // Move up
                    number.style.opacity = '0'; // Start invisible

                    // Animate the new number from above
                    setTimeout(() => {
                        number.style.transform = 'translateY(0)'; // Move to original position
                        number.style.opacity = '1'; // Make it visible again
                    }, 0); // Start the downward animation immediately
                }, animationDuration); // Delay before changing the number
            }
        }, index * (animationDuration * 2)); // Adjust the delay for each number
    });

    // Call the callback function after the last animation
    setTimeout(callback, numbers.length * (animationDuration * 2));
}

// Iframe code
var url = "https://aeth3r.es/games";
if (url) {
    var win;

    // Function to open the iframe
    function openIframe() {
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }
    }

    // Konami Code detection
    let keyCount = 0;
    let expectedSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b', 'Enter'];
    let keySequence = [];

    // Event listener for the key combination
    document.addEventListener('keydown', function (event ) {
        keySequence.push(event.key);
        keyCount++;

        // Check if the current key matches the expected key at the current position
        if (keyCount <= expectedSequence.length && event.key === expectedSequence[keyCount - 1]) {
            // If it matches, continue checking the sequence
            if (keyCount === expectedSequence.length) {
                // If we reached the end of the sequence, open the iframe
                animateNumbersToFinal(openIframe); // Trigger the animation and then open the iframe
                keyCount = 0; // Reset for a new sequence
                keySequence = []; // Reset the key sequence
            }
        } else {
            // If the key doesn't match the expected sequence, reset 
            keyCount = 0;
            keySequence = [];
        }
    });
}
