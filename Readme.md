# AeroTrack: Aircraft Component Tracking System


## Project Overview
A web application for tracking aircraft components through their lifecycle stages, from manufacturing to deployment.

## How I Built This (Step by Step)

### 1. Project Setup
- Created project structure using Create React App for frontend
- Set up Node.js/Express backend
- Connected to MongoDB Atlas for database


### 2. Backend Development
1. **Installed Backend Dependencies**
   - Express
   - Mongoose
   - Cors
   - Dotenv

   
2. **Created MongoDB Schema**
- Designed component schema with fields:
  * name
  * serialNumber (unique)
  * status
  * manufacturingDate
  * history tracking

3. **Implemented API Endpoints**
- POST /api/components (Create new component)
- GET /api/components (List all components)
- PATCH /api/components/:id/status (Update status)

### 3. Frontend Development
1. **Installed Frontend Dependencies**
```
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled axios
```

2. **Created React Components**
- ComponentForm: For adding new components
- ComponentList: Displays components in a table
- Used Material-UI for styling

3. **State Management**
- Used React useState for form data
- Implemented useEffect for data fetching
- Added real-time updates using callback functions

### 4. Key Features
- Add new components with validation
- View all components in a table format
- Track component status changes
- Real-time updates without page refresh
- Error handling and success messages

### 5. Technologies Used
- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **API Communication**: Axios
- **Styling**: Material-UI components and sx props

### 6. Learning Resources Used
1. **React Documentation**
   - Hooks (useState, useEffect)
   - Component lifecycle
   - Form handling

2. **Material-UI Documentation**
   - Component usage
   - Styling with sx prop
   - Table implementation

3. **MongoDB Documentation**
   - Schema design
   - CRUD operations
   - Atlas setup

4. **Express.js Documentation**
   - Route handling
   - Middleware setup
   - Error handling

### 7. Challenges & Solutions
1. **Real-time Updates**
   - Challenge: List not updating after adding component
   - Solution: Implemented callback function to refresh list

2. **Form Validation**
   - Challenge: Ensuring unique serial numbers
   - Solution: Added backend validation and error messages

3. **Styling**
   - Challenge: Consistent design across components
   - Solution: Used Material-UI's built-in components and theming


## Running the Application
1. **Start Backend**
2. **Start Frontend**

## Project Structure
```
aerotrack/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ComponentForm.js
│   │   │   └── ComponentList.js
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│       └── index.html
│
├── server/                # Node.js Backend
│   ├── controllers/      # Request handlers
│   │   └── componentController.js
│   ├── models/          # Database models
│   │   └── Component.js
│   ├── routes/         # API routes
│   │   └── componentRoutes.js
│   ├── .env           # Environment variables
│   └── server.js      # Server entry point
│
├── .gitignore         # Git ignore file
└── README.md         # Project documentation
```

## Installation & Setup

1. **Clone the Repository**
```bash
git clone [repository-url]
cd aerotrack
```

2. **Backend Setup**
```bash
cd server
npm install
# Create .env file with your MongoDB URI
npm start
```

3. **Frontend Setup**
```bash
cd client
npm install
npm start
```

4. **Environment Variables**
Create a `.env` file in the server directory with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoints

### Components
- `GET /api/components` - Get all components
- `POST /api/components` - Create a new component
- `PATCH /api/components/:id/status` - Update component status
- `DELETE /api/components/:id` - Delete a component
