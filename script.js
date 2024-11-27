document.addEventListener("DOMContentLoaded", function() {
    const finalCombination = ['4', '3', '7', '0', '3', '9']; // Final combination
    const numbers = document.querySelectorAll('.number-container-child');
    const menuContainer = document.getElementById('menu-container');
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66, 13]; // Up, Up, Down, Down, Left, Right, Left, Right, A, B, Enter
    let konamiIndex = 0;
    let win;

    // Function to open the iframe
    function openIframe(url) {
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
        // Close the original tab
        window.close();
    }

    // Function to animate numbers to the final combination
    function animateNumbersToFinal() {
        const animationDuration = 500; // 1 second

        numbers.forEach((number, index) => {
            setTimeout(() => {
                // Fade out the current number
                number.classList.add('fade-out');

                // Change the number after fading out
                setTimeout(() => {
                    number.textContent = finalCombination[index]; // Set to final number
                    number.classList.remove('fade-out');

                    // Fade in the new number
                    number.style.transform = 'translateY(0)';
                    number.style.opacity = '1';
                }, animationDuration); // Change number after fade out
            }, index * animationDuration); // Delay for each number
        });

        // Show menu after all numbers have animated
        setTimeout(() => {
            menuContainer.classList.add('visible');
            menuContainer.style.opacity = '1'; // Ensure opacity is set to 1
            menuContainer.style.visibility = 'visible'; // Ensure it is visible
        }, numbers.length * animationDuration); // Show menu after last number animation
    }

    // Listen for key presses to detect the Konami code
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                animateNumbersToFinal(); // Start the animation
                konamiIndex = 0; // Reset the index
            }
        } else {
            konamiIndex = 0; // Reset if the wrong key is pressed
        }
    });

    // Click event for images
    document.getElementById('proxy-image').addEventListener('click', function() {
        openIframe('https://3a0c-46-222-42-115.ngrok-free.app/'); // Replace with actual URL
    });

    document.getElementById('games-image').addEventListener('click', function() {
        openIframe('https://games.aeth3r.es'); // Replace with actual URL
    });

    document.getElementById('ai-image').addEventListener('click', function() {
        openIframe('https://4ef6-46-222-42-115.ngrok-free.app'); // Replace with actual URL
    });
});
