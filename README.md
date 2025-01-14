# MernStack
# MERN Stack Project - Product Dashboard

## Overview
This project showcases a product dashboard with data visualization. It includes APIs for handling transactions, statistics, and charts.

## Features
- List of transactions with search and pagination.
- Statistics for sales, sold, and unsold items.
- Bar chart for price range distribution.
- Pie chart for category-wise distribution.
- Combined API for fetching all data.

## Tech Stack
- Backend: Node.js, Express, MongoDB
- Frontend: React, Vite, Chart.js, Tailwind CSS

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
Set up the backend:

cd backend
npm install
npm start

Set up the frontend:

cd frontend
npm install
npm run dev

Open the app in your browser:

    http://localhost:5173

API Endpoints

    POST /api/seed: Seeds the database with data.
    GET /api/transactions: Fetches transactions.
    GET /api/stats: Fetches sales statistics.
    GET /api/barChart: Fetches price range data.
    GET /api/pieChart: Fetches category distribution.
    GET /api/combined: Fetches all data in a single response.

