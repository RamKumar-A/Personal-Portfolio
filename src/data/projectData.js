export const projectData = [
  {
    title: 'Watch Realm',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1748441947/Screenshot_2025-05-28_194530_kevyph.png',
    createdAt: '2024 DEC',
    url: 'https://watch-realm.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/Watch-Realm/',
    description:
      'Watch Realm is a modern e-commerce platform for luxury wristwatches, offering a smooth shopping experience with features like user authentication, Stripe payments, and easy product sharing.',
    features: [
      {
        heading: 'User authentication',
        desc: 'User authentication for secure login and account access',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748441971/Screenshot_2025-05-28_194506_q7q3gj.png',
        isMobileScreen: false,
      },
      {
        heading: 'Secure Payment Gateway',
        desc: 'Stripe payment gateway integration for smooth and secure checkout',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748442017/Screenshot_2025-05-28_194737_gwd79t.png',
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
    techStacks: [
      {
        part: 'Frontend',
        tech: ['React', 'React Query', 'Tailwind CSS', 'React Router v6'],
      },
      {
        part: 'Backend',
        tech: ['NodeJS', 'ExpressJS'],
      },
      {
        part: 'Database',
        tech: ['MongoDB'],
      },
      {
        part: 'Authentication',
        tech: ['JWT-based'],
      },
      {
        part: 'Payment Integration',
        tech: ['Stripe'],
      },
    ],
    myRole: [
      'Designed and developed the full frontend UI with responsive and modern design',
      'Integrated Stripe for secure payment processing',
      'Implemented user authentication and protected routes',
      'Built product listing, detail, and checkout pages',
      'Connected frontend with backend APIs and managed state using React Query',
      'Added social sharing and enhanced UX with conditional rendering and loading states',
    ],
    otherFeatures: [
      'Browse and explore a curated collection of luxury watches',
      'Support for creating and managing multiple resumes per account',
      'Share button to easily share product links with others',
      'Add to cart and manage items before checkout',
      'Product details page with high-quality images and descriptions',
      'Smooth UI interactions with React Query and efficient API communication',
    ],
    gradient: 'from-amber-600 via-cyan-600 to-amber-700 ',
  },
  {
    title: 'Interview Prep AI',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1749731962/Screenshot_2025-06-12_175415_yeuhhd.png',
    createdAt: '2025 MAY',
    url: 'https://mern-interview-prep-ai-kappa.vercel.app/',
    gitUrl: 'https://github.com/RamKumar-A/mern-interview-prep-ai',
    description: `Interview Preparation with AI is a smart web app that helps users prepare for job interviews with AI-generated questions, detailed concept explanations, role-based prep management, and secure authentication—all in a mobile-responsive design.
`,
    techStacks: [
      {
        part: 'Frontend',
        tech: ['React', 'React Markdown', 'Tailwind CSS', ' React Router 6'],
      },
      {
        part: 'Backend',
        tech: ['NodeJS', 'ExpressJS'],
      },
      {
        part: 'Database',
        tech: ['MongoDB'],
      },
      {
        part: 'AI Integration',
        tech: ['Gemini AI API'],
      },
      {
        part: 'Authentication',
        tech: ['JWT-based'],
      },
    ],
    myRole: [
      'Built frontend UI and integrated Gemini AI for dynamic Q&A.',
      'Developed role-specific prep flows and concept breakdowns',
      'Implemented user authentication and prep session management',
      'Created a mobile-friendly, responsive interface using Tailwind CSS',
      'Connected frontend to backend APIs and managed state efficiently',
    ],
    features: [
      {
        heading: 'Based on role',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1749732396/Screenshot_2025-06-12_175604_tderxi.png',
        desc: 'Role-based interview preparation',
        isMobileScreen: false,
      },
      {
        heading: 'Mobile Responsive',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1749732575/WhatsApp_Image_2025-06-12_at_18.05.24_59eb5754_vgf4on.jpg',
        desc: 'Fully responsive and mobile-optimized interface',
        isMobileScreen: true,
      },
      {
        heading: 'AI Intergrated',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1749732477/Screenshot_2025-06-12_175537_auhu7i.png',
        desc: 'AI-generated questions and model answers using Gemini AI API',
        isMobileScreen: false,
      },
    ],
    otherFeatures: [
      'Detailed explanations of key concepts',
      'Create, save, and manage custom interview prep sessions',
      'User authentication and session management',
      'Fully mobile-responsive design',
    ],
    gradient: 'from-purple-600 via-fuchsia-400 to-zinc-600 ',
  },
  {
    title: 'Resume Builder',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1748439954/Screenshot_2025-05-28_191528_ngevk2.png',
    createdAt: '2025 APR',
    url: 'https://mern-resume-builder.vercel.app/',
    gitUrl: 'https://github.com/RamKumar-A/mern-resume-builder',
    description: `Resume Builder is a modern and user-friendly web app that helps users quickly create and customize professional resumes. It allows users to input details, choose from multiple themes, edit existing resumes, and instantly preview and print or save them as PDFs using the browser’s built-in print feature.
`,
    techStacks: [
      {
        part: 'Frontend',
        tech: ['React', 'MUI(Material UI)'],
      },
      {
        part: 'Backend',
        tech: ['NodeJS', 'ExpressJS'],
      },
      {
        part: 'Database',
        tech: ['MongoDB'],
      },
      {
        part: 'Authentication',
        tech: ['JWT-based'],
      },
    ],
    myRole: [
      'Built the full frontend UI using MUI components and custom themes',
      'Developed dynamic forms for capturing resume data',
      'Set up backend routes for storing, updating, and retrieving user resumes',
      'Implemented theme switching and live preview functionality',
      'Ensured secure login system and session handling using JWT',
      'Enabled browser-native printing and PDF exporting via a print-ready layout',
    ],
    features: [
      {
        heading: 'Custom Themes',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748439694/portfolio-images/kmnsk0szjxtnmvxcfsll.png',
        desc: "Multiple custom themes using Material UI's theming system",
        isMobileScreen: false,
      },
      {
        heading: 'Secure authentication',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748439859/Screenshot_2025-05-28_185917_zrt1wk.png',
        desc: 'Secure authentication and resume storage',
        isMobileScreen: false,
      },
      {
        heading: 'Downloadable',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748439873/Screenshot_2025-05-28_190011_tso3sn.png',
        desc: 'Printable and downloadable as PDF using browser print dialog',
        isMobileScreen: false,
      },
    ],
    otherFeatures: [
      'Ability to edit and update previously created resumes',
      'Support for creating and managing multiple resumes per account',
      'Live resume preview while editing',
      'Guided form to input resume details.',
      'Fully responsive and mobile-optimized interface',
    ],
    gradient: 'from-lime-500 via-teal-400 to-green-600 ',
  },
  {
    title: 'Zenlist',
    coverImage:
      'https://res.cloudinary.com/dc3yfknua/image/upload/v1748440855/Screenshot_2025-05-28_192849_uzpwqi.png',
    createdAt: '2024 OCT',
    url: 'https://zenlist-todo-app.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/zenlist/',

    description: `Zenlist is a task management web app that helps users stay organized with features like priorities, daily tasks, reminders, a personal dashboard, and secure authentication.`,
    techStacks: [
      {
        part: 'Frontend',
        tech: [
          'React',
          'Tailwind CSS',
          'MUI (Material UI)',
          'React Router v6',
          'React Query',
        ],
      },
      {
        part: 'Backend & Auth',
        tech: ['Supabase'],
      },
      {
        part: 'Database',
        tech: ['Supabase'],
      },
    ],
    features: [
      {
        heading: 'Personal Dashboard',
        desc: 'Personal dashboard with task summaries and quick access',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748440855/Screenshot_2025-05-28_192849_uzpwqi.png',
        isMobileScreen: false,
      },
      {
        heading: 'Reminders',
        desc: 'Set reminders to stay on track',
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748441016/Screenshot_2025-05-28_193259_ufzpb5.png',
        isMobileScreen: false,
      },
      {
        heading: 'Secure User Authentication',
        desc: 'Authentication and user account management',
        isMobileScreen: false,
        image:
          'https://res.cloudinary.com/dc3yfknua/image/upload/v1748440929/Screenshot_2025-05-28_192920_zjd0i3.png',
      },
    ],
    otherFeatures: [
      'Create, update, and organize tasks with priority tags',
      'View and manage daily tasks in a focused view',
      'Fully responsive and mobile-friendly interface',
      'Fast and smooth UX with React Query for data fetching',
    ],
    myRole: [
      'Developed the full frontend and integrated it with Supabase backend',
      'Implemented features like task priorities, daily views, and reminders',
      'Designed the dashboard and user flows for managing tasks',
      'Set up authentication and user session handling',
      'Used React Query for efficient data caching and updates',
      'Styled the UI using a mix of Material UI and Tailwind CSS for a clean, responsive layout',
    ],
    gradient: 'from-rose-400 via-violet-400 to-orange-600 ',
  },

  //   {
  //     title: 'Cine Hub',
  //     coverImage:
  //       'https://res.cloudinary.com/dc3yfknua/image/upload/v1736858027/Screenshot_2025-01-14_180305_sbmx2a.png',
  //     createdAt: '2024 APR',
  //     url: 'https://cine-hub-flame.vercel.app/',
  //     gitUrl: 'https://github.com/RamKumar-A/cine-hub',

  //     description: `A minimalist platform to browse movies and TV shows using public APIs. Focused on simple design and UX.
  // `,

  //     techStack: ['React', 'React Query', 'Material UI', "Third Party Api's"],

  //     features: [
  //       {
  //         heading: 'API Integration',
  //         image:
  //           'https://res.cloudinary.com/dc3yfknua/image/upload/v1736858218/Screenshot_2025-01-14_180622_nziceg.png',
  //         desc: 'Fetches movie and series details, including seasons and episodes, using Trakt API and OMDb API. Displays metadata like titles, plots, ratings, posters, and cast information.',
  //         isMobileScreen: false,
  //       },
  //       {
  //         heading: 'Mobile Responsive',
  //         image:
  //           'https://res.cloudinary.com/dc3yfknua/image/upload/v1736868245/WhatsApp_Image_2025-01-14_at_20.50.49_1b00a37a_kovtqb.jpg',
  //         desc: 'Fully optimized for all devices, ensuring seamless browsing on desktops, tablets, and smartphones.',
  //         isMobileScreen: true,
  //       },
  //       {
  //         heading: 'Dark Mode',
  //         image:
  //           'https://res.cloudinary.com/dc3yfknua/image/upload/v1736858416/Screenshot_2025-01-14_180949_doqznx.png',
  //         desc: 'Provides a visually comfortable experience with support for dark mode, enhancing usability during nighttime or low-light conditions.',
  //         isMobileScreen: false,
  //       },
  //     ],
  //   },
];
