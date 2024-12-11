<script>
document.addEventListener("DOMContentLoaded", function () {
  // Map the wrappers to their corresponding headings
  const animations = [
    { wrapper: '.inner-vid-wrapper', heading: '.Heading11' },
    { wrapper: '.inner-vid-wrapper2', heading: '.Heading22' },
    { wrapper: '.inner-vid-wrapper3', heading: '.Heading33' },
  ];

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const heading = document.querySelector(entry.target.dataset.heading);

        if (entry.isIntersecting) {
          // Add the 'visible' class to animate the heading
          heading.classList.add('visible');
          heading.classList.remove('hidden');
        } else {
          // Add the 'hidden' class to reverse the animation
          heading.classList.add('hidden');
          heading.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when 50% of the wrapper is visible
    }
  );

  // Observe each wrapper and map it to its heading
  animations.forEach(({ wrapper, heading }) => {
    const wrapperElement = document.querySelector(wrapper);
    if (wrapperElement) {
      wrapperElement.dataset.heading = heading; // Attach the heading selector to the wrapper
      observer.observe(wrapperElement); // Start observing the wrapper
    }
  });
});
</script>
