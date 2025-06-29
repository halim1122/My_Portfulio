const projectsData = [
  {
    id: "plant-care-tracker",
    title: "PlantCare Tracker",
    image: "https://i.ibb.co/7tf7jJ4p/Screenshot-2025-06-29-123125.png",
    demoLink: "https://plant-care-client.web.app/",
    github: "https://github.com/atik735/Plant-care-client",
    description:
      "Track plant watering schedules, plant health, and care logs with Firebase Auth.",
    features: [
  "🪴 Add, view, update, and delete your plants with full CRUD functionality.",
  "🔐 Secure user authentication with protected routes.",
  "📆 Log and track watering schedules, health status, and care levels.",
  "🌙 Dark/Light theme toggle.",
  "🔍 Sort plants by Next Watering Date or Care Level.",
  "🖼️ Modern UI with responsive design and slider banner.",
  "🧾 Real-time feedback via styled toast messages and confirmation modals."
],
    tech: ["React", "Tailwind CSS", "Firebase", "Node.js"],
        challenges: [
      "Integrating calendar-based date tracking for watering",
      "Handling image uploads and previews smoothly",
      "Designing a dashboard"
    ],
    future: [
      "Add email reminders for watering days",
      "Expand to support multiple user plant collections",
      "Designing a fully dynamic dashboard"
    ],
    side:"left"
  },
  {
    id: "booknest",
    title: "BookNest - Library System",
    image: "https://i.ibb.co/cKKr2CKR/Screenshot-2025-06-29-123154.png",
    demoLink: "https://library-management-ad416.web.app/",
    github: "https://github.com/atik735/Library-client",
    description:
      "Library system with book borrowing, return logic, category filtering, and admin panel.",
    features: [
  "🔐 Firebase Authentication (Email/Password + Google Sign In)",
  "📚 Browse and filter books by category",
  "🛡️ Protected routes (borrowing requires login)",
  "📥 Borrow & Return books with date tracking",
  "📦 Real-time book quantity updates",
  "✨ Responsive layout for mobile and desktop",
  "⭐ Book ratings displayed using a React rating component",
  "🔍 Search/filter available books",
  "🧑‍💻 User profile update support",
  "🔗 Dynamic routing for books and categories",
  "⚠️ Toast and popup alerts for better UX",
  "📁 Structured folder system for scalable development"
],
    tech: ["React", "Express", "MongoDB", "JWT"],
        challenges: [
      "Managing quantity changes on borrow/return in real time",
      "Building nested routes for categories and individual books",
      "JWT-based user role protection (admin, borrower)"
    ],
        future: [
      "Admin panel for adding/removing books",
      "User borrow history and due date system",
      "Improve search filter using fuzzy search"
    ],
    side: "up"
  },
  {
    id: "bill-management",
    title: "Bill Management",
    image: "https://i.ibb.co/Xk7GXwT5/Screenshot-2025-06-29-122955.png",
    demoLink: "https://bill-pays-98812.web.app/",
    github: "https://github.com/atik735/Bill-Management",
    description:
      "Bill Management system with balance check, Firebase login, cancel payment & responsive UI.",
    features: [
      "🔐 Firebase Authentication (Email/Password)",
"➕ Add new bills with amount and date",
"✅ Mark bills as paid/unpaid",
"🧮 Summary section for total paid/unpaid",
"🧾 Bill history list with status filter",
"🎯 User-specific data tracking",
"📱 Fully responsive and mobile-first layout",
"📣 Toast notifications on actions",
    ],
    tech: ["React", "Firebase", "Tailwind"],
    challenges: [
      "Ensuring real-time balance updates across multiple components",
      "Protecting sensitive routes with Firebase Auth context",
      "Implementing conditional logic to block overpayment"
    ],
    future: [
      "Add downloadable payment receipts (PDF)",
      "Show transaction history with filters",
      "Admin dashboard for bill analytics"
    ],
    side: "right"
  },
];

export default projectsData;
