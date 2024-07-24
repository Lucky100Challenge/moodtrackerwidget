document.addEventListener('DOMContentLoaded', function() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()]; // Get the day of the week

  document.getElementById('dayName').textContent = dayOfWeek;
});

document.getElementById('moodForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const mood = document.getElementById('mood').value;
  const now = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[now.getDay()]; // Get the day of the week
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  
  const moodLog = document.getElementById('moodLog');
  
  const logItem = document.createElement('div');
  logItem.className = 'card p-4 border border-gray-300 rounded-md shadow-md';
  logItem.innerHTML = `
    <h2 class="text-xl font-semibold">Mood: ${mood}</h2>
    <p class="text-sm">Logged on: ${dayOfWeek}, ${formattedDate} at ${formattedTime}</p>
  `;
  
  moodLog.appendChild(logItem);
  
  // Clear the form
  document.getElementById('moodForm').reset();
});

document.getElementById('toggleMode').addEventListener('click', function() {
  const body = document.body;
  const icon = document.getElementById('icon');
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('moodLog').innerHTML = '';
});
