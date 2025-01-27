# ROADMAP.md

## Project Overview
ACS Messenger is a centralized, browser-accessible messaging app with a minimalistic dark theme, inspired by Discord’s design. It includes user management, pricing plans, smooth animations, and key features such as group and private messaging. The app is designed for high school students.

---

## Project Phases

### Phase 1: Project Setup
1. **Initialize Front-End Repository**
   - [x] Set up HTML/CSS/JavaScript structure.
   - [x] Configure React and Vue for component-based design.
   - [x] Deploy initial structure on **Tinkerhost**.

2. **Initialize Back-End Repository**
   - [x] Set up Node.js backend with Express and deploy it to **Devzero**.
   - [x] Establish basic API endpoints for user authentication, messaging, and user management.
   - [x] Connect to **MySQL** database.

3. **Database Setup**
   - [x] Configure MySQL tables:
     - Users (username, email, password, name, status, account type).
     - Messages (sender_id, receiver_id, message, timestamp).
     - Group Chats (chat_id, user_ids).
     - Plans (plan details, pricing).
   - [x] Create and test database connection.

---

### Phase 2: User Authentication and Onboarding
1. **Sign-Up and Login Pages**
   - [x] Design forms for username, email, password, and name.
   - [x] Integrate smooth animations for user interactions.
   - [x] Set up Express API for authentication (sign-up, login) with password hashing.
   - [x] Connect form data to MySQL and handle error responses.

2. **User Status System**
   - [ ] Implement a user status field in the database.
   - [ ] Display user status in front-end (e.g., “Online,” “Offline”).
   - [ ] Set up real-time updates via WebSockets or a polling system.

---

### Phase 3: Messaging Features
1. **Private Messaging**
   - [ ] Design the UI for 1-on-1 chat interactions.
   - [ ] Build Express API endpoints for sending/receiving messages.
   - [ ] Implement message storage in MySQL and real-time delivery using WebSockets.

2. **Group Chats**
   - [ ] UI design for group chat creation.
   - [ ] Express endpoint for creating groups (database relation with users).
   - [ ] Enable users to create, join, and leave group chats dynamically.

3. **Message Delivery Optimization**
   - [ ] Ensure low-latency message delivery with WebSockets.
   - [ ] Optimize backend handling for faster performance.

---

### Phase 4: Additional Features and UI Enhancements
1. **Pricing Page**
   - [ ] Set up a pricing page with multiple plans and descriptions.
   - [ ] Implement plan selection with different user account types.
   - [ ] Display upgrade options in user profiles or management panel.

2. **Management Panel**
   - [ ] Admin panel to list all users, their statuses, and account details.
   - [ ] Add functionality to cancel user accounts.
   - [ ] Access to panel will be restricted to admin accounts only.

3. **Advertisement**
   - [ ] Insert a single, discrete ad on every page except the management panel.

---

### Phase 5: Design and UX Optimization
1. **Theme and Animation**
   - [x] Apply the dark theme with dark purple accents.
   - [x] Add subtle animations to UI elements for a smooth feel.
   - [ ] Test app on low-power devices to ensure performance consistency.

2. **Smooth Transition and Loading**
   - [ ] Optimize animations and minimize DOM re-rendering.
   - [ ] Compress and optimize media for faster loading.

---

### Phase 6: Testing and Deployment
1. **Testing**
   - [ ] Conduct testing on different devices (including Chromebooks).
   - [ ] Ensure low-latency performance and smooth animations.
   - [ ] Test database and backend for potential scalability issues.

2. **Deployment**
   - [ ] Deploy front-end on **Tinkerhost** and back-end on **Devzero**.
   - [ ] Set up SSL/TLS for secure connections.
   - [ ] Monitor user activity and optimize based on user feedback.

---

## Future Enhancements
- **End-to-End Encryption:** Add an option for encrypted messages.
- **Push Notifications:** Notify users of new messages or group updates.
- **Multimedia Support:** Allow users to share images and files in messages.

---
