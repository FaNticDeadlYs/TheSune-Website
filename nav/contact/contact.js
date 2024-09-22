document.addEventListener('DOMContentLoaded', function() {
    const contactItemsEl = document.getElementById('contact-items');
    const contactGrid = document.createElement('div');
    contactGrid.className = 'contact-grid';

    contactData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'contact-item';

        const nameEl = document.createElement('div');
        nameEl.className = 'contact-name';
        nameEl.textContent = item.name;
        itemDiv.appendChild(nameEl);

        const positionEl = document.createElement('div');
        positionEl.className = 'contact-position';
        positionEl.textContent = item.position;
        itemDiv.appendChild(positionEl);

        const iconsDiv = document.createElement('div');
        iconsDiv.className = 'contact-icons';

        if (item.email) {
            const emailIcon = document.createElement('a');
            emailIcon.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(item.email)}`;
            emailIcon.target = '_blank';
            emailIcon.innerHTML = '<i class="fas fa-envelope"></i>';
            iconsDiv.appendChild(emailIcon);
        }
        
        if (item.discordId) {
            const discordIcon = document.createElement('a');
            discordIcon.href = `https://discord.com/users/${item.discordId}`;
            discordIcon.target = '_blank';
            discordIcon.innerHTML = '<i class="fab fa-discord"></i>';
            iconsDiv.appendChild(discordIcon);
        }
        
        if (item.instagramLink) {
            const instaIcon = document.createElement('a');
            instaIcon.href = item.instagramLink;
            instaIcon.target = '_blank';
            instaIcon.innerHTML = '<i class="fab fa-instagram"></i>';
            iconsDiv.appendChild(instaIcon);
        }

        if (item.phoneNo) {
            const whatsappIcon = document.createElement('a');
            whatsappIcon.href = `https://wa.me/${item.phoneNo.replace(/[^0-9]/g, '')}`;
            whatsappIcon.target = '_blank';
            whatsappIcon.innerHTML = '<i class="fab fa-whatsapp"></i>';
            iconsDiv.appendChild(whatsappIcon);
        }
        

        itemDiv.appendChild(iconsDiv);

        contactGrid.appendChild(itemDiv);

        
    });

    contactItemsEl.appendChild(contactGrid);
});

