<script>
document.addEventListener("DOMContentLoaded", function () {
  // Define the mapping between wrappers and headings
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
          // Add visible class to animate in
          heading.classList.add('visible');
          heading.classList.remove('hidden');
        } else {
          // Add hidden class to animate out
          heading.classList.add('hidden');
          heading.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when 50% of the element is visible
    }
  );

  // Attach dataset references and observe wrappers
  animations.forEach(({ wrapper, heading }) => {
    const wrapperElement = document.querySelector(wrapper);
    if (wrapperElement) {
      wrapperElement.dataset.heading = heading;
      observer.observe(wrapperElement);
    }
  });
});
</script>
