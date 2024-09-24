document.addEventListener('DOMContentLoaded', function() {
    // Set title
    document.getElementById('title').textContent = athonData.title;

    // Set description
    const descriptionEl = document.getElementById('description');
    athonData.description.forEach(desc => {
        const p = document.createElement('p');
        p.textContent = desc;
        descriptionEl.appendChild(p);
    });

    // Set events and winners
    const eventsEl = document.getElementById('events');
    athonData.events.forEach(yearEvent => {
        const yearSection = document.createElement('section');
        yearSection.className = 'year-section';
        
        const yearHeading = document.createElement('h2');
        yearHeading.className = 'year-heading';
        yearHeading.textContent = yearEvent.year;
        yearSection.appendChild(yearHeading);

        if (yearEvent.yearDescription) {
            const yearDesc = document.createElement('p');
            yearDesc.className = 'year-description';
            yearDesc.textContent = yearEvent.yearDescription;
            yearSection.appendChild(yearDesc);
        }

        const eventsContainer = document.createElement('div');
        eventsContainer.className = 'events-container';

        yearEvent.competitions.forEach(competition => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            
            const eventHeading = document.createElement('div');
            eventHeading.className = 'event-heading';
            eventHeading.textContent = competition.name;
            eventDiv.appendChild(eventHeading);

            const eventData = document.createElement('div');
            eventData.className = 'event-data';
            competition.winners.forEach((winner, index) => {
                const resultData = document.createElement('div');
                resultData.className = 'result-data';
                resultData.innerHTML = `${index + 1}. ${winner.name}<span class="school">(${winner.school})</span>`;
                eventData.appendChild(resultData);
            });
            eventDiv.appendChild(eventData);

            eventsContainer.appendChild(eventDiv);
        });

        yearSection.appendChild(eventsContainer);
        eventsEl.appendChild(yearSection);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.mySlides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots-container');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function updateSlidePosition() {
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateSlidePosition();
                stopSlideshow();
                startSlideshow();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function startSlideshow() {
        stopSlideshow(); // Clear any existing interval
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow(); // Restart the timer after manual navigation
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow(); // Restart the timer after manual navigation
    });

    slidesWrapper.addEventListener('mouseenter', stopSlideshow);
    slidesWrapper.addEventListener('mouseleave', startSlideshow);

    createDots();
    updateSlidePosition();
    startSlideshow(); // Start the auto-advance when the page loads
});

const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});