`# Chat App`

`This is a simple real-time chat application built with Node.js, Express, WebSocket, and vanilla JavaScript. It supports multiple users, username assignment, message broadcasting, and a dark mode toggle.`

`## Features`

`- Real-time chat using WebSocket.`

`- User registration with a unique username.`

`- Broadcast messages to all users.`

`- Display a list of connected users.`

`- Dark mode toggle for user interface.`

`- Message statuses: Sent, Delivered, and Read.`

`## Installation`

`### Prerequisites`

`Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).`

`### Steps`

`1. Clone this repository:`

`git clone https://github.com/shubhamprasad318/we_chat`

Navigate to the project folder:  
`cd we_chat`

2. Install the required dependencies:  
   `npm install`  
3. Run the server:  
   `npm start`  
4. This will start the server at `http://localhost:3000`.

## **Usage**

* Open `http://localhost:3000` in your browser.  
* Enter a username and start chatting.  
* Messages will be broadcasted to all connected users.  
* You can toggle dark mode by clicking the dark mode switch.

## **File Structure**

`chat-app/`

`│`

`├── public/`

`│   ├── index.html     # The HTML structure for the chat interface`

`│   ├── style.css      # Styling for the chat app, including dark mode`

`│   └── client.js      # Client-side JavaScript to manage WebSocket interactions`

`│`

`├── server.js          # The backend server handling WebSocket and Express routes`

`└── package.json       # Project metadata and dependencies`

## **Technologies Used**

* **Node.js**: JavaScript runtime for building the server.  
* **Express**: Web framework for routing and serving static files.  
* **WebSocket**: For real-time communication between the server and clients.  
* **HTML/CSS/JavaScript**: For building the user interface.

