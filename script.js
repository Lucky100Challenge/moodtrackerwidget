document.addEventListener('DOMContentLoaded', () => {
    const moodButtons = document.getElementById('moodButtons');
    const historyList = document.getElementById('historyList');
    const dayButtons = document.getElementById('daySelector').children;
    const clearButton = document.getElementById('clearHistory');
    let selectedDay = '';

    // Set default day
    const setDefaultDay = () => {
        if (dayButtons.length > 0) {
            selectedDay = dayButtons[0].dataset.day;
            dayButtons[0].classList.add('active');
        }
    };
    setDefaultDay();

    // Handle mood button clicks
    moodButtons.addEventListener('click', (event) => {
        const mood = event.target.dataset.mood;
        if (mood && selectedDay) {
            addMoodToHistory(mood, selectedDay);
        }
    });

    // Handle day button clicks
    Array.from(dayButtons).forEach(button => {
        button.addEventListener('click', () => {
            selectedDay = button.dataset.day;
            Array.from(dayButtons).forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Handle clear button click
    clearButton.addEventListener('click', () => {
        historyList.innerHTML = '<li>No mood selected yet.</li>';
    });

    const addMoodToHistory = (mood, day) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${day}: ${mood}`;
        historyList.appendChild(listItem);
    };
});
