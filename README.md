# CureFast

CureFast is a full-stack Hospital Management System developed using the MERN stack with Clerk authentication and responsive Tailwind CSS UI. The platform streamlines doctor management, appointment booking, healthcare service management, and real-time hospital analytics through separate patient and admin portals.

---

## Features

- Secure authentication using Clerk
- Role-based admin and patient access
- Doctor discovery and appointment booking
- Slot-based scheduling system
- Hospital service management
- Real-time admin dashboard analytics
- Responsive UI for all devices
- JWT-protected REST APIs
- Cloudinary image upload integration
- Stripe payment integration support

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB
- Mongoose

### Authentication & Integrations
- Clerk
- JWT
- Cloudinary
- Stripe

---

## Project Structure

```bash
CureFast/
│
├── frontend/
├── admin/
├── backend/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Aanyaverma011/CureFast.git
cd CureFast
```

---

## Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Setup Admin Panel

```bash
cd admin
npm install
npm run dev
```

---

## Setup Backend

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Create `.env` files inside frontend, admin, and backend folders.

Example:

```env
CLERK_SECRET_KEY=your_key
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

---

## Screenshots

Add screenshots of:
- Home Page
- Doctor Listing
- Appointment Booking
- Admin Dashboard
- Services Section

---

## Future Enhancements

- AI-powered doctor recommendation
- Online payment system
- Email/SMS notifications
- Medical history management
- Video consultation integration

---

## Author

### Aanya Verma

- GitHub: https://github.com/Aanyaverma011
- LinkedIn: https://www.linkedin.com/in/aanya-verma-74a1872a3
- LeetCode: https://leetcode.com/u/aanyathecoder1/
