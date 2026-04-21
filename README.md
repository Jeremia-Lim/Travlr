# CS 465 Full Stack Web Application Portfolio
Jeremia Lim

## Overview
This repository contains my full stack web application developed throughout CS 465. The application includes both a customer-facing interface and an administrative single-page application built with Angular. In the final iteration, secure login authentication was implemented to protect administrative functionality.

## Architecture
The frontend development in this project used both Express HTML with JavaScript and a single-page application built with Angular. The Express HTML approach renders pages on the server side, meaning each request reloads a new page from the backend. This method is straightforward and works well for basic user interactions, but it can feel slower because the entire page reloads each time.

In contrast, the single-page application uses Angular to dynamically update the user interface without reloading the page. This creates a smoother and more responsive experience, especially for administrative tasks. The SPA also allows for better separation of concerns by organizing components, services, and routing in a structured way.

The backend uses a NoSQL MongoDB database because it provides flexibility in storing data as JSON-like documents. This is beneficial for a full stack JavaScript application because it allows smooth integration between the frontend and backend. MongoDB also scales well and does not require a fixed schema, which made it easier to adapt the data structure during development.

## Functionality
JSON, or JavaScript Object Notation, is a lightweight data format used to transfer data between the frontend and backend. While it is based on JavaScript syntax, JSON itself is only a text format and does not include functions or behavior. It acts as the bridge between the client and server, allowing data to be sent and received through API requests.

Throughout the development process, I refactored code multiple times to improve functionality and efficiency. One example was reorganizing API calls into reusable services in Angular, which reduced duplicate code and made the application easier to maintain. Another example was cleaning up backend routes and controllers to separate logic and improve readability.

Reusable user interface components provided major benefits, including consistency across the application and easier updates. Instead of rewriting the same code, components could be reused and modified in one place, improving both development speed and long-term maintainability.

## Testing
In a full stack application, API testing focuses on methods such as GET, POST, PUT, and DELETE, which correspond to retrieving, creating, updating, and deleting data. Each endpoint must be tested to ensure it returns the correct data and handles errors properly.

Security adds complexity to testing because endpoints may require authentication tokens or restricted access. For example, administrative routes should only be accessible after a successful login. This requires testing both functionality and security layers together to ensure that unauthorized users cannot access protected data.

Understanding endpoints, methods, and security helped me see how different layers of the application interact and how important it is to validate both data and user access at every step.

## Reflection
This course has helped me move closer to my professional goal of becoming a software engineer by giving me hands-on experience building a full stack application from start to finish. I developed a stronger understanding of how frontend and backend systems communicate, as well as how to structure and organize a real-world project.

Some of the key skills I learned and improved include working with Angular for frontend development, using MongoDB for database management, building RESTful APIs, and implementing authentication for secure access. I also gained experience with debugging, refactoring, and improving code efficiency.

Overall, this course has made me a more marketable candidate by giving me practical experience with modern web technologies and strengthening my ability to design, build, and secure full stack applications.

## Security Features
- Admin authentication system
- Protected API endpoints
- Secure data handling using JSON
- Separation of frontend and backend access

## How to Run the Application
1. Install dependencies using `npm install`
2. Start the backend server using `npm start`
3. Run the Angular frontend using `ng serve`
4. Access the application in your browser

## Submission
This repository represents the final iteration of my full stack web application for CS 465.

