document.addEventListener('DOMContentLoaded', () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    document.getElementById('day').textContent = `Today is: ${days[currentDay]}`;

    const moods = document.querySelectorAll('div.cursor-pointer');
    const log = document.getElementById('log');
    const moodLog = {};

    moods.forEach(mood => {
        mood.addEventListener('click', () => {
            const time = new Date().toLocaleTimeString();
            const moodName = mood.id;

            if (moodLog[moodName]) {
                log.removeChild(moodLog[moodName]);
                delete moodLog[moodName];
            } else {
                const logEntry = document.createElement('div');
                logEntry.textContent = `${time} - ${mood.textContent}`;
                log.appendChild(logEntry);
                moodLog[moodName] = logEntry;
            }
        });
    });

    const card = document.getElementById('card');
    const modeToggle = document.getElementById('mode-toggle');

    modeToggle.addEventListener('change', () => {
        if (modeToggle.checked) {
            card.classList.replace('bg-gray-100', 'bg-gray-800');
            card.classList.replace('text-black', 'text-white');
        } else {
            card.classList.replace('bg-gray-800', 'bg-gray-100');
            card.classList.replace('text-white', 'text-black');
        }
    });
});
