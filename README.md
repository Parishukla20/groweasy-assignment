# GrowEasy AI CSV Importer

## Project Overview

This project is an AI-powered CSV Importer developed for the GrowEasy Software Developer Assignment.

The application allows users to upload a CSV file, preview the uploaded data, and use Gemini AI to automatically identify and map different CSV fields into a common CRM format.

The project is divided into two parts:
- Frontend for uploading and previewing CSV files.
- Backend for processing the data using Gemini AI and returning structured CRM records.

---

## Features

- Upload CSV File
- Preview CSV Data
- Confirm Import
- AI-powered Field Mapping using Gemini API
- Display Parsed CRM Records
- Total Imported Records
- Total Skipped Records
- Responsive User Interface

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- PapaParse

### Backend

- Node.js
- Express.js
- Gemini API
- Dotenv
- CORS

---

## Folder Structure

```
groweasy-assignment
│
├── frontend
│   ├── app
│   ├── public
│   ├── package.json
│
├── backend
│   ├── server.js
│   ├── gemini.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/groweasy-assignment.git
```

Replace the above URL with your own GitHub repository URL.

---

### Step 2: Install Frontend Dependencies

Open Terminal

```bash
cd frontend
npm install
```

Run the frontend

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

### Step 3: Install Backend Dependencies

Open another Terminal

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Add your Gemini API Key.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the backend

```bash
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

## How to Use

1. Open the application.
2. Upload a CSV file.
3. Preview the uploaded data.
4. Click **Confirm Import**.
5. The frontend sends the data to the backend.
6. Gemini AI maps the CSV fields into CRM fields.
7. The parsed records are displayed in a separate table.
8. Total Imported and Total Skipped records are displayed.

---

## CRM Fields

The AI extracts the following fields whenever available:

- First Name
- Last Name
- Email
- Phone
- Company

---

## Future Improvements

- Drag and Drop Upload
- Loading Indicator
- Better Error Handling
- Support for Large CSV Files
- Database Integration
- Deployment

---

## Author

**Pari Shukla**