import { Project } from '@/types/project';
import portfolioImage from '../assets/projects/porfolio-website/portfolio-website.png';
import portfolioResponmsiveImage from '../assets/projects/porfolio-website/portfolio-responsive-design.png';
import portfolioDarkModeImage from '../assets/projects/porfolio-website/portfolio-dark-light-mode.png';
import portfolioTransitionsImage from '../assets/projects/porfolio-website/portfolio-page-transitions.png';
import portfolioContactImage from '../assets/projects/porfolio-website/portfolio-contact-form.png';
import portfolioInteractiveImage from '../assets/projects/porfolio-website/portfolio-interactive-elements.png';
import ecommerceImage from '../assets/projects/ecommerce-website/ecommerce-website.png';
import iotImage from '../assets/projects/iot-mobile-app/iot-mobile-app.png';
import iotHomeModuleImage from '../assets/projects/iot-mobile-app/iot-home-module.png';
import iotSensorModuleImage from '../assets/projects/iot-mobile-app/iot-sensor-module.png'; 
import iotAlarmStateModuleImage from '../assets/projects/iot-mobile-app/iot-alarm-state-module.png';
import iotHardwareIntegrationImage from '../assets/projects/iot-mobile-app/iot-hardware-integration.png';
import iotContactModuleImage from '../assets/projects/iot-mobile-app/iot-contact-module.png';
import iotAboutModuleImage from '../assets/projects/iot-mobile-app/iot-about-module.png';
import fileManagementImage from '../assets/projects/file-management-system/file-management-system.png';


export const projects: Project[] = [
  {
    id: "portfolio-website", 
    title: "Modern Portfolio Website",
    description: "My personal website that showcases my work, skills, and experience in an interactive and visually appealing way. It adjusts perfectly to any device (phone, tablet, or computer) and includes a user-friendly light/dark mode toggle for comfortable viewing.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/vardsz13/portfolio",
    liveUrl: "https://jp-varde.vercel.app",
    imageUrl: portfolioImage,
    promoVideo: "https://www.youtube.com/watch?v=yourdemo",
    year: 2025,
    modules: [
      {
        title: "Responsive Design",
        description: "Created a website that looks great on all devices from phones to desktops, with easy navigation and readable content no matter the screen size.",
        imageUrl: portfolioResponmsiveImage,
      },
      {
        title: "Dark/Light Mode",
        description: "Added a simple switch that lets users choose between dark and light themes, which remembers their preference for future visits.",
        imageUrl: portfolioDarkModeImage,
      },
      {
        title: "Page Transitions",
        description: "Incorporated smooth animated transitions between pages that make browsing the website feel polished and professional.",
        imageUrl: portfolioTransitionsImage,
      },
      {
        title: "Contact Form",
        description: "Implemented an easy-to-use contact section where potential employers can reach out directly through the website with form validation and confirmation messages.",
        imageUrl: portfolioContactImage,
      },
      {
        title: "Interactive Elements",
        description: "Built engaging components that respond to user actions, making the website feel more dynamic and modern while highlighting my technical skills.",
        imageUrl: portfolioInteractiveImage,
      },
    ]
  },
  {
    id: "file-management-system",
    title: "Web-based File Management System",
    description: "A comprehensive file management system built with Laravel and React for efficient document organization and sharing.",
    technologies: ["Laravel", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "",
    year: 2025,
    imageUrl: fileManagementImage,
    promoVideo: "https://drive.google.com/file/d/1RRnSP17QBQwe5f6ttDoT_0hwwm4rQlx9/preview",
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
    githubUrl: "",
    liveUrl: "",
    imageUrl: iotImage,
    promoVideo: "https://drive.google.com/file/d/1PeruIbaNCOlZfcAT_y43f7ycK25nUobV/preview",
    year: 2024,
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
    githubUrl: "",
    liveUrl: "",
    imageUrl: ecommerceImage,
    promoVideo: "https://drive.google.com/file/d/1mNp-ROP_ZsAVlSkX-uGr9DkW77xDi_V4/preview",
    year: 2024,
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