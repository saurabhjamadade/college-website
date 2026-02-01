document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        contactNumber: document.getElementById('contactNumber').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value
    };

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const messageElement = document.getElementById('message');
        if (response.ok) {
            messageElement.textContent = 'Registration Successful!';
        } else {
            messageElement.textContent = 'Registration Failed!';
        }
        messageElement.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
    }
});
