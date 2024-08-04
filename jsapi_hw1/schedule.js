document.addEventListener('DOMContentLoaded', () => {
    const classes = [
        {
            id: 1,
            name: "Йога",
            time: "10:00 - 11:00",
            maxParticipants: 10,
            currentParticipants: 8
        },
        {
            id: 2,
            name: "Пилатес",
            time: "12:00 - 13:00",
            maxParticipants: 12,
            currentParticipants: 12
        },
        {
            id: 3,
            name: "Зумба",
            time: "14:00 - 15:00",
            maxParticipants: 20,
            currentParticipants: 15
        }
    ];

    const scheduleContainer = document.getElementById('schedule');

    function renderClasses() {
        scheduleContainer.innerHTML = '';
        classes.forEach(cls => {
            const card = document.createElement('div');
            card.className = 'card mb-3';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = cls.name;

            const time = document.createElement('p');
            time.className = 'card-text';
            time.textContent = `Время: ${cls.time}`;

            const participants = document.createElement('p');
            participants.className = 'card-text';
            participants.textContent = `Участники: ${cls.currentParticipants}/${cls.maxParticipants}`;

            const buttonContainer = document.createElement('div');

            const joinButton = document.createElement('button');
            joinButton.className = 'btn btn-primary mr-2';
            joinButton.textContent = 'Записаться';
            joinButton.disabled = cls.currentParticipants >= cls.maxParticipants;
            joinButton.addEventListener('click', () => {
                if (cls.currentParticipants < cls.maxParticipants) {
                    cls.currentParticipants += 1;
                    renderClasses();
                }
            });

            const cancelButton = document.createElement('button');
            cancelButton.className = 'btn btn-danger';
            cancelButton.textContent = 'Отменить запись';
            cancelButton.disabled = cls.currentParticipants <= 0;
            cancelButton.addEventListener('click', () => {
                if (cls.currentParticipants > 0) {
                    cls.currentParticipants -= 1;
                    renderClasses();
                }
            });

            buttonContainer.appendChild(joinButton);
            buttonContainer.appendChild(cancelButton);

            cardBody.appendChild(title);
            cardBody.appendChild(time);
            cardBody.appendChild(participants);
            cardBody.appendChild(buttonContainer);

            card.appendChild(cardBody);
            scheduleContainer.appendChild(card);
        });
    }

    renderClasses();
});
