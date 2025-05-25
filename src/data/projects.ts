import { Project } from '@/types/project';
import portfolioImage from '../assets/projects/porfolio-website/portfolio-website.png';
import portfolioResponmsiveImage from '../assets/projects/porfolio-website/portfolio-responsive-design.png';
import portfolioDarkModeImage from '../assets/projects/porfolio-website/portfolio-dark-light-mode.png';
import portfolioTransitionsImage from '../assets/projects/porfolio-website/portfolio-page-transitions.png';
import portfolioContactImage from '../assets/projects/porfolio-website/portfolio-contact-form.png';
import portfolioInteractiveImage from '../assets/projects/porfolio-website/portfolio-interactive-elements.png';
import ecommerceImage from '../assets/projects/ecommerce-website/ecommerce-website.png';
import ecommerceHomeImage from '../assets/projects/ecommerce-website/ecommerce-featured.png';
import ecommerceProductsImage from '../assets/projects/ecommerce-website/ecommerce-items.png';
import ecommerceContactImage from '../assets/projects/ecommerce-website/ecommerce-contact-module.png';
import ecommerceAboutImage from '../assets/projects/ecommerce-website/ecommerce-about-us-module.png';
import ecommerceCartImage from '../assets/projects/ecommerce-website/ecommerce-cart.png';
import ecommerceOrderSummaryImage from '../assets/projects/ecommerce-website/ecommerce-summary-orders.png';
import ecommerceAdminImage from '../assets/projects/ecommerce-website/ecommerce-admin.png';
import ecommerceDashboardImage from '../assets/projects/ecommerce-website/ecommerce-dashboard.png';
import ecommerceProductManagementImage from '../assets/projects/ecommerce-website/ecommerce-product-management.png';
import ecommerceTransactionManagementImage from '../assets/projects/ecommerce-website/ecommerce-transaction-management.png';
import ecommerceAdminContactImage from '../assets/projects/ecommerce-website/ecommerce-admin-contact.png';
import ecommerceOrderReportsImage from '../assets/projects/ecommerce-website/ecommerce-order-reports.png';

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
    githubUrl: "",
    liveUrl: "https://john-paul-varde-porfolio.vercel.app",
    imageUrl: portfolioImage,
    promoVideo: "https://drive.google.com/file/d/1ob9vIuHF1luNTIZTWLQiKxwCILRn9EVN/preview",
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
    description: "The E-commerce Project is a user-friendly online store designed to make shopping for shoes, apparel, and accessories easy and enjoyable. The website helps customers feel confident making purchases and managing their orders.",
    technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript", "PHP", "phpMyAdmin"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: ecommerceImage,
    promoVideo: "https://drive.google.com/file/d/1mNp-ROP_ZsAVlSkX-uGr9DkW77xDi_V4/preview",
    year: 2024,
    modules: [
      {
        title: "Home Module",
        description: "The main page where customers can easily browse all available products and see featured items.",
        imageUrl: ecommerceHomeImage,
      },
      {
        title: "Product Module",
        description: "Shop for shoes, clothes, and accessories. Products are grouped by type so customers can quickly find what they want.",
        imageUrl: ecommerceProductsImage,
      },
      {
        title: "Contact Us",
        description: "A simple form where customers can send questions or messages directly to the company. Also shows the company's location on a map so customers know where to find the company.",
        imageUrl: ecommerceContactImage,
      },
      {
        title: "About Us",
        description: "Learn about the company's history, mission, and values.",
        imageUrl: ecommerceAboutImage,
      },
      {
        title: "Cart Module",
        description: "Customers can add, remove, or update items in their shopping cart before checking out.",
        imageUrl: ecommerceCartImage,
      },
       {
        title: "Order Summary",
        description: "Shows a clear summary of what the customer is about to order before they finish buying.",
        imageUrl: ecommerceOrderSummaryImage,
      },
       {
        title: "Admin Portal",
        description: "A secure area for staff to manage products, orders, and customer information.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
       {
        title: "Dashboard",
        description: "Gives admins a quick overview of sales and product performance with easy-to-read charts.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
       {
        title: "Product Management",
        description: "Admins can add, edit, or update products and keep stock levels accurate.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
       {
        title: "Transaction Management",
        description: "Admins can view, confirm, or cancel orders to keep everything running smoothly.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
       {
        title: "Admin Contact",
        description: "Admins can see and respond to customer messages sent through the contact form.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
       {
        title: "Order Reports",
        description: "Admins can track sales and revenue with easy-to-understand reports.",
        imageUrl: "/images/projects/ecom-cart.jpg",
      },
    ]
  },
  
];