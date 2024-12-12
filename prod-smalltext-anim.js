function animateWrapperText(wrapperClass, textClass, otherTextClasses) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const textElement = document.querySelector(textClass);

            if (entry.isIntersecting) {
                // Hide other texts first
                otherTextClasses.forEach((otherClass) => {
                    const otherElement = document.querySelector(otherClass);
                    if (otherElement && otherElement.classList.contains("active")) {
                        otherElement.classList.remove("active");
                        otherElement.classList.add("exiting");

                        // Ensure the exiting class is removed after animation
                        setTimeout(() => {
                            otherElement.classList.remove("exiting");
                        }, 800); // Matches transition duration
                    }
                });

                // Show the current text after others are hidden
                setTimeout(() => {
                    textElement.classList.add("active");
                }, 800); // Matches transition duration
            } else {
                textElement.classList.remove("active");
            }
        });
    });

    const wrapper = document.querySelector(wrapperClass);
    if (wrapper) {
        observer.observe(wrapper);
    }
}

// Initialize animations for each wrapper and text pair
animateWrapperText('.inner-vid-wrapper', '.wrapper-text1', ['.wrapper-text2', '.wrapper-text3']);
animateWrapperText('.inner-vid-wrapper2', '.wrapper-text2', ['.wrapper-text1', '.wrapper-text3']);
animateWrapperText('.inner-vid-wrapper3', '.wrapper-text3', ['.wrapper-text1', '.wrapper-text2']);


