//SNIMANI TOHO JESTLI TO DANE VIDEO JE VE VIEWPORTU NEBO NE A PODLE TOHO SE ZAPINA CSS S KULICKOU A TEXTEM
document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.querySelector(".inner-vid-wrapper");
  const circle = document.querySelector(".white-circle-small-production");
  const text = document.querySelector(".production-smallest-onest-text-12px");

  // Create an Intersection Observer to detect when the video is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is visible: show circle and fade in text
        circle.style.display = "block"; // Make the circle visible
        setTimeout(() => {
          circle.style.opacity = "1"; // Fade in the circle
        }, 0);
        text.style.opacity = "1"; // Fade text to full opacity
      } else {
        // Element is not visible: hide circle and fade out text
        circle.style.opacity = "0"; // Fade out the circle
        setTimeout(() => {
          circle.style.display = "none"; // Hide the circle after fading out
        }, 500); // Match the fade-out duration
        text.style.opacity = "0.7"; // Fade text back to 70% opacity
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold for when the element is considered "visible"

  observer.observe(videoElement); // Observe the visibility of the inner-vid-wrapper
});
