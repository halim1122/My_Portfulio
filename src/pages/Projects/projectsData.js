const projectsData = [
  {
    id: "online tuorigem sports",
    title: "Wanderora",
    image: "https://i.ibb.co.com/pB3mwFm4/Screenshot-2025-08-12-160559.png",
    demoLink: "https://a11-tourist-auth.web.app/",
    github: "https://github.com/halim1122/b11a12-client-side",
    description:
      "Explore top travel destinations and curated packages for unforgettable adventures. Explore top trips and unique adventures.",
    features: [
      "🪴Booking, view, Pay, and delete your Boking Trips with full CRUD functionality.",
      "🔐 Secure user authentication with protected routes.",
      "📆 see top rateing tripe and booking tripe",
      "🔍 You select your tour-guide.",
      "🖼️ Modern UI with responsive design and slider banner.",
      "🧾 Real-time feedback via styled toast messages and confirmation modals."
    ],
    tech: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB", "JWT"],
    challenges: [
      "Implement pagination at the footer of all the tables you have implemented (show 10 users at a time).",
      "Implement JWT on authentication",
      "If a user books more than 3 times, he/she will see a congratulations message."
    ],
    future: [
      "The user will be able to manage their profile.",
      "The user can select their guide.",
      "The user can see all tripe."
    ],
    side: "left"
  },
  {
    id: "BrainBand",
    title: "Assignment - improve your brain ",
    image: "https://i.ibb.co.com/LDMMzz1T/Screenshot-2025-08-12-154847.png",
    demoLink: "https://assignment-for-auth-41899.web.app/",
    github: "https://github.com/halim1122/b11a11-client-side",
    description:
      "This platform lets users manage assignments with difficulty levels, marks, authentication, search, filtering, and role-based access.",
    features: [
      "User Authentication – Login/Logout system for accessing protected features.",
      "Assignment Listing with Filters – View assignments with difficulty tags and marks, filter by level.",
      "Search Functionality – Search assignments by name.",
      "CRUD Operations – View, edit, and delete assignments from cards.",
      "Assignment Creation – Add new assignments via the Create Assignment page.",
      "Role-based Pages – Separate pages for pending and attempted assignments.",
    ],
    tech: ["React", "Express", "MongoDB", "JWT", "JavaScript", "Firebase"],
    challenges: [
      "Form Validation – Validate create/update assignment and auth forms with proper rules.",
      "Filter & Search – Backend-based filter by difficulty and search assignments.",
      "JWT Authentication – Generate, store, and verify JWT for private routes.",
      "Theme Toggle – Switch between light and dark modes system-wide."
    ],
    future: [
      "Assignment Deadlines – Set and display submission deadlines.",
      "Grading System – Automated or manual grading with feedback.",
      "File Attachments – Allow uploading files with assignments."
    ],
    side: "up"
  },
  {
    id: "HobbyHub",
    title: "Create Hobby",
    image: "https://i.ibb.co.com/NggZ8R5N/Screenshot-2025-08-12-170758.png",
    demoLink: "https://hobby-auth-app.web.app/",
    github: "https://github.com/halim1122/b11a10-client-side",
    description:
      "HobbyHub is a community platform that lets users discover, create, and join local hobby groups with secure authentication and interactive features.",
    features: [
      "Firebase Authentication (Email/Password)",
      "Real-time data fetching and updates",
      "Group search and filter functionality.",
      "Persistent login state on page reload.",
      "User can see featured ongoing groups section",
    ],
    tech: ["React", "Firebase", "Tailwind","CSS", "JavaScript"],
    challenges: [
      "Dark/light theme toggle on the home page.",
      "Integration of Lottie React animations.",
      "Disable joining groups if the start date has passed."
    ],
    future: [
      "Show transaction history with Hobbys",
      "Admin dashboard for See all users"
    ],
    side: "right"
  },
];

export default projectsData;
