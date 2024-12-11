document.addEventListener("DOMContentLoaded", function () {
  // Map inner-vid-wrapper classes to their corresponding headings
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
          // Add 'visible' class when entering viewport
          heading.classList.add('visible');
          heading.classList.remove('hidden');
        } else {
          // Add 'hidden' class when leaving viewport
          heading.classList.add('hidden');
          heading.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  // Observe each wrapper
  animations.forEach(({ wrapper, heading }) => {
    const element = document.querySelector(wrapper);
    element.dataset.heading = heading; // Attach heading selector to the wrapper
    observer.observe(element);
  });
});
