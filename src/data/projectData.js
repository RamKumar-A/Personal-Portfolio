export const projectData = [
  {
    title: 'Watch Realm',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1736856182/Screenshot_2025-01-14_172651_ksqowg.png',
    createdAt: '2024 DEC',
    url: 'https://watch-realm.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/Watch-Realm/',
    description:
      'Watch Realm is an e-commerce platform for purchasing luxurious wristwatches. It features a premium shopping experience with secure transactions powered by the Stripe payment gateway.',
    techStack: ['React', 'React Query', 'Custom API', 'Tailwind CSS'],
    overview:
      'Watch Realm is a luxurious e-commerce platform for wristwatches, featuring secure authentication, wishlist management, order tracking, and a Stripe payment gateway for seamless transactions. It offers a mobile-responsive design for an elegant shopping experience on any device.',

    stackOverview:
      'Watch Realm utilizes a modern tech stack to deliver a seamless and secure e-commerce experience. The frontend is built with React for creating dynamic and reusable components, styled with Tailwind CSS for a responsive and elegant design. State management and data fetching are handled efficiently using React Query, ensuring fast and synchronized updates. The backend features a custom API designed to manage business logic, products, orders, and integration with Stripe for secure and seamless payment processing. Authentication is implemented using JWT tokens, providing secure user login, authorization, and access to features like order tracking and wishlist management. This stack ensures a responsive, user-friendly, and secure platform tailored for a luxurious wristwatch shopping experience.',

    features: [
      {
        heading: 'Authentication Included',
        desc: 'Secure login and registration using JWT tokens. Ensures user-specific features like order tracking and wishlist management.',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736856798/Screenshot_2025-01-14_174229_sqfjkw.png',
        isMobileScreen: false,
      },
      {
        heading: 'Secure Payment Gateway',
        desc: 'Integrated Stripe payment gateway for seamless and secure transactions. Supports multiple payment methods for user convenience.',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736856387/Screenshot_2025-01-14_173551_yfusvp.png',
        isMobileScreen: false,
      },
      {
        heading: 'Mobile Responsive',
        desc: 'Optimized for all devices, ensuring a seamless shopping experience on mobile, tablet, and desktop.',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736868233/WhatsApp_Image_2025-01-14_at_20.50.49_0b6d2bb6_luy9ij.jpg',
        isMobileScreen: true,
      },
    ],
  },
  {
    title: 'Zenlist',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1736857824/Screenshot_2025-01-14_175946_sue9ge.png',
    createdAt: '2024 OCT',
    url: 'https://zenlist-todo-app.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/zenlist/',

    description: `Discover Zenlist, your ultimate task management companion. With a
          user-friendly vibe and powerful features, Zenlist is here to help you
          effortlessly organize, prioritize, and conquer your tasks.`,

    techStack: ['React JS', 'React Query', 'Supabase', 'Material UI'],

    overview: `Zenlist is a task management web app designed for efficiency and personalization. It features a sleek dashboard interface, mobile responsiveness for on-the-go access, secure user authentication, and support for user-preferred themes to enhance the user experience.`,

    stackOverview:
      'The tech stack for this project ensures a modern, scalable, and high-performance application. The frontend is built with React for efficient rendering and reusable components, styled using Material UI (MUI) for consistent and accessible UI elements, and enhanced with Tailwind CSS for a fully responsive and customizable design. State management and data fetching are handled by React Query, offering efficient caching and synchronization with the Supabase API for seamless CRUD operations. Supabase serves as the backend solution, providing API routes, managing user authentication, and enabling real-time functionality. The PostgreSQL-based Supabase Database securely stores user data and tasks. This stack ensures a streamlined development workflow and a robust user experience.',
    features: [
      {
        heading: 'Dashboard',
        desc: 'Centralized hub for task management, allowing users to view and manage tasks efficiently. Visual indicators for task statuses like due dates, priorities, and overdue tasks.',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736857181/Screenshot_2025-01-14_174912_bxoogc.png',
        isMobileScreen: false,
      },
      {
        heading: 'Mobile Responsive',
        desc: 'Fully optimized for various screen sizes, ensuring usability on mobile, tablet, and desktop devices. Persistent user session management to pick up where the user left off, even when switching devices.',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736868216/WhatsApp_Image_2025-01-14_at_20.50.48_d2308a27_hjg0jr.jpg',
        isMobileScreen: true,
      },
      {
        heading: 'Secure User Authentication',
        desc: 'User accounts protected by modern authentication methods, including email/password-based login.',
        isMobileScreen: false,
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736857603/Screenshot_2025-01-14_175615_dvg8fq.png',
      },
    ],
  },
  {
    title: 'Cine Hub',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1736858027/Screenshot_2025-01-14_180305_sbmx2a.png',
    createdAt: '2024 APR',
    url: 'https://cine-hub-flame.vercel.app/',
    gitUrl: 'https://github.com/RamKumar-A/cine-hub',

    description: `Cine Hub stands out as a streamlined movie and TV show exploration platform that emphasizes simplicity. The minimalist approach is aimed at delivering a straightforward and hassle-free browsing experience.`,

    techStack: ['React', 'React Query', 'Material UI', "Third Party Api's"],

    overview:
      'Cine Hub is a movies and series web app that lets users explore detailed information about movies, series, seasons, and episodes. It leverages Trakt API, OMDb API, React, Material UI, and React Query for a seamless and responsive user experience.',

    stackOverview:
      'The tech stack for Cine Hub ensures a robust, scalable, and user-friendly experience for exploring movies and series. The frontend is built with React for a dynamic and responsive user interface, styled using Material UI (MUI) to provide customizable components for displaying detailed movie and series information. React Router enables seamless navigation across pages, including movie details, series details, seasons, and episodes. State management and data fetching are handled by React Query, offering efficient caching, background updates, and synchronization with APIs for real-time data. The app leverages the Trakt API for movie and series metadata, complemented by the OMDb API for detailed information. Material UI themes and responsive design ensure a visually consistent and optimized experience across all devices, while the dark mode enhances usability and aesthetics. This stack provides a seamless integration of modern frontend tools with powerful third-party APIs.',
    features: [
      {
        heading: 'API Integration',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736858218/Screenshot_2025-01-14_180622_nziceg.png',
        desc: 'Fetches movie and series details, including seasons and episodes, using Trakt API and OMDb API. Displays metadata like titles, plots, ratings, posters, and cast information.',
        isMobileScreen: false,
      },
      {
        heading: 'Mobile Responsive',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736868245/WhatsApp_Image_2025-01-14_at_20.50.49_1b00a37a_kovtqb.jpg',
        desc: 'Fully optimized for all devices, ensuring seamless browsing on desktops, tablets, and smartphones.',
        isMobileScreen: true,
      },
      {
        heading: 'Dark Mode',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1736858416/Screenshot_2025-01-14_180949_doqznx.png',
        desc: 'Provides a visually comfortable experience with support for dark mode, enhancing usability during nighttime or low-light conditions.',
        isMobileScreen: false,
      },
    ],
  },
];
