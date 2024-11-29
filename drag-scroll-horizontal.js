//DRAG SCROLL U PRODUKCE
  document.addEventListener('DOMContentLoaded', function() {
    const ele = document.getElementById('clickanddrag');

    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let isDragging = false;

    ele.style.overflowX = 'hidden'; // Hide the horizontal scrollbar

    // Mouse and touch down handler
    const pointerDownHandler = function(e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';
      isDragging = true;

      const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
      const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: clientX,
        y: clientY,
      };

      document.addEventListener('mousemove', pointerMoveHandler);
      document.addEventListener('mouseup', pointerUpHandler);
      document.addEventListener('touchmove', pointerMoveHandler);
      document.addEventListener('touchend', pointerUpHandler);
    };

    // Mouse and touch move handler
    const pointerMoveHandler = function(e) {
      if (!isDragging) return;

      const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const dx = clientX - pos.x;

      ele.scrollLeft = pos.left - dx;
    };

    // Mouse and touch up handler
    const pointerUpHandler = function() {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');
      isDragging = false;

      // Snapping logic
      const sectionWidth = window.innerWidth;
      const scrollLeft = ele.scrollLeft;

      // Adjust snapping threshold to snap earlier
      const snapThreshold = 0.1; // Adjust this value (0.3 means 30% of the section width)
      const nearestSection = Math.round(scrollLeft / sectionWidth);

      // Check if the user has dragged beyond the snap threshold
      const offset = scrollLeft - nearestSection * sectionWidth;
      if (Math.abs(offset) > snapThreshold * sectionWidth) {
        // Snap to the next or previous section based on the drag direction
        const direction = offset > 0 ? 1 : -1;
        ele.scrollTo({
          left: (nearestSection + direction) * sectionWidth,
          behavior: 'smooth'
        });
      } else {
        // Snap to the nearest section
        ele.scrollTo({
          left: nearestSection * sectionWidth,
          behavior: 'smooth'
        });
      }

      document.removeEventListener('mousemove', pointerMoveHandler);
      document.removeEventListener('mouseup', pointerUpHandler);
      document.removeEventListener('touchmove', pointerMoveHandler);
      document.removeEventListener('touchend', pointerUpHandler);
    };

    // Event listeners for mouse and touch
    ele.addEventListener('mousedown', pointerDownHandler);
    ele.addEventListener('touchstart', pointerDownHandler);
  });
