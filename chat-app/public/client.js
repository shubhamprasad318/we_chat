const chatOutput = document.getElementById('chat-output');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const usernameInput = document.getElementById('username-input');
const userList = document.getElementById('user-list');

const ws = new WebSocket('ws://localhost:3000');

// Store the current user's username
let currentUser = '';

ws.onopen = () => {
    // Prompt the user for their username when the WebSocket connection is established
    currentUser = prompt('Enter your username:');
    usernameInput.value = currentUser;
    ws.send(JSON.stringify({ type: 'username', username: currentUser }));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    // Check if the received data is a chat message or a user update
    if (data.type === 'message') {
        displayMessage(data.message);
    } else if (data.type === 'userList') {
        displayUserList(data.users);
    }
};

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        ws.send(JSON.stringify({ type: 'message', message }));
        messageInput.value = '';
    }
});

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function displayUserList(users) {
    // Clear the existing user list
    userList.innerHTML = '';

    // Create and add list items for each user
    users.forEach((user) => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.textContent = user;
        userList.appendChild(userElement);
    });
}

// Add functionality to toggle dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
