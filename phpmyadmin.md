# phpMyAdmin MySQL Database Setup Guide

## Prerequisites

- Access to phpMyAdmin through your web hosting provider or local server setup (e.g., XAMPP, WAMP).

## Steps

1. **Access phpMyAdmin:**
   - Open your web browser and navigate to the phpMyAdmin URL. This is typically something like `http://localhost/phpmyadmin` for local setups or provided by your hosting provider.

2. **Log in to phpMyAdmin:**
   - Enter your MySQL username and password. For local setups, the default username is often `root` with no password.

3. **Create a New Database:**
   - Once logged in, click on the "Databases" tab in the top navigation.
   - In the "Create database" field, enter the name of your new database (e.g., `acs_messenger`).
   - Choose a collation (e.g., `utf8_general_ci`) for character encoding.
   - Click "Create" to set up the new database.

4. **Create Tables:**
   - Click on the newly created database in the left sidebar to open it.
   - Click on the "SQL" tab to run SQL queries for creating tables.
   - Enter the following SQL commands to create the necessary tables:

   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       name VARCHAR(255),
       status VARCHAR(50),
       account_type VARCHAR(50)
   );

   CREATE TABLE messages (
       id INT AUTO_INCREMENT PRIMARY KEY,
       sender_id INT NOT NULL,
       receiver_id INT NOT NULL,
       message TEXT,
       timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (sender_id) REFERENCES users(id),
       FOREIGN KEY (receiver_id) REFERENCES users(id)
   );

   CREATE TABLE group_chats (
       chat_id INT AUTO_INCREMENT PRIMARY KEY,
       user_ids TEXT
   );

   CREATE TABLE plans (
       id INT AUTO_INCREMENT PRIMARY KEY,
       plan_details TEXT,
       pricing DECIMAL(10, 2)
   );
   ```

   - Click "Go" to execute the queries and create the tables.

5. **Set Up User and Permissions:**
   - Click on the "User accounts" tab.
   - Click "Add user account."
   - Enter a username (e.g., `acs_user`) and a strong password.
   - Under "Database for user," select "Grant all privileges on database" and choose your database.
   - Click "Go" to create the user and assign permissions.

6. **Test the Connection:**
   - Use a MySQL client or command line to test the connection with the new user:
     ```bash
     mysql -u acs_user -p acs_messenger
     ```

7. **Update Application Configuration:**
   - Ensure your application’s database configuration (e.g., in `.env` or `server.js`) matches the new database and user credentials.

## Notes

- Replace `'yourPassword'` with a strong password for the `acs_user`.
- Adjust table structures and fields as needed to fit your application requirements.
- Regularly back up your database to prevent data loss. 