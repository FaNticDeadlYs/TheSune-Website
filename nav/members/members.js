const membersData = window.membersData;
  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('title').textContent = membersData.title;

      const descriptionEl = document.getElementById('description');
      membersData.description.forEach(desc => {
          const p = document.createElement('p');
          p.textContent = desc;
          descriptionEl.appendChild(p);
      });

      const presidentSection = document.getElementById('president-section');
      const vicePresidentSection = document.getElementById('vice-president-section');
      const coreMembersSection = document.getElementById('core-members-section');

      membersData.currentMembers.forEach(roleGroup => {
          let sectionElement;
          switch(roleGroup.role) {
              case "President":
                  sectionElement = presidentSection;
                  break;
              case "Vice President":
                  sectionElement = vicePresidentSection;
                  break;
              case "Core Members":
                  sectionElement = coreMembersSection;
                  break;
          }

          const roleHeading = document.createElement('h2');
          roleHeading.className = 'role-heading';
          roleHeading.textContent = roleGroup.role;
          sectionElement.appendChild(roleHeading);

          const membersContainer = document.createElement('div');
          membersContainer.className = 'members-container';

          roleGroup.members.forEach(member => {
              const memberDiv = document.createElement('div');
              memberDiv.className = 'member';
            
              const memberImg = document.createElement('img');
              memberImg.className = 'member-img';
              memberImg.src = member.image;
              memberImg.alt = member.name;
              memberDiv.appendChild(memberImg);

              const memberName = document.createElement('div');
              memberName.className = 'member-name';
              memberName.textContent = member.name;
              memberDiv.appendChild(memberName);

              const memberDescription = document.createElement('div');
              memberDescription.className = 'member-description';
              memberDescription.textContent = member.description;
              memberDiv.appendChild(memberDescription);

              membersContainer.appendChild(memberDiv);
          });

          sectionElement.appendChild(membersContainer);
      });
  });
    document.addEventListener('DOMContentLoaded', function() {

            const alumniContainer = document.getElementById('alumni-container');

            membersData.alumni.forEach(yearGroup => {
                const yearSection = document.createElement('section');
                yearSection.className = 'year-section';
        
                const yearHeading = document.createElement('h2');
                yearHeading.className = 'year-heading';
                yearHeading.textContent = yearGroup.year;
                yearSection.appendChild(yearHeading);

                const membersContainer = document.createElement('div');
                membersContainer.className = 'members-container';

                yearGroup.members.forEach(member => {
                    const memberDiv = document.createElement('div');
                    memberDiv.className = 'member';
  
                    const memberImg = document.createElement('img');
                    memberImg.className = 'member-img';
                    memberImg.src = member.image;
                    memberImg.alt = member.name;
                    memberDiv.appendChild(memberImg);

                    const memberName = document.createElement('div');
                    memberName.className = 'member-name';
                    memberName.textContent = member.name;
                    memberDiv.appendChild(memberName);

                    const memberDescription = document.createElement('div');
                    memberDescription.className = 'member-description';
                    memberDescription.textContent = member.description;
                    memberDiv.appendChild(memberDescription);

                    membersContainer.appendChild(memberDiv);
                });

                yearSection.appendChild(membersContainer);
                alumniContainer.appendChild(yearSection);
            });

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('show-description');
                            }, 300); // 300ms delay
                        } else {
                            entry.target.classList.remove('show-description');
                        }
                    });
                }, { threshold: 0.2 });
            
                document.querySelectorAll('.member-description').forEach(desc => {
                    observer.observe(desc);
                });
            }
    });
