// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const role = user.role;

    if (role === 'guest') {
        document.getElementById('new-hour-registration').style.display = 'none';
    }

    document.getElementById('new-hour-registration').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block';
    });

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const user = document.getElementById('user').value;
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;
        const status = document.getElementById('status').value;
        const jobType = document.getElementById('job-type').value;
        const note = document.getElementById('note').value;

        // Calculate total hours
        const start = new Date(`1970-01-01T${startTime}:00Z`);
        const end = new Date(`1970-01-01T${endTime}:00Z`);
        const duration = (end - start) / 36e5; // in hours

        // Create table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${user}</td>
            <td>${startTime}</td>
            <td>${endTime}</td>
            <td>${duration.toFixed(2)}</td>
            <td>${status}</td>
            <td><button class="edit">Edit</button> | <button class="delete">Delete</button></td>
        `;

        document.getElementById('hour-data').appendChild(newRow);

        // Close popup
        document.getElementById('popup').style.display = 'none';
    });

    // Fetch and populate users dropdown (demo purposes)
    const users = ['user1', 'admin', 'guest'];
    const select = document.getElementById('user');
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        select.appendChild(option);
    });
});