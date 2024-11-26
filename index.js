const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like CSS if needed in the future)
app.use(express.static('public'));

// Root route to serve the Google-like page
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Google-Like Page</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin: 0;
                padding: 50px;
                background-color: #f4f4f4;
            }
            h1 {
                color: #333;
            }
            .search-box {
                width: 50%;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .search-button {
                padding: 10px 20px;
                font-size: 16px;
                color: #fff;
                background-color: #4285f4;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .search-button:hover {
                background-color: #357ae8;
            }
            a {
                color: #4285f4;
                text-decoration: none;
                font-size: 18px;
            }
            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to My Google-Like Page</h1>
        <form action="https://www.google.com/search" method="GET" target="_blank">
            <input type="text" name="q" class="search-box" placeholder="Search Google..." required>
            <button type="submit" class="search-button">Search</button>
        </form>
        <br>
        <a href="https://www.google.com" target="_blank">Go to Google</a>
    </body>
    </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
