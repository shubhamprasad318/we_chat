const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

const clients = new Set(); // Store connected clients
const usernames = new Map(); // Map WebSocket connections to usernames

wss.on('connection', (ws) => {
    clients.add(ws);

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'username') {
            // Store the username associated with this WebSocket connection
            usernames.set(ws, data.username);

            // Send the updated user list to all clients
            sendUserList();
        } else if (data.type === 'message') {
            // Broadcast the message to all clients
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'message',
                        message: `${usernames.get(ws)}: ${data.message}`,
                    }));
                }
            });
        }
    });

    ws.on('close', () => {
        clients.delete(ws);
        usernames.delete(ws);

        // Send the updated user list to all clients when a user disconnects
        sendUserList();
    });

    // Send the initial user list to the new client
    sendUserList();

    function sendUserList() {
        const users = Array.from(usernames.values());
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'userList',
                    users,
                }));
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
