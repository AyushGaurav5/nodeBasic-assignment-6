This project is a basic web server built using Node.js HTTP module. 
It handles multiple routes such as /home, /about, and /contact, 
serving corresponding HTML pages using the fs module.

The server reads HTML files and sends them as responses with proper 
HTTP status codes (200 for success, 404 for not found, and 500 for server errors). 

It also includes handling of CSS files and a custom 404 page 
for invalid routes.