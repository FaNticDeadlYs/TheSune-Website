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
