# ACS Messenger Deployment Guide

## Overview

This guide provides instructions for deploying the ACS Messenger app to Tinkerhost, Devzero, and Vercel. The app consists of a front-end built with HTML/CSS/JavaScript and a back-end using Node.js with Express and MySQL.

---

## Deployment to Tinkerhost

### Prerequisites

- Ensure you have an account on Tinkerhost.
- Prepare your front-end files (HTML, CSS, JavaScript).

### Steps

1. **Log in to Tinkerhost:**
   - Access your Tinkerhost account.

2. **Create a New Project:**
   - Navigate to the dashboard and create a new project.

3. **Upload Front-End Files:**
   - Use the file manager to upload your front-end files (e.g., `index.html`, `styles.css`, etc.) to the public directory.

4. **Configure Domain:**
   - Set up a custom domain if needed, or use the default Tinkerhost URL.

5. **Test Deployment:**
   - Access your site via the provided URL to ensure everything is working correctly.

---

## Deployment to Devzero

### Prerequisites

- Ensure you have an account on Devzero.
- Prepare your back-end files (Node.js, Express, MySQL).

### Steps

1. **Log in to Devzero:**
   - Access your Devzero account.

2. **Create a New Environment:**
   - Set up a new environment for your Node.js application.

3. **Upload Back-End Files:**
   - Use the Devzero interface to upload your server files (e.g., `server.js`, `package.json`).

4. **Set Up MySQL Database:**
   - Configure a MySQL database within Devzero and update your connection settings in `server.js`.

5. **Run Your Application:**
   - Start your Node.js server within the Devzero environment.

6. **Test API Endpoints:**
   - Ensure your API endpoints are accessible and functioning correctly.

---

## Deployment to Vercel

### Prerequisites

- Ensure you have an account on Vercel.
- Install Vercel CLI: `npm install -g vercel`

### Steps

1. **Log in to Vercel:**
   - Use the Vercel CLI to log in: `vercel login`

2. **Initialize Vercel Project:**
   - Navigate to your project directory and run: `vercel`

3. **Configure Project:**
   - Follow the prompts to set up your project, selecting the appropriate settings for a Node.js app.

4. **Deploy:**
   - Run `vercel --prod` to deploy your app to production.

5. **Test Deployment:**
   - Access your app via the Vercel URL to ensure everything is working correctly.

---

## Additional Resources

- **Tinkerhost Documentation:** [Tinkerhost Docs](https://tinkerhost.net/)
- **Devzero Documentation:** [Devzero Docs](https://www.devzero.io/docs)
- **Vercel Documentation:** [Vercel Docs](https://vercel.com/docs)

---

## Notes

- Ensure all environment variables (e.g., database credentials) are correctly set in each platform.
- Regularly update your deployments to reflect changes in your codebase. 