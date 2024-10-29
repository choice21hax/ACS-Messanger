# MySQL Database Setup Guide

## Prerequisites

- MySQL installed on your machine or access to a MySQL server.
- MySQL Workbench or another MySQL client (optional, but recommended for ease of use).

## Steps

1. **Start MySQL Server:**
   - Ensure your MySQL server is running. You can start it using the command line or a service manager, depending on your operating system.

2. **Log in to MySQL:**
   - Open a terminal or command prompt.
   - Log in to MySQL with your root user or another user with sufficient privileges:
     ```bash
     mysql -u root -p
     ```

3. **Create a New Database:**
   - Once logged in, create a new database for the ACS Messenger app:
     ```sql
     CREATE DATABASE acs_messenger;
     ```

4. **Use the New Database:**
   - Select the newly created database:
     ```sql
     USE acs_messenger;
     ```

5. **Create Tables:**
   - Create the necessary tables for users, messages, group chats, and plans:

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

6. **Set Up User and Permissions:**
   - Create a new MySQL user for the application and grant necessary permissions:
     ```sql
     CREATE USER 'acs_user'@'localhost' IDENTIFIED BY 'yourPassword';
     GRANT ALL PRIVILEGES ON acs_messenger.* TO 'acs_user'@'localhost';
     FLUSH PRIVILEGES;
     ```

7. **Test the Connection:**
   - Use a MySQL client or command line to test the connection with the new user:
     ```bash
     mysql -u acs_user -p acs_messenger
     ```

8. **Update Application Configuration:**
   - Ensure your application’s database configuration (e.g., in `.env` or `server.js`) matches the new database and user credentials.

## Notes

- Replace `'yourPassword'` with a strong password for the `acs_user`.
- Adjust table structures and fields as needed to fit your application requirements.
- Regularly back up your database to prevent data loss. 