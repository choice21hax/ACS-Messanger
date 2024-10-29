# ACS Messenger

## Overview

ACS Messenger is a centralized, browser-accessible messaging app designed for high school students. It features a minimalistic dark theme inspired by Discord, offering both group and private messaging capabilities. The app includes user management, pricing plans, and smooth animations for a responsive experience.

## Features

- **Group Messaging:** Create and participate in group chats.
- **Private Messaging:** Engage in one-on-one conversations.
- **User Management:** Manage user accounts and statuses.
- **Pricing Plans:** Choose from various subscription plans.
- **Responsive Design:** Optimized for low-power devices.

## Getting Started

To get started with ACS Messenger, clone the repository and follow the setup instructions in the [Deployment Guide](DEPLOY.md).

### Prerequisites

- Node.js and npm installed
- MySQL database setup
- Accounts on Tinkerhost, Devzero, and Vercel for deployment

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/acs-messenger.git
   cd acs-messenger
   ```
   or
   ```bash
   wget https://github.com/yourusername/acs-messenger/archive/refs/heads/main.zip
   unzip main.zip
   cd acs-messenger-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file and add your database credentials and other necessary configurations.
   - Feel free to refer to the [PhPMyadmin.md](phpmyadmin.md) file for more information on how to set up your database.
   - Or you can refer to the [Database.md](database.md) file for more information on how to set up your database.

4. Start the development server:
   ```bash
   npm start
   ```

## Deployment

For detailed deployment instructions, refer to the [Deployment Guide](DEPLOY.md).
For setting up your database, refer to the [Database.md](database.md) file.
If you're using phpMyAdmin (Tinkerhost), refer to the [PhPMyadmin.md](phpmyadmin.md) file.

## Contributing

We welcome contributions to ACS Messenger! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact [choice21ty@proton.me](mailto:choice21ty@proton.me).

Or my Discord works too! - choice21