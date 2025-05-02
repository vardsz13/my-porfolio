import portfolioImage from '../assets/projects/portfolio-website.png';

export const projects = [
  {
    id: "portfolio-website", 
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my projects and skills.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    imageUrl: portfolioImage, // Using imported image
    modules: [
      {
        title: "Responsive Design",
        description: "Implemented responsive layouts that work seamlessly across all device sizes.",
        imageUrl: portfolioImage,
      },
      {
        title: "Dark/Light Mode",
        description: "Added theme switching functionality with persistent user preferences.",
        imageUrl: portfolioImage,
      },
      {
        title: "Interactive Sections",
        description: "Created engaging interactive elements like animated skill bars and project showcases.",
        imageUrl: portfolioImage,
      },
    ]
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking.",
    technologies: ["Next.js", "Redux", "Chart.js", "Firebase"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://dashboard-demo.yourdomain.com",
    imageUrl: "/images/projects/dashboard.jpg", // You can import this image too if available
    modules: [
      {
        title: "Analytics Dashboard",
        description: "Real-time sales analytics with interactive charts and customizable date ranges.",
        imageUrl: "/images/projects/dashboard-analytics.jpg",
      },
      {
        title: "Inventory Management",
        description: "Comprehensive inventory tracking system with low-stock alerts and batch operations.",
        imageUrl: "/images/projects/dashboard-inventory.jpg",
      },
      {
        title: "Order Processing",
        description: "Order management workflow with status tracking and customer communication tools.",
        imageUrl: "/images/projects/dashboard-orders.jpg",
      },
    ]
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description: "A web application that provides real-time weather forecasts and historical data for locations worldwide.",
    technologies: ["React", "OpenWeather API", "Styled Components"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app.yourdomain.com",
    imageUrl: "/images/projects/weather-app.jpg", // You can import this image too if available
    modules: [
      {
        title: "Location Search",
        description: "Intuitive location search with autocomplete and saved location history.",
        imageUrl: "/images/projects/weather-search.jpg",
      },
      {
        title: "Current Conditions",
        description: "Detailed current weather conditions with visual indicators for temperature, precipitation, and more.",
        imageUrl: "/images/projects/weather-current.jpg",
      },
      {
        title: "Forecast View",
        description: "7-day forecast with hourly breakdowns and interactive visualization.",
        imageUrl: "/images/projects/weather-forecast.jpg",
      },
    ]
  }
];