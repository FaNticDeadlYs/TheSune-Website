document.addEventListener('DOMContentLoaded', function() {
    const achievementItemsEl = document.getElementById('achievement-items');

    achievementData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'achievement-item';

        const dateEl = document.createElement('div');
        dateEl.className = 'achievement-item-date';
        dateEl.textContent = item.date;
        itemDiv.appendChild(dateEl);

        const headingEl = document.createElement('div');
        headingEl.className = 'achievement-item-heading';
        headingEl.textContent = item.heading;
        itemDiv.appendChild(headingEl);

        const contentEl = document.createElement('div');
        contentEl.className = 'achievement-item-content';
        contentEl.innerHTML = `<p>${item.description}</p>`;
        itemDiv.appendChild(contentEl);

        if (item.names && item.names.length > 0) {
            const namesEl = document.createElement('div');
            namesEl.className = 'achievement-item-names';
            namesEl.innerHTML = '<strong>Achievers:</strong>';
            const namesList = document.createElement('ul');
            item.names.forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                namesList.appendChild(listItem);
            });
            namesEl.appendChild(namesList);
            itemDiv.appendChild(namesEl);
        }

        if (item.image) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'achievement-item-image-container';

            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'toggle-btn';
            toggleBtn.innerHTML = '<span class="arrow">&#9660;</span> <span class="toggle-btn-text">📷</span>';
            imageContainer.appendChild(toggleBtn);

            const imageEl = document.createElement('img');
            imageEl.src = item.image;
            imageEl.alt = item.heading;
            imageEl.className = 'achievement-item-image';
            imageContainer.appendChild(imageEl);

            toggleBtn.addEventListener('click', () => {
                imageEl.classList.toggle('show');
                toggleBtn.classList.toggle('open');
                toggleBtn.querySelector('.toggle-btn-text').textContent = 
                    imageEl.classList.contains('show') ? '📷' : '📷';
            });

            itemDiv.appendChild(imageContainer);
        }

        achievementItemsEl.appendChild(itemDiv);
    });
});
