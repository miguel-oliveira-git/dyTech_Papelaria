let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        function updateCarousel() {
            const container = document.querySelector('.carousel-container');
            container.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        setInterval(nextSlide, 5000);