  # appdev


# Final Notes
### 1. Default Ports for HTTP/HTTPS/SSH
### HTTP: 80
### HTTPS: 443
### SSH: 22
### 2. HTTP Status Codes (300/400/500)
### 300: Redirection (the request needs further action to complete, like a redirect).
### 400: Client Errors (bad request or invalid input from the client).
### 500: Server Errors (something went wrong on the server side).
### 3. HTTP Header Content-Type
### The Content-Type header specifies the type of data being sent by the server to the client (or vice versa). It allows the server to indicate to the client what the ### media type of the resource is (e.g., text/html, application/json, image/png).

### 4. Cookie Types
### Secure Cookie: Only sent over HTTPS connections, providing added security.
### Http-Only Cookie: Cannot be accessed via JavaScript, providing protection against XSS (Cross-Site Scripting) attacks.
### Same-Site Cookie: Controls when cookies are sent with cross-site requests. It can be set to Strict, Lax, or None.
### More on cookies

### 5. Express Middleware - Console Output
### If you provide the actual middleware code, I can analyze it. Typically, the output would log request details, like the URL path (/api/document) or headers, ### ### depending on the middleware setup.

### 6. Express Service Code - Fetch Return
### Again, I’d need the exact Express code and the fetch call, but generally, the fetch function in the front-end JavaScript returns a Response object which you can ### process to extract data.

### 7. MongoDB Query
### js
### Copy code
### db.collection.find({ name: "Mark" })
### This query will return all documents where the name field equals "Mark".

### 8. How Should User Passwords Be Stored?
### User passwords should be stored securely using a cryptographic hashing function like bcrypt or Argon2, with a salt to prevent rainbow table attacks.

### 9. Node.js WebSocket - Front-End Log
### Assuming the WebSocket code establishes a connection and sends/receives messages, the front-end will log the message sent or received (e.g., "message" or the data ### returned). The actual content depends on the specific events in the code.

### 10. WebSocket Protocol
### The WebSocket protocol provides a full-duplex communication channel that allows for persistent and bidirectional data exchange between a client and server over a ### single, long-lived connection.

### 11. Acronyms
### JS: JavaScript
### JSX: JavaScript XML (a syntax extension for JavaScript, often used with React)
### AWS: Amazon Web Services
### NPM: Node Package Manager
### NVM: Node Version Manager
### 12. React Component with Parameters
### If the React component takes parameters (props), it will render content dynamically based on those values. For example, a component that takes a name prop will ### display that name.

### 13. React Component Tree
### Given a set of nested React components, the resulting output will be a tree of HTML-like elements based on the structure and content of each component's return ### value (using JSX).

### 14. React useState
### The useState hook in React is used to declare a state variable that can be updated. It returns a pair: the current state value and a function to update it.

### 15. React Hooks
### React Hooks are functions that let you "hook into" React state and lifecycle features from function components.

### 16. Specific React Hooks
### State Hook (useState): Manages state in a functional component.
### Context Hook (useContext): Accesses context values in a component.
### Ref Hook (useRef): Stores a mutable value that persists across renders.
### Effect Hook (useEffect): Runs side-effects in function components, like data fetching or DOM manipulation.
### Performance Hook: (e.g., useMemo, useCallback) Optimizes performance by memoizing values or functions.
### React Hooks Documentation

### 17. React Router
### React Router is used to handle navigation between different views or pages in a React app. Specific statements would depend on the provided code, but it involves ### defining routes, linking between components, and rendering different content based on the URL.

### 18. package.json
### The package.json file manages a Node.js project, listing project metadata (name, version), dependencies, scripts, and other configurations related to the project.

### 19. fetch Function
### The fetch function is used in JavaScript to make HTTP requests (like GET or POST) to a server and handle the response asynchronously.

### 20. Node.js
### Node.js is a JavaScript runtime that allows you to execute JavaScript on the server side. It is designed for building scalable, fast network applications.

### 21. PM2
### PM2 is a process manager for Node.js applications, providing features like load balancing, clustering, and easy monitoring/restarting of apps.

### 22. Vite
### Vite is a fast build tool and development server for modern web projects. It is optimized for faster development workflows by leveraging native ES modules and ### ### modern JavaScript features. It also provides features like hot module replacement (HMR).

# A concise and compelling elevator pitch in your README.md

### This is an app that can be used by anyone that wants to make money on the side, or by people that need small tasks or jobs done in their home, business, etc.. This will create more jobs, especially your younger people, that might just need money for the weekend. Find jobs easily in your area, and find people that will be good to help you out with work you may need done as well.

# Description of key features in your README.md

### Accounts, hirer, and worker
### Ratings for hirer and worker
### Individual scouting out independent workers
### Jobs in area

# Description of how you will use each technology
## HTML: Basic formatting, screen view
## CSS: Allowing to be displayed on all screen sizes especially mobile
## Javascript: Rankings, reviews, login
## React: Used for multiple pages, specification for the individual, if they’re looking up house maintenance, it will cater to those preferences.
## Service: Showing posts or job ratings to other people on different devices
## Data-base: Job types and/or categories, login data
## Websocket-data: Reviews and ratings, login

# HTML Deliverable
### Separate pages
### Create page with locations of jobs
### Show workers star average
### Show available jobs on the market

# Stuff we added for Startup HTML submission:
### We adjusted the login and password settings
### Adjusted the means to commit and deploy files (figured out the technical difficulties)
### Required wesbite abilities added

# Review for missed sections
### added 3rd party service call placeholder
### added websocket placeholder

# CSS STARTUP
### adjusted alignment for sections
### adjusted colors for better viewing
### (implemented similar css to simon)

# STARTUP REACT
### implemented most of the simon react features, but translated them to my own website/app




# Desktop Preview
![app preview](https://github.com/user-attachments/assets/f135dc7e-ec72-4f27-bbe9-88af2bd4bd07)
# Mobile Preview
![app preview 2](https://github.com/user-attachments/assets/b5e9d676-5bd5-4816-a6f4-d2e29c809c7c)
