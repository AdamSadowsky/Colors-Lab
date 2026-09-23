# COLORS LAMP Application

## Description

COLORS is a simple web application created using the LAMP stack. The application allows a user to log in and manage color entries associated with their account.

The frontend is built with HTML, CSS, and JavaScript. It communicates with PHP API endpoints on the server. The PHP backend interacts with a MySQL database to store and retrieve application data.

## Technologies Used

- Linux
- Apache
- MySQL
- PHP
- HTML
- CSS
- JavaScript
- Git
- GitHub

## Project Structure

```text
LAMP Stack/
├── css/
│   └── styles.css
├── images/
│   └── background.png
├── js/
│   ├── code.js
│   └── md5.js
├── LAMPAPI/
│   ├── AddColor.php
│   ├── Login.php
│   └── SearchColors.php
├── color.html
├── index.html
├── .gitignore
├── LICENSE.md
└── README.md
```

## Features

The application supports:

- User login
- Adding colors
- Searching for colors
- Displaying colors associated with the logged in user
- Communication between the JavaScript frontend and PHP API endpoints
- Storage and retrieval of data using MySQL

## Setup Instructions

To run the application, a LAMP environment is required.

1. Set up a Linux server.
2. Install and configure Apache.
3. Install and configure MySQL.
4. Install PHP.
5. Place the project files inside the Apache web directory.
6. Create the required MySQL database and tables.
7. Configure the PHP API files with the appropriate database connection information.
8. Make sure Apache and MySQL are running.

Database passwords, credentials, and other sensitive server configuration information should not be committed to the repository.

## Running the Application

After the application has been deployed to the Apache server, access the application through the server URL in a web browser.

The application starts from:

```text
index.html
```

The JavaScript frontend sends requests to the PHP API endpoints located in:

```text
/LAMPAPI
```

The available API files are:

```text
Login.php
AddColor.php
SearchColors.php
```

These API endpoints handle user login, adding colors, and searching for colors.

## How the Application Works

The basic request flow is:

```text
Browser
   ↓
Apache Web Server
   ↓
PHP API
   ↓
MySQL Database
   ↓
PHP Response
   ↓
Browser
```

Apache listens for HTTP requests from the browser and serves the frontend files. When JavaScript needs application data, it sends a request to one of the PHP API endpoints. The PHP backend processes the request, communicates with the MySQL database when necessary, and returns a response to the frontend.

## Assumptions and Limitations

- The application requires a properly configured LAMP server.
- The required MySQL database and tables must already exist.
- Database credentials are not included in this repository.
- The application was created as part of the COLORS lab.
- The project is intended as a basic demonstration of frontend, backend, API, and database communication.

## AI Usage

ChatGPT was used to assist with Git workflow guidance and the organization and wording of project documentation.

## License

This project is licensed under the license included in the `LICENSE.md` file.