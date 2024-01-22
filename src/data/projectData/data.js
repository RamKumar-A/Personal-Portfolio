import {
  carouselImgWatchRealm,
  carouselImgZenlist,
  carouselImgCineHub,
  watchRealm,
  zenlist,
  cineHub,
} from '../imgData/img';

export const projectData = [
  {
    title: 'Zenlist',
    img: zenlist,
    carouselImg: carouselImgZenlist,
    url: 'https://zenlist-todo-app.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/zenlist/',

    description: `Discover Zenlist, your ultimate task management companion. With a
          user-friendly vibe and powerful features, Zenlist is here to help you
          effortlessly organize, prioritize, and conquer your tasks.`,

    techStack: ['React', 'React Router', 'Redux ToolKit', 'Tailwind'],

    overview: `Zenlist is the ultimate solution for efficient task management, featuring a dynamic dashboard and core functionalities that transform the way you approach productivity. Seamlessly add, prioritize, and complete tasks within a user-friendly interface, while customizable lists, detailed subtasks, and deadline management enhance your organizational prowess. Zenlist's intuitive design and centralized dashboard ensure a smooth, streamlined experience, making it your indispensable companion in conquering daily tasks and projects.
`,
    stackOverview: `Zenlist is a frontend-focused masterpiece, leveraging cutting-edge technologies to redefine your task management experience. Built with React for dynamic user interfaces, Redux Toolkit for efficient state management, and Tailwind CSS for a visually stunning design, Zenlist ensures a seamless and delightful interaction. With the added brilliance of local storage, your data persists locally, enabling uninterrupted productivity. Zenlist isn't just a task manager; it's a frontend journey where innovation meets usability for an unparalleled user experience.`,
  },

  {
    title: 'Watch Realm',
    img: watchRealm,
    carouselImg: carouselImgWatchRealm,
    url: 'https://watch-realm.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/Watch-Realm/',

    description: `Watch Realm elevates your luxury watch shopping experience with an
          intuitive interface, detailed product pages. While it doesn't handle
          payments directly, it seamlessly guides you through the exploration
          and selection process.`,

    techStack: ['React', 'React Router', 'Redux ToolKit', 'Tailwind'],

    overview: `Welcome to Watch Realm, an intricately designed frontend-focused e-commerce platform that prioritizes user-centric functionality. Delve into detailed product pages, utilize smart filtering, and seamlessly manage selections with an intuitive cart and wishlist. Effortless order creation and a comprehensive order summary streamline your experience. Watch Realm is more than a display—it's a functional showcase, crafting a seamless journey where functionality meets elegance.    
`,
    stackOverview: `In crafting Watch Realm, I've leveraged the power of React to create a frontend masterpiece. The dynamic and interactive interfaces are brought to life with React, ensuring a seamless user experience. React Router is seamlessly integrated, providing intuitive navigation and handling API calls for state management, while a touch of Redux Toolkit enhances the overall efficiency.Tailwind CSS adds a touch of elegance to the visual elements and responsiveness, ensuring a visually stunning design that complements the curated collections.
`,
  },
  {
    title: 'Cine Hub',
    img: cineHub,
    carouselImg: carouselImgCineHub,
    url: 'https://cine-hub-movie-tvshows-search-app.netlify.app/',
    gitUrl: 'https://github.com/RamKumar-A/cine-hub',

    description: `Cine Hub stands out as a streamlined movie and TV show exploration platform that emphasizes simplicity. Unlike other platforms, Cine Hub forgoes features like user account creation, trailer previews, and the ability to save favorites. The minimalist approach is aimed at delivering a straightforward and hassle-free browsing experience.`,

    techStack: ['React', 'React Router', 'Styled Components', 'Context Api'],

    overview: `Cine Hub stands out as a streamlined movie and TV show exploration platform that emphasizes simplicity. Unlike other platforms, Cine Hub forgoes features like user account creation, trailer previews, and the ability to save favorites. The minimalist approach is aimed at delivering a straightforward and hassle-free browsing experience. Users can quickly search for movies and TV shows without the need for account creation, and while there are no personalization features such as saving favorites, the absence of such functionalities contributes to the website's clean and uncluttered design. Despite lacking some traditional features, Cine Hub remains a convenient and efficient option for users who prefer a no-frills approach to discovering and accessing cinematic content.  
`,
    stackOverview: `
Cine Hub is a user-friendly website built with React, utilizing the Context API for efficient state management. Styled Components are employed to create visually appealing and responsive designs, enhancing the overall user interface. React Router facilitates seamless navigation between different pages, ensuring a smooth and dynamic browsing experience. The website's tech stack prioritizes modularity, scalability, and a streamlined user interface for exploring movies and TV shows.
`,
  },
];
