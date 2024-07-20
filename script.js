document.addEventListener('DOMContentLoaded', () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    document.getElementById('day').textContent = `Today is: ${days[currentDay]}`;

    const moods = document.querySelectorAll('div.cursor-pointer');
    const log = document.getElementById('log');
    const moodLog = {};

    moods.forEach(mood => {
        mood.addEventListener('click', () => {
            moods.forEach(m => m.classList.remove('bg-gray-200'));
            mood.classList.toggle('bg-gray-200');
            
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
});
