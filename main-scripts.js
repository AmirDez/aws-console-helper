function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', { hour12: false });
}

function myLog(log) {
  console.log(`${getCurrentTime()} ${log}`);
}

function rotateIcon(icon) {
  const degrees = -360;
  if (icon) {
    // Apply rotation animation
    icon.style.transition = 'transform 0.5s ease';
    icon.style.transform = `rotate(${degrees}deg)`;

    // Reset rotation after animation completes
    icon.addEventListener('transitionend', () => {
      icon.style.transition = 'none'; // Remove transition to avoid unwanted transition on reset
      icon.style.transform = 'rotate(0deg)';
      icon.style.transition = ''; // Reapply transition for subsequent animations
      // setTimeout(() => {
      // });
    }, { once: true }); // Event listener will be removed after it triggers once
  }
}

function findAndClickButton(label) {
  // Find the button element with the specified label
  const button = document.querySelector(`button[aria-label="${label}"]`);
  
  // Check if the button exists
  if (!button) {
    myLog(`Button with label "${label}" not found!`);
    return;
  }

  // Function to simulate click event
  const clickButton = () => {
    myLog(`${label} Done`);
    // Simulate click event
    button.click();

    // Rotate the icon counterclockwise
    const icon = button.querySelector('span');
    rotateIcon(icon);
  };

  // Set interval to click the button every 3 seconds
  setInterval(clickButton, 3000);

  // Stop clicking on button removal or page unload
  // button.addEventListener('DOMNodeRemoved', () => clearInterval(intervalId));
  // window.addEventListener('unload', () => clearInterval(intervalId));
}

// Initialize button clicks
findAndClickButton("Refresh");
findAndClickButton("Refresh services");
findAndClickButton("Refresh Databases");
findAndClickButton("Refresh Redis caches");
findAndClickButton("Refresh logs");
