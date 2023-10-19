import {
  spotifyb,
  sleeptrack,
  weatherapp,
  blog,
  portfolio,
} from "./assets/images";

const projectsData = [
  {
    name: "Weather Forecast",
    image: weatherapp,
    description:
      "I developed a React-based weather app that provides real-time weather updates through an intuitive user interface. The integration of a city-suggestion API significantly enhanced the user search experience, minimizing search-related errors. Leveraging the OpenWeather API, the app delivers comprehensive weather information, including real-time data and forecasts, for any selected city.",
    link: "https://github.com/Calvin-QB/weather-app",
  },
  {
    name: "My Portfolio",
    image: portfolio,
    description:
      "    This is my personal portfolio site where I can showcase the projects I've worked on. It has also been a exciting and fun opportunity to express my creativity.  Additionally,  it gave me a chance to explore some great and intriguing npm packages to integrate with React.",
    link: "https://github.com/Calvin-QB/calvin-portfolio",
  },
  {
    name: "Blog Site",
    image: blog,
    description:
      "A full-stack React blog application that offers comprehensive content management capabilities. By seamlessly integrating a MySQL database, the app ensures prompt data retrieval and updates for both content and user information. To enhance security, I incorporated JWT-based authorization. Furthermore, the application's performance was optimized by centralizing variables using React Context, which streamlined data access across various components.",
    link: "https://github.com/Calvin-QB/blog-post",
  },
  {
    name: "Sleep Tracker",
    image: sleeptrack,
    description:
      "Mobile sleep tracker application that allows users to monitor and analyze their sleep patterns. By integrating advanced tracking features, users can gain insights into their sleep cycles and overall sleep health. The app's user-friendly interface provides comprehensive data visualization, making it easier for individuals to understand and optimize their rest. Through continuous monitoring and feedback, users can make informed decisions about their sleep habits and overall well-being.",
    link: "https://github.com/Calvin-QB/sleeptrack",
  },
  {
    name: "Spotify Stats",
    image: spotifyb,
    description:
      "In this portfolio piece, I demonstrate my skills in API data retrieval and frontend design using Angular. The webpage interacts with a Node.js/Express backend, focusing on exploring Spotify's extensive track collection. The backend handles OAuth authentication with the Spotify API, while I've implemented HTTP requests for specific API actions. Users can easily search and navigate artists, albums, and tracks.",
    link: "https://github.com/Calvin-QB/spotifyb",
  },
];

export default projectsData;
