import { Project } from '@/types/project';
import portfolioImage from '../assets/projects/porfolio-website/portfolio-website.png';
import ecommerceImage from '../assets/projects/ecommerce-website/ecommerce-website.png';
import iotImage from '../assets/projects/iot-mobile-app/iot-mobile-app.png';
import iotHomeModuleImage from '../assets/projects/iot-mobile-app/iot-home-module.png';
import iotSensorModuleImage from '../assets/projects/iot-mobile-app/iot-sensor-module.png'; 
import iotAlarmStateModuleImage from '../assets/projects/iot-mobile-app/iot-alarm-state-module.png';
import iotHardwareIntegrationImage from '../assets/projects/iot-mobile-app/iot-hardware-integration.png';
import iotContactModuleImage from '../assets/projects/iot-mobile-app/iot-contact-module.png';
import iotAboutModuleImage from '../assets/projects/iot-mobile-app/iot-about-module.png';

export const projects: Project[] = [
  {
    id: "portfolio-website", 
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my projects and skills.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    imageUrl: portfolioImage,
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
    id: "file-management-system",
    title: "Web-based File Management System",
    description: "A comprehensive file management system built with Laravel and React for efficient document organization and sharing.",
    technologies: ["Laravel", "Inertia JS", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/file-management",
    liveUrl: "https://file-manager-demo.yourdomain.com",
    imageUrl: portfolioImage,
    modules: [
      {
        title: "User Authentication",
        description: "Secure user authentication system with role-based access control.",
        imageUrl: "/images/projects/file-auth.jpg",
      },
      {
        title: "File Organization",
        description: "Intuitive file organization with folders, tags, and advanced search capabilities.",
        imageUrl: "/images/projects/file-organization.jpg",
      },
      {
        title: "Sharing & Collaboration",
        description: "Advanced file sharing options with permission controls and collaboration features.",
        imageUrl: "/images/projects/file-sharing.jpg",
      },
    ]
  },
  {
    id: "iot-mobile-app",
    title: "Mobile App with IoT Technologies",
    description: "A Flutter-based mobile application that integrates with IoT devices for smart home monitoring and control.",
    technologies: ["Flutter", "Dart", "C/C++", "Firebase"],
    githubUrl: "https://github.com/yourusername/iot-app",
    liveUrl: "https://iot-app-demo.yourdomain.com",
    imageUrl: iotImage,
    modules: [
      {
        title: "Home Module",
        description: "Central dashboard for monitoring all connected devices and current status.",
        imageUrl: iotHomeModuleImage,
      },
      {
        title: "Sensor Module",
        description: "Real-time data collection and visualization from various IoT sensors.",
        imageUrl: iotSensorModuleImage,
      },
      {
        title: "Alarm State Module",
        description: "Configurable alert system with notification preferences and history.",
        imageUrl: iotAlarmStateModuleImage,
      },
      {
        title: "Contact Module",
        description: "User support interface with direct messaging and help resources for troubleshooting.",
        imageUrl: iotContactModuleImage,
      },
      {
        title: "About Module",
        description: "Information about the application, version details, and developer documentation.",
        imageUrl: iotAboutModuleImage,
      },
      {
        title: "IoT Hardware Integration",
        description: "Custom firmware development for integrating with various IoT devices.",
        imageUrl: iotHardwareIntegrationImage,
      },
    ]
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and admin dashboard.",
    technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript", "PHP", "phpMyAdmin"],
    githubUrl: "https://github.com/yourusername/ecommerce-website",
    liveUrl: "https://ecommerce-demo.yourdomain.com",
    imageUrl: ecommerceImage,
    modules: [
      {
        title: "Product Catalog",
        description: "Comprehensive product listing with categories, filters, and search functionality.",
        imageUrl: "/images/projects/ecom-products.jpg",
      },
      {
        title: "Shopping Cart",
        description: "Intuitive cart system with product management and checkout process.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
      {
        title: "Admin Dashboard",
        description: "Complete admin interface for managing products, orders, customers, and store analytics.",
        imageUrl: "/images/projects/ecom-admin.jpg",
      },
      {
        title: "Transaction System",
        description: "Secure order processing with receipt generation and transaction history.",
        imageUrl: "/images/projects/ecom-transactions.jpg",
      },
    ]
  },
  
];